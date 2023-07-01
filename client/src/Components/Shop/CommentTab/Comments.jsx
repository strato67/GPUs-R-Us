import useAuthContext from "../../../Hooks/useAuthContext";
import CommentSection from "./CommentSection";
import NewComment from "./NewComment";
import UpdateComment from "./UpdateComment";
import { useState, useEffect } from "react";

export default function Comments({ productId }) {
  const [userReview, setUserReview] = useState(null);
  const { user } = useAuthContext();

  const getReview = async () => {
    const response = await fetch(`/api/reviews/${productId}/${user.username}`);
    const data = await response.json();
    if (!response.ok) {
      console.log("error");
    }
    setUserReview(data);
  };

  useEffect(() => {
    getReview();
  }, []);

  return (
    <>
      <div className="card w-full bg-base-200 ">
        {userReview === null ? (
          <NewComment productID={productId} />
        ) : (
          <UpdateComment reviewContents={userReview} productID={productId} />
        )}

        <div className="divider"></div>
        <CommentSection productId={productId} />
      </div>
    </>
  );
}
