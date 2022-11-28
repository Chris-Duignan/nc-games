import useComments from "../hooks/useComments";
import CardList from "./CardList";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";

const CommentsContainerRefactor = () => {
  const comments = useComments();
  const title = "Comments";

  return (
    <main className="commentsContainer">
      <CommentAdder
        newComment={comments.newComment}
        addErr={comments.addErr}
        isDisabled={comments.isDisabled}
        handleChange={comments.handleChange}
        handleSubmit={comments.handleSubmit}
      />
      <CardList data={comments} title={title} card={CommentCard} />
    </main>
  );
};

export default CommentsContainerRefactor;
