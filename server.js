const app = require("../nodejs-homework-API-REST/src/app");
const connectDB = require("./db");

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running. Use our API on port ${PORT}`);
});
