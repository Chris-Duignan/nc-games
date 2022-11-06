import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";

const ReviewCard = (review) => {
  const date = formatDate(review.created_at);

  return (
    <Link
      className="link cardLink"
      to={`/reviews/${review.review_id}`}
      key={review.review_id}
    >
      <li className="reviewCard card">
        <img
          src={review.review_img_url}
          alt={`game pieces for ${review.title}`}
          className="thumbnail"
        ></img>
        <section>
          <h3>{review.title}</h3>
          <p className="category">
            Posted in <em>{review.category}</em> by <b>{review.owner}</b>
          </p>
          <p>{date}</p>
          <p>
            <b>{review.votes}</b> victory points
          </p>
          <p>{review.comment_count} comments</p>
        </section>
      </li>
    </Link>
  );
};

export default ReviewCard;
