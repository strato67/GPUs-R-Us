import { useState, useEffect } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { FaPlus, FaMinus } from "react-icons/fa";
import useCart from "../../Hooks/useCart";

export default function CartCard({ productID, quantity, user, updateCart, setTotal }) {
  const [prodQuant, setQuantity] = useState(quantity);
  const [itemInfo, setItemInfo] = useState({});
  const { removeFromCart } = useCart();
  const getItemInfo = async () => {
    const response = await fetch(`/api/products/${productID}`);
    const data = await response.json();
    if (!response.ok) {
      return {};
    }
    return data;
  };

  useEffect(() => {
    (async () => {
      const data = await getItemInfo();
      setItemInfo(data.product);
    })();
  }, []);

  return (
    <>
      <div className="pt-6">
        <div className="indicator w-full place-self-center">
          <span className="indicator-item  badge badge-secondary text-2xl py-6 px-5 m-3 font-bold select-none z-1">
            {prodQuant}
          </span>
          <div className="card lg:card-side bg-base-100 shadow-xl w-full place-self-center">
            <figure className="max-w-sm  place-self-center">
              <img
                src="https://c1.neweggimages.com/ProductImage/14-137-676-V08.jpg"
                alt="placeholder"
              />
            </figure>
            <div className="card-body pr-10">
              <h2 className="card-title text-2xl overflow-hidden ">
                {itemInfo.name}
              </h2>
              <div className="badge badge-secondary py-6 px-4 my-4 text-2xl font-semibold mb-4 ">
                ${(Math.round(itemInfo.price * 100) / 100).toFixed(2)}
              </div>
              <div className="justify-end self-end flex-col pb-2">
                <div
                  className={`${
                    prodQuant < itemInfo.maxOrder ? `invisible` : ``
                  } badge badge-accent select-none text-center ml-1`}
                >
                  Cannot add more of this item.
                </div>
                <div className="flex gap-2 py-2">
                  <button
                    className="btn btn-outline btn-primary"
                    onClick={() => {
                      if (prodQuant < itemInfo.maxOrder) {
                        setQuantity(prodQuant + 1);
                        updateCart((prev) => {
                          const index = prev.findIndex(
                            (item) => item.product === productID
                          );
                          const newCart = [...prev];
                          newCart[index].quantity = prodQuant + 1;
                          return newCart;
                        });
                        setTotal((prev) => prev + itemInfo.price);
                      }
                    }}
                  >
                    <FaPlus />
                  </button>

                  <button className="btn btn-outline glass w-12 text-xl btn-disabled">
                    {prodQuant}
                  </button>
                  <button
                    className="btn btn-outline btn-primary "
                    onClick={() => {
                      if (prodQuant > 0) {
                        setQuantity(prodQuant - 1);
                        updateCart((prev) => {
                          const index = prev.findIndex(
                            (item) => item.product === productID
                          );
                          const newCart = [...prev];
                          newCart[index].quantity = prodQuant - 1;
                          return newCart;
                        });
                        setTotal((prev) => prev - itemInfo.price);
                      }
                      
                    }}
                  >
                    <FaMinus />
                  </button>
                  <button
                    className="btn btn-outline btn-error"
                    onClick={() => {
                      updateCart((prev) =>
                        prev.filter((item) => item.product !== productID)
                      );
                      removeFromCart(user, productID);
                      setTotal((prev) => prev - itemInfo.price * prodQuant);
                    }}
                  >
                    <BsFillTrashFill />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
