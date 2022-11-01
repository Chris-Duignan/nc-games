const Comment = ({comment}) => {
return (
    <article className="comment">
        <h4>{comment.author}</h4>
        <p>at {comment.created_at}</p>
        <p>{comment.body}</p>
        <p>{comment.votes} victory points</p>
    </article>
)
}

export default Comment;