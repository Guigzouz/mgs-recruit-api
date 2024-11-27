// recruit-controller.js

const { default: mongoose } = require("mongoose");
const { rectruitSchema } = require("../../config/schema/recruit-schema");
const { generateRandomRecruit } = require("../helpers/new-recruit-randomizer");
const { motherbaseSchema } = require("../../config/schema/motherbase-schema");

const Recruit = mongoose.model("Recruit", rectruitSchema);
const Motherbase = mongoose.model("Motherbase", motherbaseSchema);

const createRandomRecruit = async (req, res) => {
  try {
    const { _id } = req.payload; // Extract user_id from JWT payload

    const usersMotherbase = await Motherbase.findOne({ user_id: _id });
    console.log("users motherbase :", usersMotherbase);
    const recruitData = await generateRandomRecruit(usersMotherbase._id);
    const newRecruit = new Recruit(recruitData);

    console.log(recruitData);

    await newRecruit.save();
    return res.status(201).json({ message: "Success", recruit: recruitData });
  } catch (error) {
    return res
      .status(500)
      .send({ error: error, message: "Internal Server Error" });
  }
};

const getAllRecruits = async (req, res) => {
  const { _id } = req.payload; // Extract user_id from JWT payload

  const usersMotherbase = await Motherbase.findOne({ user_id: _id });
  console.log("users motherbase :", usersMotherbase);

  try {
    const recruits = await Recruit.find({ motherbase_id: usersMotherbase._id });
    if (!recruits) {
      res.status(404).json({ message: "No recruits" });
    }

    res.status(200).json({ message: "Success", recruits });
  } catch (error) {
    return res
      .status(500)
      .send({ error: error, message: "Internal Server Error" });
  }
};

module.exports = {
  createRandomRecruit,
  getAllRecruits,
};
