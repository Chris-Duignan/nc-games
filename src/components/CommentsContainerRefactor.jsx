import useComments from "../hooks/useComments";
import CardList from "./CardList";
import CommentCard from "./CommentCard";

const CommentsContainerRefactor = () => {
  const comments = useComments();
  const title = "Comments";

  return (
    <main className="reviewContainer">
      <CardList data={comments} title={title} card={CommentCard} />
    </main>
  );
};

export default CommentsContainerRefactor;
