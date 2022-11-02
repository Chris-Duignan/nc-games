const CommentAdder = ({ newComment, setNewComment }) => {

  const handleChange = (event)=> {
    setNewComment({...newComment, [event.target.name] : event.target.value})
  }

  return (
    <form>
      <input
        className="messageInput"
        placeholder="enter your comment"
        value={newComment.body}
        onChange={handleChange}
        name="body"
      ></input>
    </form>
  );
};

export default CommentAdder;
