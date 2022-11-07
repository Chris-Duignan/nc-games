import useVotes from "../hooks/useVotes";
import ErrorHandler from "./ErrorHandler";
import Loading from "./Loading";

const Votes = () => {
  const { votes, isLoading, err, incrementVotes, decrementVotes } = useVotes();

  if (isLoading) return <Loading />;
  return (
    <section className="vote">
      {err ? <ErrorHandler err={err} /> : null}
      <button onClick={incrementVotes}>Upvote</button>
      <p>
        <b>{votes}</b> victory points
      </p>
      <button onClick={decrementVotes}>Downvote</button>
    </section>
  );
};

export default Votes;
