const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");
const { userSchema } = require("../../config/schema/user-schema");
const { motherbaseSchema } = require("../../config/schema/motherbase-schema");
const { generateRandomCodename } = require("../helpers/new-recruit-randomizer");
const { signJwt } = require("../helpers/jwt-helper");

const User = mongoose.model("User", userSchema);
const Motherbase = mongoose.model("Motherbase", motherbaseSchema);

const createUser = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists." });
    }

    // Create and save user
    const user = new User({
      codename: generateRandomCodename(),
      email: req.body.email,
      hashed_password: await bcrypt.hash(req.body.password, 10),
    });

    await user.save();

    // Create and save motherbase directly
    const existingMotherbase = await Motherbase.findOne({ user_id: user._id });
    if (existingMotherbase) {
      return res
        .status(400)
        .json({ message: "Motherbase with this user_id already exists." });
    }

    const motherbase = new Motherbase({
      user_id: user._id,
      gmp_count: 100,
    });

    await motherbase.save();

    // Generate JWT
    const token = signJwt(
      { _id: user._id, email: user.email, codename: user.codename },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(201).json({
      message: "User and its motherbase created successfully",
      user,
      motherbase,
      jwt: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while creating the user and motherbase.",
      error: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  const existingUser = await User.findOne({ email: req.body.email });
  if (!existingUser) {
    return res.status(400).send({ message: "Cannot find user" });
  }

  try {
    if (await bcrypt.compare(req.body.password, existingUser.hashed_password)) {
      const token = signJwt(
        {
          _id: existingUser._id,
          email: existingUser.email,
          codename: existingUser.codename,
          createdAt: existingUser.createdAt,
        },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );

      res.status(200).send({ jwt: token });
    } else {
      res.status(403).send({ message: "Not Allowed" });
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
