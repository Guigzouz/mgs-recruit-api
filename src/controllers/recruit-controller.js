// recruit-controller.js

const { default: mongoose } = require("mongoose");
const { rectruitSchema } = require("../../config/schema/recruit-schema");
const { generateRandomRecruit } = require("../helpers/new-recruit-randomizer");

const Recruit = mongoose.model("Recruit", rectruitSchema);

const testMethod = async (req, res) => {
  try {
    return res
      .status(200)
      .send(`Welcome to you: ${crocodile.firstName} ${crocodile.lastName}`);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const createRandomRecruit = async (req, res) => {
  try {
    const recruitData = await generateRandomRecruit();
    const newRecruit = new Recruit(recruitData);

    console.log(recruitData);

    await newRecruit.save();
    return res
      .status(201)
      .send(
        `New recruit created: ${newRecruit.firstName} ${newRecruit.lastName}, Age: ${newRecruit.age}`
      );
  } catch (error) {
    return res
      .status(500)
      .send({ error: error, message: "Internal Server Error" });
  }
};

module.exports = {
  testMethod,
  createRandomRecruit,
};
