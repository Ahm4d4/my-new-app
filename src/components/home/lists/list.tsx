import React, { useState } from "react";
import AddCard from "./add-card";
import ListCard from "./list-card";
import ListHeader from "./list-header";
import { list, listCard } from "../../../interfaces/interfaces";

export default function List({ listHeader, listCards }: list) {
  const [cards, setCards] = useState(listCards);

  const addCard = (newCard: listCard) => {
    setCards([...cards, { cardInfo: "NewCard", cardKey: cards.length }]);
  };

  const deleteCard = (deletedCard: number) => {

    console.log("deleted card", deletedCard, cards);
    const tempCards = cards.filter(
      (card: listCard, index: number) => index !== deletedCard);
    setCards(tempCards);
    console.log("deleted card", deletedCard, cards, tempCards);

  };

  return (
    <div className="list">
      <ListHeader listHeader={listHeader}></ListHeader>
      <div className="list-cards">
        {cards.map((card: listCard, index: number) => (
          <ListCard
            deleteCard={deleteCard}
            key={index}
            cardKey={index}
            cardInfo={card.cardInfo}
            // lists={lists.filter((list: string) => list != listHeader)}
          />
        ))}
      </div>
      <AddCard handleAddCard={addCard}></AddCard>
    </div>
  );
}
