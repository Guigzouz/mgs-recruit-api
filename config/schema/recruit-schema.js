const { default: mongoose } = require("mongoose");

const rectruitSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  gender: {
    type: String,
    enum: ["M", "F"],
    default: "M",
  },
  recruitmentDate: { type: Date, default: Date.now },
});

module.exports = {
  rectruitSchema,
};
