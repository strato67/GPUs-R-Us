import { useState, useEffect } from "react";
import { BiSave } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import Loading from "../Other/Loading";
import CartCard from "./CartCard";
import Empty from "./Empty";

export default function CartDiv({ user }) {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCart = async () => {
    const response = await fetch(`/api/cart/${user.username}`);
    const data = await response.json();

    if (!response.ok) {
      return {};
    }
    setLoading(false);
    return data.cart;
  };

  useEffect(() => {
    (async () => {
      const data = await getCart();
      setCart(data);
    })();
  }, []);

  return (
    <>
      {loading && <Loading />}
      {!loading && cart.length === 0 ? (
        <Empty />
      ) : (
        <>
          <div className="min-h-screen relative">
            <div className="px-8">
              {cart.map((item, index) => (
                <CartCard
                  key={index}
                  productID={item.product}
                  quantity={item.quantity}
                  user={user.username}
                  updateCart={setCart}
                />
              ))}
            </div>
            <div className="flex flex-col sticky px-8   w-full bottom-0 lg:absolute bg-base-200 pt-4 ">
              <div className="flex pb-3  w-full ">
                <button className="btn btn-outline btn-info w-1/2 ">
                  <BiSave size={20} />
                  Save
                </button>
                <button className="btn btn-outline btn-error w-1/2">
                  <BsFillTrashFill size={20} />
                  Empty Cart
                </button>
              </div>

              <button className="btn btn-success w-full ">Checkout</button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
