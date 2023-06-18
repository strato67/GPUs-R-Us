const express = require("express");
const app = express();
const mongoose = require("mongoose");

const index = require("./routes/index");
const products = require("./routes/products");
const order = require("./routes/order");
const user = require("./routes/user");
const contact = require("./routes/contact");
const reviews = require("./routes/reviews");

require("dotenv").config();

app.use((request, response, next) => {
  console.log(request.path, request.method);
  next();
});
app.use(express.json());

app.use("/api", index);
app.use("/api/products", products);
app.use("/api/order", order);
app.use("/api/user", user);
app.use("/api/contact", contact);
app.use("/api/reviews", reviews);

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
