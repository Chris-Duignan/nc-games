import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsByReviewId } from "../api";
import { postCommentsByReviewId } from "../api";
import { UserContext } from "../components/User";

const useComments = () => {
  const { review_id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState({
    author: user,
    body: "",
  });
  const [addErr, setAddErr] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

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

  useEffect(() => {
    setIsLoading(true);
    setErr(null);
    fetchCommentsByReviewId(review_id)
      .then((comments) => {
        setData(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err.response);
        setIsLoading(false);
      });
  }, [review_id]);

  return { data, isLoading, err, addErr, newComment, isDisabled, handleChange, handleSubmit };
};

export default useComments;
