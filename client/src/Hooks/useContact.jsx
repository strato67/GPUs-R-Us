import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "./useAuthContext";

export default function useContact() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const sendMessage = async (userInfo) => {
    setLoading(true);
    setError(null);
    const response = await fetch("api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    });

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      setLoading(false);
      navigate("/");
    }
  };
  return { sendMessage, loading, error };
}
