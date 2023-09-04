const express = require("express");
const router = express.Router();
const {
  loginUser,
  signUpUser,
  getUserInfo,
  updateUserEmail,
} = require("../controllers/userController");

router.post("/signup", signUpUser);

router.post("/login", loginUser);

router.get("/:id", getUserInfo);

router.delete("/:id", (request, response) => {
  response.json({ message: "delete user" });
});

router.patch("/e/:id", updateUserEmail);

module.exports = router;
