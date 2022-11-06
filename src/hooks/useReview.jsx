import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewById } from "../api";

const useReview = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setErr(null);
    fetchReviewById(review_id)
      .then((review) => {
        setData(review);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err.response);
        setIsLoading(false);
      });
  }, [review_id]);

  return { data, isLoading, err, review_id };
};

export default useReview;
