import { useState } from "react";
import { UserContext } from "./User";
import { useContext } from "react";
import { postCommentsByReviewId } from "../api";

const CommentAdder = ({ review_id, setComments }) => {
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState({
    author: user,
    body: "",
  });
  const [isDisabled, setIsDisabled] = useState(false);
  const [err, setErr] = useState(null);

  const handleChange = (event) => {
    setComment({
      ...comment,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsDisabled(true);
    postCommentsByReviewId(review_id, comment.author, comment.body)
      .then((res) => {
        setComments((currComments) => [res.data.comment, ...currComments]);
        setIsDisabled(false);
        setComment({ author: user, body: "" });
      })
      .catch((err) => {
        setErr(err.response.data.msg);
        setIsDisabled(false);
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
    </section>
  );
};

export default CommentAdder;
