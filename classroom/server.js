const express = require("express");
const app = express();
const users = require("./routes/user.js");
const { applyTimestamps } = require("../models/review");

app.get("/", (req, res) => {
  res.send("Hi, I'm Root");
});

app.use("/users", users);

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
