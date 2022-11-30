import { useEffect } from "react";
import { useCallback } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { deleteCommentByCommentId, fetchCommentsByReviewId } from "../api";
import { postCommentsByReviewId } from "../api";
import { UserContext } from "../components/User";

const useComments = () => {
  const { user } = useContext(UserContext);
  const { review_id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  const [newComment, setNewComment] = useState({
    author: user,
    body: "",
  });
  const [addErr, setAddErr] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const [delErr, setDelErr] = useState(null);

  const handleChange = (event) => {
    setNewComment({
      ...newComment,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsDisabled(true);
    setAddErr(null);
    postCommentsByReviewId(review_id, newComment.author, newComment.body)
      .then((res) => {
        setData((currComments) => [res.data.comment, ...currComments]);
        setIsDisabled(false);
        setNewComment({ author: user, body: "" });
      })
      .catch((err) => {
        setAddErr(err.response.data.msg);
        setIsDisabled(false);
      });
  };

  const handleDelete = useCallback(
    (comment_id) => {
      setIsLoading(true);
      setDelErr(null);
      deleteCommentByCommentId(comment_id).then(() => {
        fetchCommentsByReviewId(review_id)
          .then((comments) => {
            const formatted_comments = comments.map((comment) => {
              if (comment.author === user) {
                return {
                  ...comment,
                  current_user: true,
                  handleDelete: handleDelete,
                };
              } else {
                return { ...comment, current_user: false };
              }
            });
            setData(formatted_comments);
            setIsLoading(false);
          })
          .catch((err) => {
            setDelErr(err.response);
            setIsLoading(false);
          });
      });
    },
    [review_id, user]
  );

  useEffect(() => {
    setIsLoading(true);
    setErr(null);
    fetchCommentsByReviewId(review_id)
      .then((comments) => {
        const formatted_comments = comments.map((comment) => {
          if (comment.author === user) {
            return {
              ...comment,
              current_user: true,
              handleDelete: handleDelete,
            };
          } else {
            return { ...comment, current_user: false };
          }
        });
        setData(formatted_comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err.response);
        setIsLoading(false);
      });
  }, [review_id, user, handleDelete]);

  return {
    data,
    isLoading,
    err,
    delErr,
    addErr,
    newComment,
    isDisabled,
    handleChange,
    handleSubmit,
    handleDelete,
  };
};

export default useComments;
