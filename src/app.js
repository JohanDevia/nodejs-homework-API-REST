const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
require("dotenv").config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use("/users", userRoutes);

module.exports = app;
