import ReviewCard from "./ReviewCard";

const ReviewList = ({reviews, isLoading}) => {

  if (isLoading) return <h3 className="loading">Loading ...</h3>;
  else
    return (
      <section className="reviewsList">
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
