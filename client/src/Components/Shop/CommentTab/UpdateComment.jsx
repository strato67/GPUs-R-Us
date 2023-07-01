import { useEffect, useState } from "react";
import { Rating } from "primereact/rating";
import { Link } from "react-router-dom";
import useComment from "../../../Hooks/useComment";
import useAuthContext from "../../../Hooks/useAuthContext";
import ErrorFormMessage from "../../Other/ErrorFormMessage";

export default function UpdateComment({ reviewContents, productID }) {
  const { user } = useAuthContext();
  const { updateReview, error } = useComment();
  const [value, setValue] = useState(reviewContents.rating);
  const [review, setReview] = useState({
    productID: productID,
    name: reviewContents.name,
    rating: reviewContents.rating,
    comment: reviewContents.comment,
  });

  useEffect(() => {
    review.rating = value;
  }, [value]);

  const formHandler = (e) => {
    const nextState = {
      ...review,
      productID: productID,
      name: user.username,
      rating: value,
      comment: e.target.value,
    };

    setReview(nextState);
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    return await updateReview(review);
  };

  return (
    <>
      {user ? (
        <>
          <div className="card-body">
            <form method="post" onSubmit={formSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Update review</span>
                </label>
                <div className="w-6 -rotate-90 ml-8">
                  <Rating value={value} onChange={(e) => setValue(e.value)} />
                </div>
                <textarea
                  className="textarea textarea-primary"
                  placeholder="enter your review here (max 1000 characters)"
                  required={true}
                  name="comment"
                  maxLength="1000"
                  value={review.comment}
                  onChange={formHandler}
                ></textarea>
                <ErrorFormMessage message={error} />
                <label className="label"></label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Submit"
                />
              </div>
            </form>
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
