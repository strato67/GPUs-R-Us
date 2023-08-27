import { useState, useEffect, Suspense } from "react";
import Loading from "../Other/Loading";
import CheckoutCard from "./CheckoutCard";
import Empty from "../Cart/Empty";

export default function ReviewCart({ user }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const getCart = async () => {
    const response = await fetch(`/api/cart/${user.username}`);
    const data = await response.json();

    if (!response.ok) {
      return {};
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
            <div className="min-h-screen relative bg-base-200 flex flex-col">
              <h1 className="text-3xl font-bold text-center py-6 mb-4">
                Review Order
              </h1>
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
          </>
        )}
      </Suspense>
    </>
  );
}
