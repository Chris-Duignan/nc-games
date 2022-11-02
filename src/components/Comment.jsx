const Comment = ({comment}) => {
return (
    <article className="comment">
        <h3>{comment.author}</h3>
        <p>at {comment.created_at}</p>
        <p>{comment.body}</p>
        <p>{comment.votes} victory points</p>
    </article>
)
}

export default Comment;