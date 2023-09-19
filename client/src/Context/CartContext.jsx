import { createContext, useState, useEffect } from "react";
import useAuthContext from "../Hooks/useAuthContext";
import useLogout from "../Hooks/useLogout" 

const CartContext = createContext({
  cartDetails: {},
  getCartDetail: () => {},
});

const CartContextProvider = ({ children }) => {
  const { user } = useAuthContext();
  const [cartDetails, setCartDetails] = useState({});
  const { logout } = useLogout();

  const getCartDetail = async (username) => {
    const response = await fetch(`/api/cart/${username}/total`, {
      headers: {
        authorization: `Bearer ${user.userToken}`,
      },
    });
    const data = await response.json();

    if (!response.ok) {
      logout();
    }

    setCartDetails(data);
  };

  useEffect(() => {
    if (user) {
      getCartDetail(user.username);
    }
  }, [user]);

  return (
    <CartContext.Provider value={{ cartDetails, getCartDetail }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
