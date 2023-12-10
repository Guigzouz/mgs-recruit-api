const { default: mongoose } = require("mongoose");
const { rectruitSchema } = require("../../config/schema/recruit-schema");

const Recruit = mongoose.model("Recruit", rectruitSchema);
const crocodile = new Recruit({
  firstName: "crocodile",
  lastName: "nile",
  age: 22,
});

const testMethod = async (req, res) => {
  try {
    return res
      .status(200)
      .send(`Welcome to you: ${crocodile.firstName} ${crocodile.lastName}`);
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = {
  testMethod,
};
