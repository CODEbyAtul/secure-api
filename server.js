require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "My secure API is running!"
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});