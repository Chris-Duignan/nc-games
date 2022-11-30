import useVotes from "../hooks/useVotes";
import ErrorHandler from "./ErrorHandler";
import Loading from "./Loading";

const Votes = () => {
  const { votes, isLoading, err, incrementVotes, decrementVotes } = useVotes();

  if (isLoading) return <Loading />;
  return (
    <section className="vote">
      {err ? <ErrorHandler err={err} /> : null}
      <button onClick={incrementVotes} className="upvote vote-btn">
        <b>Upvote</b>
      </button>
      <p className="vote-count">{votes} victory points</p>
      <button onClick={decrementVotes} className="downvote vote-btn">
        <b>Downvote</b>
      </button>
    </section>
  );
};

export default Votes;
