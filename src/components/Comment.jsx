import Delete from "./Delete";

const Comment = ({ comment, user }) => {
  return (
    <article className="comment">
      <h3>{comment.author}</h3>
      <p>at {comment.created_at}</p>
      <p>{comment.body}</p>
      <p>{comment.votes} victory points</p>
      {user === comment.author ? <Delete id={comment.comment_id}/> : null}
    </article>
  );
};

export default Comment;
