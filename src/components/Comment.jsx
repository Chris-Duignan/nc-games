import ExpandableSort from "./ExpandableSort";
import DeleteForm from "./DeleteForm";
import { useState } from "react";

const Comment = ({ comment, user, setComments }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [err, setErr] = useState(null);

  if (err) return <p>{err}</p>
  return (
    <>
      {isDisabled ? (
        <p>Please Wait</p>
      ) : (
        <article className="comment">
          <h3>{comment.author}</h3>
          <p>at {comment.created_at}</p>
          <p>{comment.body}</p>
          <p>{comment.votes} victory points</p>
          {user === comment.author ? (
            <ExpandableSort tag={"Delete"}>
              <DeleteForm id={comment.comment_id} setComments={setComments} setErr={setErr} setIsDisabled={setIsDisabled}/>
            </ExpandableSort>
          ) : null}
        </article>
      )}
    </>
  );
};

export default Comment;
