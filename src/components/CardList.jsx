import CardListContent from "./CardListContent";
import CardListHeader from "./CardListHeader";
import ErrorHandler from "./ErrorHandler";
import Loading from "./Loading";

const CardList = ({ data, title, card }) => {
  if (data.isLoading) return <Loading />;
  if (data.err) return <ErrorHandler err={data.err} />;
  return (
    <section className="cardList">
      <CardListHeader>{title}</CardListHeader>
      <CardListContent>
        {data}
        {card}
      </CardListContent>
    </section>
  );
};

export default CardList;
