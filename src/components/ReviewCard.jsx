const ReviewCard = ({ review }) => {
  console.log(review);
  return (
    <li className="reviewCard">
      <img src={review.review_img_url} alt={review.title}></img>
      <section>
        <h3>{review.title}</h3>
        <p className="category">
          Posted in <em>{review.category}</em> by <b>{review.owner}</b>
        </p>
        <p>Created at {review.created_at}</p>
        <p><b>{review.votes}</b> victory points</p>
        <p>{review.review_body}</p>
      </section>
    </li>
  );
};

export default ReviewCard;
