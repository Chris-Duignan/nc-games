import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsByCategory } from "../api";

const useReviewsByCategory = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setErr(null);
    fetchReviewsByCategory(slug)
      .then((reviews) => {
        setData(reviews);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err.response);
        setIsLoading(false);
      });
  }, [slug]);

  return { data, slug, isLoading, err };
};

export default useReviewsByCategory;
