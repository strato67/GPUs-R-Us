import { useState, useEffect, Suspense } from "react";
import { AiFillEdit } from "react-icons/ai";
import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";
import Loading from "../Other/Loading";
import CheckoutCard from "./CheckoutCard";
import Empty from "../Cart/Empty";

export default function ReviewCart({
  user,
  setStep,
  setCart,
  setTotal,
  cart,
  total,
}) {
  const getCart = async () => {
    const response = await fetch(`/api/cart/${user.username}`);
    const data = await response.json();

    if (!response.ok) {
      return [];
    }

    return [data.cart, data.total];
  };

  useEffect(() => {
    (async () => {
      const data = await getCart();
      setCart(data[0]);
      setTotal(data[1]);
    })();
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        {cart.length == 0 ? (
          <Empty />
        ) : (
          <>
            <div className="flex flex-col">
              <div className="px-6 self-center w-full">
                <div className="card w-full bg-base-100 shadow-xl">
                  <div className="overflow-x-auto">
                    <table className="table table-zebra">
                      <thead>
                        <tr>
                          <th>Item #</th>
                          <th>Product Name</th>
                          <th>Quantity</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item, index) => (
                          <CheckoutCard
                            key={item._id}
                            itemNum={index + 1}
                            item={item}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sticky px-8 w-full bottom-0 lg:absolute bg-base-200 py-6 md:py-4 z-10">
              <div className="pb-6 self-end">
                <h1 className="text-2xl md:text-4xl font-bold">
                  Total: ${total.toFixed(2)}
                </h1>
              </div>
              <div className="flex">
                <Link className="btn btn-outline btn-info w-1/2" to="/cart">
                  <AiFillEdit />
                  Edit Cart
                </Link>
                <button
                  className="btn btn-outline btn-success w-1/2"
                  onClick={() => setStep(2)}
                >
                  Next
                  <GrFormNextLink />
                </button>
              </div>
            </div>
          </>
        )}
      </Suspense>
    </>
  );
}
