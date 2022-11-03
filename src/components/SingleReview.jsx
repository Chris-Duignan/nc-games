import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewById, patchReviewVotesById } from "../api";
import CommentAdder from "./CommentAdder";

const SingleReview = () => {
  const [review, setReview] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [votes, setVotes] = useState(0);

  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchReviewById(review_id)
      .then((review) => {
        setReview(review);
        setVotes(review.votes);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err.response.data.msg);
      });
  }, [review_id]);

  const incrementVotesClick = () => {
    setVotes((currVotes) => currVotes + 1);
    setErr(null);
    patchReviewVotesById(review.review_id, 1).catch((err) => {
      setVotes((currVotes) => currVotes - 1);
      setErr("Oops, something went wrong, please try again");
    });
  };

  const decrementVotesClick = () => {
    setVotes((currVotes) => currVotes - 1);
    setErr(null);
    patchReviewVotesById(review.review_id, -1).catch((err) => {
      setVotes((currVotes) => currVotes + 1);
      setErr("Oops, something went wrong, please try again");
    });
  };

  if (err) return <h3>{err}</h3>;
  if (isLoading) return <h3>Loading ...</h3>;
  else
    return (
      <main className="singleReview">
        <article className="review">
          <img
            src={review.review_img_url}
            alt={`game pieces for ${review.title}`}
            className="reviewImg"
          ></img>
          <section>
            <h2>{review.title}</h2>
            <p> from {review.designer}</p>
            <p className="category">
              Posted in <em>{review.category}</em> by <b>{review.owner}</b> at{" "}
              {review.created_at}
            </p>
            <br></br>
            <p>{review.review_body}</p>
            <br></br>
            <section className="vote">
              <button onClick={incrementVotesClick}>Upvote</button>
              <p>
                <b>{votes}</b> victory points
              </p>
              <button onClick={decrementVotesClick}>Downvote</button>
            </section>
          </section>
        </article>
        <CommentAdder review_id={review_id} />
      </main>
    );
};

export default SingleReview;
