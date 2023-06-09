const mongoose = require("mongoose");
const { mongodbURL } = require("../secret");

const connectDB = async (options = {}) => {
  try {
    await mongoose.connect(mongodbURL, options);
    console.log("Conncetion DB");

    mongoose.connection.on("error", (error) => {
      console.error("DB Connection Error: ", error);
    });
  } catch (error) {
    mongoose.connection.on("error", (error) => {
      console.error("Could Not Connected DB: ", error.toString());
    });
  }
};

module.exports = connectDB;
