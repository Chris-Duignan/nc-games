import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsByCategory } from "../api";
import ReviewCard from "./ReviewCard";

const CategoryList = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  const { slug } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchReviewsByCategory(slug)
      .then((reviews) => {
        setErr(null);
        setReviews(reviews);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err.response.data.msg);
      });
  }, [slug]);

  if (err) return <h3>{err}</h3>;
  if (isLoading) return <h3>Loading ...</h3>;
  else
    return (
      <main className="reviewsList">
        <h2>Category: {slug}</h2>
        <ul className="cardList">
          {reviews.map((review) => {
            return <ReviewCard key={review.review_id} review={review} />;
          })}
        </ul>
      </main>
    );
};

export default CategoryList;
