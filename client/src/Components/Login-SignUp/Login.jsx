import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorFormMessage from "../Other/ErrorFormMessage";

export default function Login() {
  const [userError, setUserError] = useState(false);
  const [passError, setPassError] = useState(false);

  const formHandler = (e) => {
    if (userError || passError) {
      e.preventDefault();
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-16">
          <div className="text-center lg:text-left md:w-2/3 lg:w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Welcome back! Please login to your account to continue shopping.
            </p>
          </div>
          <div className="card flex-shrink w-full md:max-w-md max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={formHandler} method="post">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="username"
                    className="input input-bordered"
                    required={true}
                  />
                  {userError && (
                    <ErrorFormMessage message={`No account found`} />
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                    required={true}
                  />

                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                    {passError && (
                      <ErrorFormMessage message={`Password incorrect.`} />
                    )}
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div className="text-center pt-5">
                  <p>
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      className="underline text-secondary hover:text-secondary-focus"
                    >
                      Sign up here!
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
