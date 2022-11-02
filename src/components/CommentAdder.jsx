import { useState } from "react";
import { UserContext } from "./User";
import { useContext, useEffect } from "react";
import { postCommentsByReviewId } from "../api";
import CommentsList from "./CommentsList";
import { fetchCommentsByReviewId } from "../api";

const CommentAdder = ({ review_id }) => {
  const [count, setCount] = useState(0);
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState({
    author: user,
    body: "",
  });
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

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

  const handleChange = (event) => {
    setComment({
      ...comment,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCount((currCount) => currCount + 1);
    setIsDisabled(true);
    postCommentsByReviewId(review_id, comment.author, comment.body)
      .then((res) => {
        setComments((currComments) => [res.data.comment, ...currComments]);
        setIsDisabled(false);
      })
      .catch((err) => {
        setErr(err.response.data.msg);
        setIsDisabled(false);
      });
    setComment({
      comment_id: `Opt${count}`,
      author: user,
      body: "",
      votes: 0,
      created_at: "Now",
    });
  };

  return (
    <section className="commentsContainer">
      <form onSubmit={handleSubmit}>
        {err ? <h3>{err}</h3> : null}
        {isDisabled ? (
          <h3>Please Wait</h3>
        ) : (
          <>
            <label id="commentLabel" htmlFor="messageInput">
              Post Comment
            </label>
            <input
              className="messageInput"
              placeholder="enter your comment"
              value={comment.body}
              onChange={handleChange}
              name="body"
              id="messageInput"
            ></input>
          </>
        )}
        <button type="submit" className="messageSubmit">
          <b>Submit</b>
        </button>
      </form>
      {isLoading ? <h3>Loading ...</h3> : <CommentsList comments={comments} />}
    </section>
  );
};

export default CommentAdder;
