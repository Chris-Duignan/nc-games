import { formatDate } from "../utils/formatDate";

const CommentCard = (data) => {
  return (
    <li key={data.comment_id} className="reviewCard card">
      <article className="comment card">
        <h3>{data.author}</h3>
        <p>at {formatDate(data.created_at)}</p>
        <p>{data.body}</p>
        <p>{data.votes} victory points</p>
      </article>
    </li>
  );
};

export default CommentCard;
