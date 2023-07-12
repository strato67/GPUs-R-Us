const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  res.send("get cart");
});

router.patch("/:id", (req, res) => {
  res.send("update cart");
});

router.delete("/:id", (req, res) => {
    res.send("delete cart");
});

module.exports = router;
