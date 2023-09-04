import { useState } from "react";

export default function useSettings() {
  const [error, setError] = useState(null);
  const [emailSuccess, setEmailSuccess] = useState(false);

  const changeEmail = async (emailObj) => {
    const { username, newEmail } = emailObj;

    setError(null);
    setEmailSuccess(false);
    const response = await fetch(`/api/user/e/${username}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, newEmail }),
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setEmailSuccess(false);
    }
    setEmailSuccess(true);
  };

  return { changeEmail, error, emailSuccess };
}
