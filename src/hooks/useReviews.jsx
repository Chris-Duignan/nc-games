import { useState, useEffect } from "react";
import { fetchReviews } from "../api";
import { useSearchParams } from "react-router-dom";

const useReviews = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState({sort_by: "created_at", order: "desc"})

  const handleChange = (event) => {
    setSearchTerm({ ...searchTerm, [event.target.name]: event.target.value });
  };

  const handleReset = (event) => {
    event.preventDefault();
    setSearchTerm({sort_by: "created_at", order: "desc"});
    setSearchParams();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchParams(searchTerm);
  };

  useEffect(() => {
    setIsLoading(true);
    setErr(null);
    const currentParams = Object.fromEntries([...searchParams]);
    fetchReviews(currentParams)
      .then((reviews) => {
        setData(reviews);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err.response);
        setIsLoading(false);
      });
  }, [searchParams]);

  return { data, handleChange, handleSubmit, handleReset, searchTerm, isLoading, err };
};

export default useReviews;
