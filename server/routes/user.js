const express = require("express");
const router = express.Router();
const {
  loginUser,
  signUpUser,
  getUserInfo,
  updateUserEmail,
  updateUserPassword,
  deleteAccount,
} = require("../controllers/userController");

router.get("/:id", getUserInfo);
router.post("/signup", signUpUser);
router.post("/login", loginUser);
router.patch("/e/:id", updateUserEmail);
router.patch("/p/:id", updateUserPassword);
router.delete("/:id", deleteAccount);

module.exports = router;
