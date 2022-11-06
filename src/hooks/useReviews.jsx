import { useState, useEffect } from "react";
import { fetchReviews } from "../api";

const useReviews = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setErr(null);
    fetchReviews()
      .then((reviews) => {
        setData(reviews);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err.response);
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading, err };
};

export default useReviews;
