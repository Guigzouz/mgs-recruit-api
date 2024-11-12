const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  codename: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hashed_password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = {
  userSchema,
};
