import useReview from "../hooks/useReview";
import useVotePatch from "../hooks/useVotePatch";
import CommentsContainer from "./CommentsContainer";
import Loading from "./Loading";
import ReviewContent from "./ReviewContent";
import ReviewHeader from "./ReviewHeader";

const SingleReviewContainer = () => {
  const { data, isLoading, err, review_id } = useReview();
  // const incrementVotesClick = () => {
  //   setVotes((currVotes) => currVotes + 1);
  //   setErr(null);
  //   patchReviewVotesById(review.review_id, 1).catch((err) => {
  //     setVotes((currVotes) => currVotes - 1);
  //     setErr("Oops, something went wrong, please try again");
  //   });
  // };

  // const decrementVotesClick = () => {
  //   setVotes((currVotes) => currVotes - 1);
  //   setErr(null);
  //   patchReviewVotesById(review.review_id, -1).catch((err) => {
  //     setVotes((currVotes) => currVotes + 1);
  //     setErr("Oops, something went wrong, please try again");
  //   });
  // };


  if (err) return <Loading err={err} />;
  if (isLoading) return <h3>Loading ...</h3>;
  else
    return (
      <main className="singleReview">
        <article className="review">
          <ReviewHeader>{data}</ReviewHeader>
          <ReviewContent>{data}</ReviewContent>
          <button></button>
          {/* <section className="vote">
            <button onClick={incrementVotesClick}>Upvote</button>
            <p>
              <b>{votes}</b> victory points
            </p>
            <button onClick={decrementVotesClick}>Downvote</button>
    </section>  */}
        </article>
        <CommentsContainer review_id={review_id} />
      </main>
    );
};

export default SingleReviewContainer;
