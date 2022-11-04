import ReviewCard from "./ReviewCard";

const ReviewList = ({reviews, isLoading,err}) => {

  if (isLoading) return <h3 className="loading">Loading ...</h3>;
  if (err) return <h3>{err}</h3>;
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
