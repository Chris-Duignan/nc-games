import { formatDate } from "../utils/formatDate";
import ExpandableSort from "./ExpandableSort";
import DeleteForm from "./DeleteForm";

const CommentCard = (data) => {
  const comment = data;

  return (
    <li key={comment.comment_id} className="card comment-card comment">
      <section className="user-info">
        <h3>{comment.author} </h3>
        <br></br>
        <p>at {formatDate(comment.created_at)}</p>
      </section>
      <section className="comment-body">
        <p>{comment.body}</p>
        <p>{comment.votes} victory points</p>
      {comment.current_user === true ? (
        <ExpandableSort tag={"Delete"} className="delete-btn delete-form">
          <DeleteForm
            handleDelete={comment.handleDelete}
            id={comment.comment_id}
          />
        </ExpandableSort>
      ) : null}
      </section>
    </li>
  );
};

export default CommentCard;
