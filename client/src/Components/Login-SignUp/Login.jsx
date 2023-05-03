import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../Hooks/useLogin";
import ErrorNotification from "../Other/Error";

export default function Login() {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const [showMessage, setShowMessage] = useState(false);
  const { login, loading, error } = useLogin();

  useEffect(
    () => (error ? setShowMessage(true) : setShowMessage(false)),

    [error]
  );

  const formHandler = (e) => {
    const nextState = {
      ...formValues,
      [e.target.name]: e.target.value,
    };
    setFormValues(nextState);
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    await login(formValues);
  };

  return (
    <>
      {showMessage && <ErrorNotification message={error} />}
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
              <form onSubmit={formSubmit} method="post">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="username"
                    className="input input-bordered"
                    required={true}
                    name="username"
                    value={formValues.username}
                    onChange={formHandler}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required={true}
                    name="password"
                    value={formValues.password}
                    onChange={formHandler}
                  />

                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" disabled={loading}>Login</button>
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
