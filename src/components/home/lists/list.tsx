import React, { useState } from "react";
import AddCard from "./add-card";
import ListCard from "./list-card";
import ListHeader from "./list-header";
import { list, listCard, listIF } from "../../../interfaces/interfaces";

export default function List({
  listHeader,
  listCards,
  listKey,
  setLists,
  lists,
}: listIF) {
  console.log("list.ts rendered");
  const [cards, setCards] = useState(listCards);

  const addCard = (newCard: listCard) => {
    setCards([...cards, { cardInfo: "NewCard" }]);

    // const updatedList: list = {
    //   listCards: cards,
    //   listHeader: listHeader,
    // };
    // setLists(() =>
    //   lists.map((list, index) => {
    //     if (index !== listKey) return list;
    //     else return updatedList;
    //   })
    // );
  };
  const editCard = (cardTitle: string, cardIndex: number) => {
    const updatedCard: listCard = { cardInfo: cardTitle };

    setCards(() =>
      cards.map((card: listCard, index: number) => {
        if (index !== cardIndex) return card;
        else return updatedCard;
      })
    );
    // const updatedList: list = {
    //   listCards: cards,
    //   listHeader: listHeader,
    // };

    // setLists(() =>
    //   lists.map((list, index) => {
    //     if (index !== listKey) return list;
    //     else return updatedList;
    //   })
    // );
  };
  const deleteCard = (deletedCard: number) => {
    console.log(cards);
    setCards(() =>
      cards.filter((card: listCard, index: number) => index !== deletedCard)
    );
    // console.log(cards[deletedCard], cards);
    // setCards(() =>
    //   cards.map((card: listCard, index: number) => {
    //     if (index !== deletedCard) return card;
    //     else return card;
    //   })
    // );
    // setCards(tempCards);

    // const updatedList: list = {
    //   listCards: cards,
    //   listHeader: listHeader,
    // };
    // setLists(() =>
    //   lists.map((list, index) => {
    //     if (index !== listKey) return list;
    //     else return updatedList;
    //   })
    // );
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
            editCard={editCard}
            // lists={lists.filter((list: string) => list != listHeader)}
          />
        ))}
      </div>
      <AddCard handleAddCard={addCard}></AddCard>
    </div>
  );
}
