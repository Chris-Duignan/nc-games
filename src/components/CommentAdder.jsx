const CommentAdder = ({
  addErr,
  handleChange,
  handleSubmit,
  newComment,
  isDisabled,
}) => {
  return (
    <section className="commentAdder">
      <form onSubmit={handleSubmit}>
        {addErr ? <p>{addErr}</p> : null}
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
              value={newComment.body}
              onChange={handleChange}
              name="body"
              id="messageInput"
            ></input>
            <button type="submit" className="messageSubmit">
              <b>Submit</b>
            </button>
          </>
        )}
      </form>
    </section>
  );
};

export default CommentAdder;
