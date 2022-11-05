import { useState, useEffect } from "react";
import { fetchReviews } from "../api";

const useReviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setErr(null);
    fetchReviews((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    }).catch((err) => {
      setErr(err.response.data.msg);
      setIsLoading(false);
    });
  }, []);

  console.log(reviews);
  return { reviews, isLoading, err };
};

export default useReviews;
