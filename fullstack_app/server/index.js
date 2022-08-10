const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json()); 
const filePath = path.join(__dirname, "/index.html");

app.get("/", (req, res) => {
  console.log("ROUTE /");
});

app.get("/login", (req, res) => {
  res.json({ id: "test@test.com", password: "test" });
  console.log("Welcome to Login Page");
});
app.get("/signup", (req, res) => {
  res.sendFile(filePath);
  console.log("Welcome to Signup Page");
});

app.listen(4000, () => {
  console.log(`Server Started at ${4000}`);
});
