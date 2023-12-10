const { default: mongoose } = require("mongoose");
const { rectruitSchema } = require("../schema/recruit-schema");

const Recruit = mongoose.model("Recruit", rectruitSchema);

const crocodile = new Recruit({
  firstName: "crocodile",
  lastName: "nile",
  age: 22,
  gender: "M",
});

console.log("welcome to you :", crocodile.firstName, crocodile.lastName);
