import { useState } from "react";

export default function useCart() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const addToCart = async () => {};

  const removeFromCart = async () => {};

  const updateCart = async () => {};

  const emptyCart = async () => {};

  return {
    addToCart,
    removeFromCart,
    updateCart,
    emptyCart,
    loading,
    error,
  };
}
