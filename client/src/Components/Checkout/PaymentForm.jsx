import { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import useOrder from "../../Hooks/useOrder";
import useCart from "../../Hooks/useCart";
import ErrorFormMessage from "../Other/ErrorFormMessage";
import {
  PaymentElement,
  AddressElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

export default function PaymentForm({ setStep, user, total }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const { createOrder } = useOrder();
  const { emptyCart } = useCart();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const response = await stripe.confirmPayment({
      elements,
      confirmParams: {},
      redirect: "if_required",
    });

    if (response.error) {
      setMessage(response.error.message);
    } else {
      createOrder(user.username);
      setStep(3);
    }

    setLoading(false);
  };

  return (
    <>
      <form className="flex flex-col">
        <div className="flex flex-col self-center w-96 lg:w-1/2 lg:py-10">
          <AddressElement options={{ mode: "shipping" }} />
          <PaymentElement id="payment-element" />
          {message && (
            <ErrorFormMessage message={message} className="self-center" />
          )}
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
              {loading ? "Processing..." : "Pay"}

              <MdPayment />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
