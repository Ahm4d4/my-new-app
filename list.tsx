import React, { useState } from "react";
import AddCard from "./add-card";
import ListCard from "./list-card";
import ListHeader from "./list-header";
import { list, listCard } from "../../../interfaces/interfaces";
import { useEffect } from "react";

export default function List({ listHeader, listCards }: list) {
  const [cards, setCards] = useState(listCards);
  const [forceUpate, setForceUpdate] = useState<boolean>(false);

  const addCard = (newCard: listCard) => {
    setCards([...cards, { cardInfo: "NewCard", cardKey: cards.length }]);
  };

  const deleteCard = (deletedCard: number) => {
    const tempCards = cards.filter(
      (card: listCard, index: number) => index !== deletedCard);
    setCards(tempCards);
  };

  const edifCardFunction = (cardKey: number, newCardInfo:string) => {
    cards[cardKey].cardInfo = newCardInfo;
    console.log(cards[cardKey].cardInfo);
    setForceUpdate(!forceUpate);
  }

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
            edifCardFunction={edifCardFunction}
            // lists={lists.filter((list: string) => list != listHeader)}
          />
        ))}
      </div>
      <AddCard handleAddCard={addCard}></AddCard>
    </div>
  );
}
