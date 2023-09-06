import { useState } from "react";

export default function useSettings() {
  const [emailerror, setEmailError] = useState(null);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [passerror, setPassError] = useState(null);

  const changeEmail = async (emailObj) => {
    const { username, newEmail } = emailObj;

    setEmailError(null);
    setEmailSuccess(false);
    const response = await fetch(`/api/user/e/${username}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, newEmail }),
    });
    const json = await response.json();
    if (!response.ok) {
      setEmailError(json.error);
      setEmailSuccess(false);
    }
    setEmailSuccess(true);
  };

  const changePassword = async (passwordObj) => {
    const { username } = passwordObj;
    setPassError(null);
    setPasswordSuccess(false);
    const response = await fetch(`/api/user/p/${username}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(passwordObj),
    });
    const json = await response.json();
    if (!response.ok) {
      setPassError(json.error);
      setPasswordSuccess(false);
    }
    setPasswordSuccess(true);
  };

  const deleteAccount = async (username) => {
    const response = await fetch(`/api/user/${username}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    if (!response.ok) {
      console.log(json.error);
    }
    return json;
  };

  return {
    changeEmail,
    changePassword,
    deleteAccount,
    emailerror,
    passerror,
    emailSuccess,
    passwordSuccess,
  };
}
