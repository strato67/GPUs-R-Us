import { useEffect, useState } from "react";
import useContact from "../../Hooks/useContact";
import SuccessNotification from "../Other/Success";
import ErrorNotification from "../Other/Error";

export default function Contact() {
  const { sendMessage, loading, error } = useContact();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleKeyDown = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const formHandler = (e) => {
    const nextState = {
      ...contactInfo,
      [e.target.name]: e.target.value,
    };
    setContactInfo(nextState);
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    await sendMessage(contactInfo);

    setFormSubmitted(true);
  };

  return (
    <>
      {error && <ErrorNotification message={error} />}
      {formSubmitted && !error &&(
        <SuccessNotification
          message={"Thanks! Your message has been submitted."}
        />
      )}

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="md:w-2/3 lg:w-1/2">
            <h1 className="text-5xl font-bold text-center lg:text-left">
              Contact Us
            </h1>
            <p className="py-6 text-sm  md:text-lg text-center lg:text-left max-w-md md:max-w-full">
              Let's connect! Fill out the form with your email address, subject,
              and message. We'll get back to you as soon as possible.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={formSubmit} method="post">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required={true}
                    name="email"
                    value={contactInfo.email}
                    onChange={formHandler}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Subject</span>
                  </label>
                  <input
                    type="text"
                    placeholder="subject"
                    className="input input-bordered"
                    required={true}
                    name="subject"
                    value={contactInfo.subject}
                    onChange={formHandler}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-primary"
                    placeholder="enter your message here (max 500 characters)"
                    required={true}
                    name="message"
                    value={contactInfo.message}
                    onChange={formHandler}
                    maxLength="500"
                    onKeyDown={handleKeyDown}
                  ></textarea>
                  <label className="label"></label>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Submit"
                    disabled={formSubmitted && !error}
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
