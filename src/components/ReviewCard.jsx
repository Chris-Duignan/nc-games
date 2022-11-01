import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  return (
    <Link className="link" to={`/reviews/${review.review_id}`}>
      <li className="reviewCard">
        <img src={review.review_img_url} alt={`game pieces for ${review.title}`} className="thumbnail"></img>
        <section>
          <h3>{review.title}</h3>
          <p className="category">
            Posted in <em>{review.category}</em> by <b>{review.owner}</b>
          </p>
          <p>Created at {review.created_at}</p>
          <p>
            <b>{review.votes}</b> victory points
          </p>
        </section>
      </li>
    </Link>
  );
};

export default ReviewCard;
