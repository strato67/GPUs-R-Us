const express = require("express");
const router = express.Router();
const {
  loginUser,
  signUpUser,
  getUserInfo,
} = require("../controllers/userController");

router.post("/signup", signUpUser);

router.post("/login", loginUser);

router.get("/:id", getUserInfo);

router.delete("/:id", (request, response) => {
  response.json({ message: "delete user" });
});

router.patch("/:id", (request, response) => {
  response.json({ message: "update user info" });
});

module.exports = router;
