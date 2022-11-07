import {useState, useEffect} from "react";
import { patchReviewVotesById } from "../api";
import useReview from "./useReview";

const useVotePatch = (review_id, inc_votes) => {
    // const [votes, setVotes] = useState(null)
    // const [isLoading,setIsLoading] = (true);
    // const [err, setErr] = useState(null);

    // useEffect(() => {
    //     setIsLoading(true);
    //     setErr(null);
    //     // patchReviewVotesById(review_id, inc_votes).catch(err => {
    //     //     setErr("Oops, something went wrong, please try again");
    //     // })
    // })
}

export default useVotePatch;