import { useState, useEffect } from "react";
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
        cart.map((item, index) => (
          <CartCard
            key={index}
            productID={item.product}
            quantity={item.quantity}
          />
        ))
      )}
    </>
  );
}
