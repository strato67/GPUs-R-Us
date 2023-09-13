import { createContext, useState, useEffect } from "react";
import useAuthContext from "../Hooks/useAuthContext";
import useCart from "../Hooks/useCart";

const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const { cartDetails, getCartDetail } = useCart();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      getCartDetail(user.username);
    }
  }, []);

  return <CartContext.Provider value={cartDetails}>{children}</CartContext.Provider>;
}
