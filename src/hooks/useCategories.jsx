import { useState, useEffect } from "react";
import { fetchCategories } from "../api";

const useCategories = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setErr(null);
    fetchCategories()
      .then((categories) => {
        setData(categories);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err.response);
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading, err };
};

export default useCategories;
