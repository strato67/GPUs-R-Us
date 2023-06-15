import useAuthContext from "../../../Hooks/useAuthContext";
import { Link } from "react-router-dom";

export default function NewComment() {
  const { user } = useAuthContext();

  return (
    <>
      {user ? (
        <>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Leave a review of this product
                </span>
              </label>
              <div className="rating rating-md pb-6">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <textarea
                className="textarea textarea-primary"
                placeholder="enter your review here (max 1000 characters)"
                required={true}
                name="message"
                maxLength="1000"
              ></textarea>
              <label className="label"></label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="Submit" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="card-body">
            <div className="form-control mt-6">
              <Link to={"/login"} className="btn btn-primary">
                Sign in to comment
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
