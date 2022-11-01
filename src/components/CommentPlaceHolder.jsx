const CommentPlaceholder = ({ comments }) => {
  if (comments.length === 0) {
    return (
      <>
        <li className="comment"><h4>Think fast, Be the first to comment!</h4></li>
      </>
    );
  } else {
    return null;
  }
};

export default CommentPlaceholder;
