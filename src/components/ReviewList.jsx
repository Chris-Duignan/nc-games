import { useState, useEffect } from "react";
import { fetchReviews } from "../api";
import ReviewCard from "./ReviewCard";

const ReviewList = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <h3 className="loading">Loading ...</h3>;
  else
    return (
      <main className="reviewsList">
        <h2>You are viewing all results</h2>
        <ul>
          {reviews.map((review) => {
            return <ReviewCard key={review.review_id} review={review} />;
          })}
        </ul>
      </main>
    );
};

export default ReviewList;
