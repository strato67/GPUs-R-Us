import { useState } from "react";

export default function useContact() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const sendMessage = async (contactInfo) => {
    setLoading(true);
    setError(null);
    const response = await fetch("api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactInfo),
    });

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
    }
    if (response.ok) {

      setLoading(false);

    }
  };
  return { sendMessage, loading, error };
}
