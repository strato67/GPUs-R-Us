import { useState } from "react";

export default function useCart() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [cartDetails, setCartDetails] = useState({});

  const getCartDetail = async (username) => {
    const response = await fetch(`/api/cart/${username}/total`);
    const data = await response.json();

    if (!response.ok) {
      return {};
    }

    setCartDetails(data);
  };

  const addToCart = async (username, productID) => {
    setLoading(true);
    setError(null);

    const response = await fetch(`/api/cart/${username}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productID }),
    });

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
    }

    setLoading(false);
  };

  const removeFromCart = async (username, productID, quantity) => {
    setLoading(true);
    setError(null);

    const response = await fetch(`/api/cart/${username}/${productID}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity }),
    });

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
    }

    setLoading(false);
  };

  const updateCart = async (username, cartUpdate) => {
    setLoading(true);
    setError(null);

    const response = await fetch(`/api/cart/${username}/`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartUpdate),
    });

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
    }

    setLoading(false);
  };

  const emptyCart = async (username) => {
    setLoading(true);
    setError(null);

    const response = await fetch(`/api/cart/${username}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
    }

    setLoading(false);
  };

  return {
    addToCart,
    getCartDetail,
    removeFromCart,
    updateCart,
    emptyCart,
    loading,
    error,
    cartDetails,
  };
}
