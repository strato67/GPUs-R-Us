import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Empty from "../Cart/Empty";

export default function PaymentSuccess({ user }) {
  return (
    <>
      {user ? (
        <>
          <div className="flex flex-col min-h-screen bg-base-200 items-center">
            <div className="md:pt-24 pt-8 w-96 md:w-max">
              <div className=" flex flex-col ">
                <h1 className="text-9xl font-bold self-center">
                  <AiOutlineCheckCircle />
                </h1>
                <h2 className="text-2xl font-bold py-2 self-center">
                  Payment Confirmed
                </h2>
                <p className="pt-6 pb-8">
                  Thank you for your purchase! You will receive an email
                  confirmation shortly.
                </p>
                <Link to="/" className="btn btn-primary">
                  Return Home
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Empty />
      )}
    </>
  );
}
