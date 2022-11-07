import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewById, patchReviewVotesById } from "../api";

const useVotes = () => {
  const { review_id } = useParams();
  const [votes, setVotes] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  const incrementVotes = () => {
    setVotes((currVotes) => currVotes + 1);
    patchReviewVotesById(review_id, 1).catch((err) => {
      setVotes((currVotes) => currVotes - 1);
      setErr(err.response);
    });
  };


  const decrementVotes = () => {
    setVotes((currVotes) => currVotes - 1);
    patchReviewVotesById(review_id, -1).catch((err) => {
      setVotes((currVotes) => currVotes + 1);
      setErr(err.response);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    setErr(null);
    fetchReviewById(review_id)
      .then((review) => {
        setVotes(review.votes);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err.response);
        setIsLoading(false);
      });
  }, [review_id]);

  return { votes, isLoading, err , incrementVotes, decrementVotes};
};

export default useVotes;
