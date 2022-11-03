import Comment from "./Comment";
import CommentPlaceholder from "./CommentPlaceHolder";

const CommentsList = ({ comments, user, isLoading, err}) => {


  if (isLoading) return <h3>Loading</h3>
  if (err) return <h3>{err}</h3>
  return (
    <ul className="commentsList">
      <CommentPlaceholder comments={comments} />
      {comments.map((comment) => {
        return <Comment user={user} key={comment.comment_id} comment={comment} />;
      })}
    </ul>
  );
};

export default CommentsList;
