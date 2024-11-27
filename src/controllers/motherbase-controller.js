// motherbase-controller.js

const { default: mongoose } = require("mongoose");
const { motherbaseSchema } = require("../../config/schema/motherbase-schema");

const Motherbase = mongoose.model("Motherbase", motherbaseSchema);

// not used but just in case it stays here
const createMotherbase = async (req, res) => {
  try {
    const existingMotherbase = await Motherbase.findOne({
      user_id: req.body.user_id,
    });
    if (existingMotherbase) {
      return res
        .status(400)
        .json({ message: "Motherbase with this user_id already exists." });
    }

    const motherbase = new Motherbase({
      user_id: req.body.user_id,
      gmp_count: 100,
    });

    await motherbase.save();
    res
      .status(201)
      .json({ message: "Motherbase created successfully", motherbase });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occured while creating the motherbase.",
      error: error,
    });
  }
};

// JWT Secured
const getUsersMotherbase = async (req, res) => {
  try {
    const { _id } = req.payload; // Extract user_id from JWT payload

    const usersMotherbase = await Motherbase.findOne({ user_id: _id });

    if (!usersMotherbase) {
      return res.status(404).json({ message: "Motherbase not found." });
    }

    res.status(200).json({
      message: "User's motherbase fetched successfully.",
      motherbase: usersMotherbase,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while fetching the motherbase.",
      error: error.message,
    });
  }
};

module.exports = {
  createMotherbase,
  getUsersMotherbase,
};
