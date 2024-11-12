// motherbase-controller.js

const { default: mongoose } = require("mongoose");
const { motherbaseSchema } = require("../../config/schema/motherbase-schema");

const Motherbase = mongoose.model("Motherbase", motherbaseSchema);

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

module.exports = {
  createMotherbase,
};
