import useAuthContext from "./useAuthContext";

export default function useOrder() {
  const { user } = useAuthContext();
  const createOrder = async (userID) => {
    const response = await fetch("api/order/", {
      method: "POST",
      headers: { "Content-Type": "application/json", "authorization": `Bearer ${user.userToken}` },
      body: JSON.stringify({ username: userID }),
    });
    
    const json = await response.json();

  };

  return { createOrder };
};
