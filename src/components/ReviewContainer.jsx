import { useState, useEffect } from "react";
import { fetchReviews } from "../api";
import ExpandableSort from "./ExpandableSort";
import ReviewList from "./ReviewList";
import SortBar from "./SortForm";

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
      <section className="sortBar">
        <ExpandableSort className="sortButton" name="sortButton">
          <SortBar />
        </ExpandableSort>
      </section>
      <ReviewList isLoading={isLoading} reviews={reviews} />
    </main>
  );
};

export default ReviewContainer;
