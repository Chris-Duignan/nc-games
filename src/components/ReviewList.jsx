import useReviews from "../hooks/useReviews";
import ErrorHandler from "./ErrorHandler";
import Loading from "./Loading";
import ReviewCard from "./ReviewCard";

const ReviewList = () => {
  const { reviews, isLoading, err } = useReviews();

  if (isLoading) return <Loading />;
  if (err) return <ErrorHandler err={err} />;
  else
    return (
      <section className="reviewsList cardList">
        <h2>You are viewing all results</h2>
        <ul className="cardList">
          {reviews.map((review) => {
            return <ReviewCard key={review.review_id} review={review} />;
          })}
        </ul>
      </section>
    );
};

export default ReviewList;
