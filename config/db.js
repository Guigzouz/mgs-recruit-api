require("dotenv").config();
const mongoose = require("mongoose");

const MONGODB_URL = process.env.MONGODB_URL;

const db = async () => {
  try {
    console.log(MONGODB_URL);
    const con = await mongoose.connect(MONGODB_URL);
    console.log(`mongodb connected: ${con.connection.host}`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = db;
