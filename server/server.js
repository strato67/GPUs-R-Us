const express = require("express");
const app = express();
const mongoose = require("mongoose");

const index = require("./routes/index");
const products = require("./routes/products");
const order = require("./routes/order");
const user = require("./routes/user");

require("dotenv").config();

app.use((request, response, next) => {
  console.log(request.path, request.method);
  next();
});
app.use(express.json());

app.use("/", index);
app.use("/products", products);
app.use("/order", order);
app.use("/user", user);

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening on port 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
