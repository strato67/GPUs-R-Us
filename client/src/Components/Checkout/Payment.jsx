import { useState, useEffect, Suspense } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js/pure";
import PaymentForm from "./PaymentForm";
import Loading from "../Other/Loading";

export default function Payment({ user, setStep, cart, total }) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    (async () => {
      const response = await fetch("/api/payment/config", {headers: { authorization: `Bearer ${user.userToken}` }});
      const data = await response.json();
      setStripePromise(loadStripe(data.publishableKey));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/payment/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.userToken}`,
        },
        body: JSON.stringify({ price: total }),
      });
      const data = await response.json();
      setClientSecret(data.clientSecret);
    })();
  }, []);

  const options = {
    clientSecret,
    appearance: {
      theme: "night",
      labels: "floating",
    },
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        {cart.length == 0 ? (
          <Empty />
        ) : (
          <>
            {clientSecret && stripePromise && (
              <Elements stripe={stripePromise} options={options}>
                <PaymentForm setStep={setStep} user={user} total={total} />
              </Elements>
            )}
          </>
        )}
      </Suspense>
    </>
  );
}
