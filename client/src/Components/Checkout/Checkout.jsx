import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import useAuthContext from "../../Hooks/useAuthContext";

export default function Checkout() {

    const { user } = useAuthContext();

    return(<>{!user && <Navigate to="/cart"/>}</>);
};
