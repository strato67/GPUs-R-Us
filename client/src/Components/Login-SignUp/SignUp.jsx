import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../Hooks/useSignup";
import ErrorFormMessage from "../Other/ErrorFormMessage";

export default function SignUp() {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const [passMatchError, setPassMatchError] = useState(false);
  const [passLengthError, setPassLengthError] = useState(false);
  const {signup, loading, error} = useSignup();

  useEffect(() => {
    formValues.password !== formValues.confirmPass
      ? setPassMatchError(true)
      : setPassMatchError(false);

    formValues.password.length < 8 && formValues.password.length > 0
      ? setPassLengthError(true)
      : setPassLengthError(false);
  });

  const formHandler = (e) => {
    const nextState = {
      ...formValues,
      [e.target.name]: e.target.value,
    };
    setFormValues(nextState);
  };
  const formSubmit = async (e) => {

      e.preventDefault();

    await signup(formValues.username, formValues.email, formValues.password)
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-16">
          <div className="text-center lg:text-left md:w-2/3 lg:w-1/2">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <p className="py-9">
              Join our community today and gain access to exclusive content,
              special offers, and be part of a like-minded group of individuals
              passionate about graphics cards. Don't miss out, sign up now!
            </p>
          </div>

          <div className="card flex-shrink w-full md:max-w-lg max-w-sm shadow-2xl bg-base-100">
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
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    required={true}
                    value={formValues.email}
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
                    name="password"
                    required={true}
                    value={formValues.password}
                    onChange={formHandler}
                  />
                  {passLengthError && (
                    <ErrorFormMessage
                      message={`Password must be at least 8 characters.`}
                    />
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="re-enter password"
                    className="input input-bordered"
                    name="confirmPass"
                    required={true}
                    value={formValues.confirmPass}
                    onChange={formHandler}
                    autoComplete="new-password"
                  />
                  {passMatchError && (
                    <ErrorFormMessage message={`Passwords don't match.`} />
                  )}
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign Up</button>
                </div>
              </form>
              <div className="text-center pt-5">
                <p>
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="underline text-secondary hover:text-secondary-focus"
                  >
                    Login here.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
