import useReview from "../hooks/useReview";
import CommentsContainerRefactor from "./CommentsContainerRefactor";
import Loading from "./Loading";
import ReviewContent from "./ReviewContent";
import ReviewHeader from "./ReviewHeader";
import Votes from "./Votes";

const SingleReviewContainer = () => {
  const { data, isLoading, err } = useReview();

  if (err) return <Loading err={err} />;
  if (isLoading) return <h3>Loading ...</h3>;
  else
    return (
      <main className="singleReview">
        <article className="review">
          <ReviewHeader>{data}</ReviewHeader>
          <ReviewContent>{data}</ReviewContent>
          <Votes />
        </article>
        <CommentsContainerRefactor />
      </main>
    );
};

export default SingleReviewContainer;
