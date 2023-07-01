import { useState } from "react";

export default function useComment() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const createReview = async (review) => {
    setLoading(true);
    setError(null);

    if (review.rating === null) review.rating = 0;

    const response = await fetch("/api/reviews/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    });

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
    }

    setLoading(false);
  };

  const updateReview = async (review) => {
    setLoading(true);
    setError(null);

    if (review.rating === null) review.rating = 0;

    const response = await fetch(`/api/reviews/${review.productID}/`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    });

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
    }

    setLoading(false);
  };

  return { createReview, updateReview, loading, error };
}
