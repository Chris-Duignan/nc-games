import { useEffect, useState } from "react";
import { fetchCommentsByReviewId } from "../api";

import Comment from "./Comment";

const CommentsList = ({ review_id }) => {
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
      <h3>Comments</h3>
      <ul className="commentsList">
        {comments.map((comment) => {
          return <Comment key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </section>
  );
};

export default CommentsList;
