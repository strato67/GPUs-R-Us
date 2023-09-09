import { useState } from "react";

export default function useComment() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const createReview = async (review) => {
    setSuccess(null);
    setError(null);

    if (review.rating === null) review.rating = 0;

    const response = await fetch("/api/reviews/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    setSuccess("Review successfully created");
  };

  const updateReview = async (review) => {
    setSuccess(null);
    setError(null);

    if (review.rating === null) review.rating = 0;

    const response = await fetch(`/api/reviews/${review.productID}/`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    setSuccess("Review updated successfully");
  };

  return { createReview, updateReview, error, success };
}
