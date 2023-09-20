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

const requireAuth = require("../middleware/requireAuth");

router.get("/:id", getUserInfo);
router.post("/signup", signUpUser);
router.post("/login", loginUser);
router.patch("/e/:id", updateUserEmail).use(requireAuth);
router.patch("/p/:id", updateUserPassword).use(requireAuth);
router.delete("/:id", deleteAccount).use(requireAuth);

module.exports = router;
