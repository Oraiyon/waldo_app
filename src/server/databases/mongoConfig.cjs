const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const database = async () => {
  try {
    await mongoose.connect(process.env.URL);
  } catch (error) {
    console.log(error);
  }
};

module.exports = database;
