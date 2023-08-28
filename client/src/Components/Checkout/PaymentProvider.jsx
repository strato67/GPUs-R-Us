import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51NkA7yByfABA1QAT8O24DVEDwhhQaRZwloPL6SH1fP8McehVjuv63ElLfOfcvpuUdS5LtaicsABwI6MdbRaYowcW00F4zzxrPW"
);

export default function PaymentProvider() {

    
  return (
    <Elements stripe={stripePromise}>

    </Elements>
  );
}
