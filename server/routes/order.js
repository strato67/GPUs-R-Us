const express = require("express");
const router = express.Router();

const { createOrder } = require("../controllers/orderController");

router.get("/", (request, response) => {
  response.json({ message: "All orders" });
});

router.get("/:id", (request, response) => {
  response.json({ message: "single order" });
});

router.post("/", createOrder);

router.delete("/:id", (request, response) => {
  response.json({ message: "delete from order" });
});

router.patch("/:id", (request, response) => {
  response.json({ message: "update order" });
});

module.exports = router;
