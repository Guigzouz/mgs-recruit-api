// auth-controller.js

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const { userSchema } = require("../../config/schema/user-schema");
const { generateRandomCodename } = require("../helpers/new-recruit-randomizer");

const User = mongoose.model("User", userSchema);

const createUser = async (req, res) => {
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists." });
    }

    // If user does not exist, create a new user
    const user = new User({
      codename: generateRandomCodename(),
      email: req.body.email,
      hashed_password: await bcrypt.hash(req.body.password, 10),
    });

    // Save the new user to the database
    await user.save();

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while creating the user.",
      error: error,
    });
  }
};

const loginUser = async (req, res) => {
  const existingUser = await User.findOne({ email: req.body.email });
  if (!existingUser) {
    return res.status(400).send("Cannot find user");
  }

  try {
    if (await bcrypt.compare(req.body.password, existingUser.hashed_password)) {
      const token = jwt.sign(
        {
          _id: existingUser._id,
          email: existingUser.email,
          codename: existingUser.codename,
          createdAt: existingUser.createdAt,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      );

      res.status(200).send({ jwt: token });
    } else {
      res.status(203).send("Not Allowed");
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "Internal server error", error: error.message });
  }
};

module.exports = {
  createUser,
  loginUser,
};
