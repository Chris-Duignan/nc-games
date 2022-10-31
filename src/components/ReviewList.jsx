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
      <ul className="reviewsList">
        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </ul>
    );
};

export default ReviewList;
