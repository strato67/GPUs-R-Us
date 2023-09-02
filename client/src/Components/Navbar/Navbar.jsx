import { Link } from "react-router-dom";
import { useEffect } from "react";
import useCart from "../../Hooks/useCart";
import useLogout from "../../Hooks/useLogout";
import useAuthContext from "../../Hooks/useAuthContext";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const {cartDetails, getCartDetail} = useCart();

  useEffect(() => {
    if (user) {
      getCartDetail(user.username);
    }
  }, [user]);
  return (
    <>
      <div className="navbar bg-base-100 xl:px-36 ">
        <div className="navbar-start ">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu text-2xl w-96 dropdown-content mt-3 p-2 z-10 shadow bg-base-100 rounded-box "
            >
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-3xl">
            GPUs R Us
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li className="px-2">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="px-2">
              <Link to="/about">About</Link>
            </li>
            <li className="px-2">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end px-1 z-10">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{cartDetails ? cartDetails.length : 0}</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow z-10"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{`${cartDetails ? cartDetails.length : 0} ${cartDetails.length !== 1 ? 'Items' : 'Item'}`}</span>
                <span className="text-info">Subtotal: ${cartDetails.total? cartDetails.total.toFixed(2) : `0.00`}</span>
                <div className="card-actions">
                  <Link className="btn btn-primary btn-block" to="/cart">
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {user && (
            <div
              className={
                1 ? `dropdown dropdown-end` : `dropdown dropdown-end hidden`
              }
            >
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                    <span>{user.username}</span>
                  </div>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu text-2xl lg:text-lg w-96 lg:w-72 dropdown-content mt-3 p-2 z-10 shadow bg-base-100 rounded-box "
              >
                <li>
                  <Link
                    to={`/profile/${user.username}`}
                    className={`justify-between`}
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li onClick={logout}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          )}

          {!user && (
            <Link to="/signup" className={`btn`}>
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
