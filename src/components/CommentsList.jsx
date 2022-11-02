import Comment from "./Comment";
import CommentPlaceholder from "./CommentPlaceHolder";

const CommentsList = ({ comments }) => {
  return (
    <ul className="commentsList">
      <CommentPlaceholder comments={comments} />
      {comments.map((comment) => {
        return <Comment key={comment.comment_id} comment={comment} />;
      })}
    </ul>
  );
};

export default CommentsList;
