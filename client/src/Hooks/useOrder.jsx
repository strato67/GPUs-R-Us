export default function useOrder() {
  const createOrder = async (userID) => {
    const response = await fetch("api/order/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: userID }),
    });

    const json = await response.json();

  };

  return { createOrder };
};
