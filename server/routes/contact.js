const express = require("express");
const router = express.Router();
const { postMessage } = require("../controllers/contactController");

router.post("/", postMessage);

module.exports = router;
