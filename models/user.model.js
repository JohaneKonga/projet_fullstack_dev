const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roles: {
    User: {
      type: Number,
      default: 4526,
    },
    Admin: Number,
  },
});


const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

userSchema.methods.generateToken = function () {
    const payload = {
        user_id: this._id, 
        roles: this.roles
    };

    return jwt.sign(payload, SECRET_KEY, { expiresIn: '3d' }); 
};


module.exports = mongoose.model("User", userSchema);
