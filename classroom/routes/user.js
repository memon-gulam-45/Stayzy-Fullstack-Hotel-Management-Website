const express = require("express");
const router = express.Router();

//Index Route
router.get("/", (req, res) => {
  res.send("GET for Users");
});
router.get("/:id", (req, res) => {
  res.send("GET for Show Users");
});
router.post("/", (req, res) => {
  res.send("POST for Users");
});
router.delete("/:id", (req, res) => {
  res.send("DELETE for Users ID");
});

module.exports = router;
