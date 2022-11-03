import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchReviews } from "../api";
import ExpandableSort from "./ExpandableSort";
import ReviewList from "./ReviewList";
import SortBar from "./SortForm";

const ReviewContainer = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setIsLoading(true);
    const currentParams = Object.fromEntries([...searchParams]);
    fetchReviews(currentParams).then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [searchParams]);

  return (
    <main className="reviewContainer">
      <section className="sortBar">
        <ExpandableSort className="sortButton" name="sortButton" tag="Filter">
          <SortBar setSearchParams={setSearchParams} />
        </ExpandableSort>
      </section>
      <ReviewList isLoading={isLoading} reviews={reviews} />
    </main>
  );
};

export default ReviewContainer;
