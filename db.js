const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Johan:ecyzTzcqW4AQzhDY@cluster0.ttujz6s.mongodb.net/"
    );
    console.log("Database connection successful");
  } catch (error) {
    console.error("Database connection error", error);
    process.exit(1);
  }
};

module.exports = connectDB;
