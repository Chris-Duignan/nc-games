import { useEffect, useState, useContext } from "react";
import { fetchCommentsByReviewId } from "../api";
import { UserContext } from "./User";

import Comment from "./Comment";
import CommentAdder from "./CommentAdder";
import CommentPlaceholder from "./CommentPlaceHolder";

const CommentsList = ({ review_id }) => {
  const {user} = useContext(UserContext);
  const [newComment, setNewComment] = useState({ username: user, body: "" });
  const [comments, setComments] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  

  useEffect(() => {
    setIsLoading(true);
    setErr(null);
    fetchCommentsByReviewId(review_id)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr("Oops, something went wrong, try again later");
      });
  }, [review_id]);

  if (err) return <h3>{err}</h3>;
  if (isLoading) return <h3>Loading ...</h3>;
  return (
    <section className="commentsContainer">
      <CommentAdder newComment={newComment} setNewComment={setNewComment} />
      <ul className="commentsList">
        <CommentPlaceholder comments={comments} />
        {comments.map((comment) => {
          return <Comment key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </section>
  );
};

export default CommentsList;
