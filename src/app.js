const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const contactsRoutes = require("./routes/contactsRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/contacts", contactsRoutes);
app.use("/api/users", authRoutes);

module.exports = app;
