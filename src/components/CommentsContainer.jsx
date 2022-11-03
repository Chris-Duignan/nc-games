import { useState, useEffect } from "react";
import { fetchCommentsByReviewId } from "../api";
import CommentsList from "./CommentsList";
import CommentAdder from "./CommentAdder";

const CommentsContainer = ({ review_id }) => {
  const [comments, setComments] = useState([]);
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
        setErr(err.response.data.msg);
        setIsLoading(false);
      });
  }, [review_id]);

  return (
    <section className="commentsContainer">
      <CommentAdder setComments={setComments} review_id={review_id}/>
      <CommentsList comments={comments} isLoading={isLoading} err={err} setComments={setComments} />
    </section>
  );
};

export default CommentsContainer;
