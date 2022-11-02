import { useState, useEffect } from "react";
import { fetchReviews } from "../api";
import ReviewList from "./ReviewList";
import SortBar from "./SortBar";

const ReviewContainer = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, []);

  return (
    <main className="reviewContainer">
      <SortBar />
      <ReviewList isLoading={isLoading} reviews={reviews} />
    </main>
  );
};

export default ReviewContainer;
