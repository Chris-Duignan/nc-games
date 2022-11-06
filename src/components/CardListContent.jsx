import React from "react"

const CardListContent = ({ children }) => {
  const data = children[0].data;
  const Card = children[1];

  return (
    <ul className="cardList">
      {data.map((element) => {
        return Card(element);
      })}
    </ul>
  );
};

export default CardListContent;
