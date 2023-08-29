require("dotenv").config({ path: "../.env" });

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const getPublishableKey = (req, res) => {
  try {
    res
      .status(200)
      .send({ publishableKey: process.env.STRIPE_PUBLISHABLE_KEY });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createPaymentIntent = async (req, res) => {
  const { price } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "CAD",
      amount: price,
      automatic_payment_methods: { enabled: true },
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getPublishableKey, createPaymentIntent };
