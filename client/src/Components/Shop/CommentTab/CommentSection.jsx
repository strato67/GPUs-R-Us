import { useState, useEffect } from "react";
import Loading from "../../Other/Loading";
import CommentCard from "./CommentCard";

export default function CommentSection({ productId }) {
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getComments = async () => {
    const response = await fetch(`/api/reviews/${productId}`);
    const data = await response.json();
    if (!response.ok) {
      setError(true);
    }
    setComments(data);
    setLoading(false);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && (
        <p className="text-center">There was an error loading reviews.</p>
      )}
      <div className="flex flex-col">
        {comments &&
          comments.map((comment, index) => (
            <CommentCard comment={comment} key={index} />
          ))}
      </div>
    </>
  );
}
