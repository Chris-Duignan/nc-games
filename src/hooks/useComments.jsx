import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsByReviewId } from "../api";

const useComments = () => {
  const { review_id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setErr(null);
    fetchCommentsByReviewId(review_id)
      .then((comments) => {
        setData(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err.response);
        setIsLoading(false);
      });
  }, [review_id]);

  return { data, isLoading, err };
};

export default useComments;
