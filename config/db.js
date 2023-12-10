require("dotenv").config();
const mongoose = require("mongoose");

const MONGODB_URL = process.env.MONGODB_URL;

const db = async () => {
  try {
    const con = await mongoose.connect(MONGODB_URL);
    console.log(
      `mongodb connected: ${con.connection.host} on URL: ${MONGODB_URL}`
    );
  } catch (error) {
    console.error(error);
  }
};

module.exports = db;
