import { useState, useEffect } from "react";
import CartCard from "./CartCard";

export default function CartDiv({ user }) {
  const [cart, setCart] = useState([]);

  const getCart = async () => {
    const response = await fetch(`/api/cart/${user.username}`);
    const data = await response.json();

    if (!response.ok) {
      return {};
    }
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
      {cart.map((item, index) => (
        <CartCard
          key={index}
          productID={item.product}
          quantity={item.quantity}
        />
      ))}
    </>
  );
}
