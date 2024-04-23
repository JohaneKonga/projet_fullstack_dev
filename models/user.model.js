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
const ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY;

userSchema.methods.generateAuthToken = function () {
    const payload = {
        user_id: this._id.toString(), 
        roles: this.roles
    };

    return jwt.sign(payload, ACCESS_TOKEN_KEY, { expiresIn: '3d' }); 
};


module.exports = mongoose.model("User", userSchema);
