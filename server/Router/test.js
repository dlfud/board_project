const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // res.send({ test: "hi" });
  res.send("Hello World!");
});

module.exports = router;
