import { useState, useEffect } from "react";
import { BiSave } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import useCart from "../../Hooks/useCart";
import Loading from "../Other/Loading";
import CartCard from "./CartCard";
import Empty from "./Empty";

export default function CartDiv({ user }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const { updateCart, emptyCart } = useCart();

  const getCart = async () => {
    const response = await fetch(`/api/cart/${user.username}`);
    const data = await response.json();

    if (!response.ok) {
      return {};
    }
    setLoading(false);
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
      {loading && <Loading />}
      {!loading && cart.length === 0 ? (
        <Empty />
      ) : (
        <>
          <div className="min-h-screen relative">
            <div className="px-8">
              {cart.map((item) => (
                <CartCard
                  key={`${item.product}`}
                  productID={item.product}
                  quantity={item.quantity}
                  user={user.username}
                  updateCart={setCart}
                  setTotal={setTotal}
                />
              ))}
            </div>

            <div className="flex flex-col sticky px-8 w-full bottom-0 lg:absolute bg-base-200 pt-4 z-10">
              <div className="pb-6">
                <h1 className="text-2xl md:text-4xl font-bold">Total: ${total.toFixed(2)}</h1>
              </div>
              <div className="flex pb-3  w-full ">
                <button className="btn btn-outline btn-info w-1/2" onClick={()=>console.log(cart)}>
                  <BiSave size={20}  />
                  Save
                </button>
                <button
                  className="btn btn-outline btn-error w-1/2"
                  onClick={() => window.confirmEmpty.showModal()}
                >
                  <BsFillTrashFill size={20} />
                  Empty Cart
                </button>
              </div>

              <button className="btn btn-success w-full ">Checkout</button>
            </div>
            <dialog
              id="confirmEmpty"
              className="modal modal-bottom sm:modal-middle"
            >
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Empty Cart</h3>
                <p className="py-4">
                  Are you sure you want to empty your cart?
                </p>
                <div className="flex justify-center gap-3">
                  <button
                    className="btn w-1/2"
                    onClick={() => {
                      emptyCart(user.username);
                      setCart([]);
                    }}
                  >
                    Confirm
                  </button>
                  <button className="btn w-1/2 btn-outline btn-error">
                    Cancel
                  </button>
                </div>
              </form>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </>
      )}
    </>
  );
}
