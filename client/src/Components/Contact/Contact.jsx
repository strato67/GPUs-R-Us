import { useState } from "react";
import SuccessNotification from "../Other/Success";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log(e.target);
  };

  return (
    <>
      <SuccessNotification
        message={"Thanks! Your message has been submitted."}
        eventChange={formSubmitted}
      />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left md:w-2/3 lg:w-1/2">
            <h1 className="text-5xl font-bold">Contact Us</h1>
            <p className="py-6 text-lg">
              Let's connect! Fill out the form with your email address and
              message, and we'll get back to you as soon as possible. Whether
              you have a question, concern, or just want to say hello, we're
              always happy to hear from our customers. So don't hesitate, fill
              out the form and let us know how we can assist you!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit} method="post">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required={true}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-primary"
                    placeholder="enter your message here"
                    required={true}
                  ></textarea>
                  <label className="label"></label>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Submit"
                    disabled={formSubmitted}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
