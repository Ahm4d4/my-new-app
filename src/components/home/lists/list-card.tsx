import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import moveIcon from "../../../assets/moveIcon.svg";
import editIcon from "../../../assets/editIcon.svg";
import { listCard, listCardIF } from "../../../interfaces/interfaces";

export default function ListCard({
  cardInfo,
  cardKey,
  deleteCard,
  editCard,
}: listCardIF) {
  const [cardTitle, setCardTitle] = useState(cardInfo);
  const titleRef = useRef<HTMLInputElement>(null);
  const handleDeleteCard = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCard(cardKey);
        Swal.fire("Deleted!", "Your card has been deleted.", "success");
      }
    });
  };
  // const handleMoveCard = () => {};
  const enableEditCard = () => {
    titleRef.current!.disabled = false;
    titleRef.current!.focus();
  };

  // const handleEditCard = () => {
  //   console.log(" kk");
  //   editCard(cardTitle, cardKey);
  // };
  useEffect(() => {
    titleRef.current!.disabled = true;
  }, []);

  return (
    <div className="list-card">
      <input
        ref={titleRef}
        id="card-title"
        className="card-title"
        autoComplete="off"
        value={cardTitle}
        onChange={(e) => setCardTitle(e.target.value)}
        onBlur={() => {
          titleRef.current!.disabled = true;
          editCard(cardTitle, cardKey);
        }}
      ></input>
      <div className="settings-div">
        <span className="edit-card-button" onClick={enableEditCard}>
          <img className="edit-icon" src={editIcon}></img>
        </span>
        <select className="move-card-button">
          {/* <img className="move-icon" src={moveIcon}></img> */}

          {/* {lists.map((list: string, index: number) => (
            <option
              className="move-option"
              key={index}
              value={list}
              onClick={handleMoveCard}
            >
              {list}
            </option>
          ))} */}
        </select>
        <span className="delete-card-button" onClick={handleDeleteCard}>
          X
        </span>
      </div>
    </div>
  );
}
