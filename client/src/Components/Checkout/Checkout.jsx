import { useEffect } from "react";
import { Link } from "react-router-dom";
import ReviewCart from "./ReviewCart";
import useAuthContext from "../../Hooks/useAuthContext";

export default function Checkout() {
  const { user } = useAuthContext();

  return <>{user ? <ReviewCart user={user} /> : <Link to="/cart" />}</>;
}
