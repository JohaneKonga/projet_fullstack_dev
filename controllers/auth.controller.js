const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    const token = user.generateAuthToken();
    const { password: hashed, ...userWithoutPassword } = user._doc;
    res.status(201).json({ user: userWithoutPassword, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log(err);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ error: "Invalid credentials" });

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(400).json({ error: "Invalid credentials" });

    const token = user.generateAuthToken();
    const { password: hashed, ...userWithoutPassword } = user._doc;
    res
      .header("x-auth-token", token)
      .status(200)
      .json({ user: userWithoutPassword, token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

};

const logout = async (req, res) => {};

module.exports = { register, login, logout };
