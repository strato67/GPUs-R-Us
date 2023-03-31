export default function SignUp() {
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="username"
                  className="input input-bordered"
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
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="re-enter password"
                  className="input input-bordered"
                />
                <label className="label">
                  <span></span>
                  <span
                    className={`label-text text-error ${false ? `` : `hidden`}`}
                  >
                    Passwords don't match
                  </span>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
