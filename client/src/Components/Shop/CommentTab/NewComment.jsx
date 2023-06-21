import { useState } from "react";
import useAuthContext from "../../../Hooks/useAuthContext";
import { Link } from "react-router-dom";

export default function NewComment() {
  const { user } = useAuthContext();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState({
    name: "",
    postDate: "",
    rating: 0,
    comment: "",
  });

  const formHandler = (e) => {
    const nextState = {
      ...review,
      
      [e.target.name]: e.target.value,
    };
    nextState.name = user.username;
    nextState.postDate = Date.now();
    setReview(nextState);
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(review);
    //await sendMessage(contactInfo);

    //setFormSubmitted(true);
  };

  return (
    <>
      {user ? (
        <>
          <div className="card-body">
            <form method="post" onSubmit={formSubmit}>
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
                    className="hidden"
                    value={review.rating = 0}
                    checked
                    onChange={()=>setRating(0)}
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    value={review.rating = 1}
                    onChange={()=>setRating(0)}
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    value={review.rating = 2}
                    onChange={()=>setRating(0)}
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    value={review.rating = 3}
                    onChange={()=>setRating(0)}
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    value={review.rating = 4}
                    onChange={()=>setRating(0)}
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    value={review.rating = 5}
                    onChange={()=>setRating(0)}
                  />
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
