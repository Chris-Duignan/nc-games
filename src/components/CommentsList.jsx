import Comment from "./Comment";
import CommentPlaceholder from "./CommentPlaceHolder";
import { UserContext } from "./User";
import { useContext } from "react";

const CommentsList = ({ comments, setComments, isLoading, err}) => {

  const {user} = useContext(UserContext)

  if (isLoading) return <h3>Loading</h3>
  if (err) return <h3>{err}</h3>
  return (
    <ul className="cardList">
      <h2>Test</h2>
      <CommentPlaceholder comments={comments} />
      {comments.map((comment) => {
        return <Comment user={user} key={comment.comment_id} comment={comment} setComments={setComments}/>;
      })}
    </ul>
  );
};

export default CommentsList;
