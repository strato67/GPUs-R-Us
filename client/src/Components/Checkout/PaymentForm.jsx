import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import {
  PaymentElement,
  AddressElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { GrFormNextLink } from "react-icons/gr";

export default function PaymentForm({ setStep, cart, total }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: `${window.location.origin}/` },
    });

    //may need to create separate route for this

    //setStep(3);
  };

  return (
    <>
      <form className="flex flex-col">
        <div className="flex flex-col self-center w-96 lg:w-1/2 lg:py-10">
          <AddressElement options={{ mode: "shipping" }} />
          <PaymentElement id="payment-element" />
        </div>

        <div className="flex flex-col sticky px-8 w-full bottom-0 lg:absolute bg-base-200 py-6 md:py-4 z-10">
          <div className="pb-6 self-end">
            <h1 className="text-2xl md:text-4xl font-bold">
              Total: ${total.toFixed(2)}
            </h1>
          </div>
          <div className="flex">
            <button
              className="btn btn-outline btn-info w-1/2"
              onClick={() => setStep(1)}
            >
              <AiFillEdit />
              Review Order
            </button>
            <button
              className="btn btn-outline btn-success w-1/2"
              onClick={handleSubmit}
              disabled={!stripe || loading || !elements}
            >
              Purchase
              <GrFormNextLink />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
