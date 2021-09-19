import React, { useState } from "react";
import AddCard from "./add-card";
import ListCard from "./list-card";
import ListHeader from "./list-header";
import { list, listCard, listIF } from "../../../interfaces/interfaces";

export default function List({
  listHeader,
  listCards,
  listKey,
  updateLists
}: listIF) {
  const [cards, setCards] = useState(listCards);
  const [forceUpate, setForceUpdate] = useState<boolean>(false);

  const addCard = (newCard: listCard) => {
    setCards([...cards, { cardInfo: "NewCard" }]);

    updateLists1();
  };

  const updateLists1 = () => {
    const updatedList: list = {
      listCards: cards,
      listHeader: listHeader,
    };    
    updateLists(updatedList, listKey);
  }

  const edifCardFunction = (cardKey: number, newCardInfo:string) => {
    cards[cardKey].cardInfo = newCardInfo;
    setForceUpdate(!forceUpate);
    updateLists1();
  };

  const deleteCard = (deletedCard: number) => {
    const tempCards = cards.filter(
      (card: listCard, index: number) => index !== deletedCard);
    setCards(tempCards);
    updateLists1();
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
            edifCardFunction={edifCardFunction}
            // lists={lists.filter((list: string) => list != listHeader)}
          />
        ))}
      </div>
      <AddCard handleAddCard={addCard}></AddCard>
    </div>
  );
}
