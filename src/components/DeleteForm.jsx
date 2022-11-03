import { deleteCommentByCommentId } from "../api";

const DeleteForm = ({ id, setComments, setIsDisabled, setErr }) => {

  const handleDelete = (event) => {
    event.preventDefault();
    setErr(null);
    setIsDisabled(true);
    deleteCommentByCommentId(id)
      .then((response) => {
        setErr(null);
        setIsDisabled(false);
        setComments((currComments) => {
          return currComments.filter((comment) => comment.comment_id !== id);
        });
      })
      .catch((err) => {
        setErr(err.response.data.msg);
        setIsDisabled(false);
      });
  };

  return (
    <form onSubmit={handleDelete}>
      <button>Yes, delete my comment</button>
    </form>
  );
};

export default DeleteForm;
