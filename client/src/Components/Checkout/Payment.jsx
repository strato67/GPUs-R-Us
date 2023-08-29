import { useState, useEffect, Suspense } from "react";
import { loadStripe } from "@stripe/stripe-js/pure";
import PaymentForm from "./PaymentForm";
import Loading from "../Other/Loading";

export default function Payment({ setStep, cart, total }) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    (async () => {
      const response = await fetch("/api/payment/config");
      const data = await response.json();
      setStripePromise(loadStripe(data.publishableKey));
    })();
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        {cart.length == 0 ? (
          <Empty />
        ) : (
          <div className="flex flex-col">
            <PaymentForm setStep={setStep} cart={cart} total={total} />
          </div>
        )}
      </Suspense>
    </>
  );
}
