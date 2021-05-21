import React, { useState } from "react";
import "./Cards.css";
import Cardsflip from "./Cardsflip";
import { db } from "./firebase.js";

function Cards() {
  const [posts, setPosts] = useState([]);

  db.collection("posts")
    .doc("2")
    .onSnapshot((doc) => {
      setPosts(doc.data().table);
    });

  const cardInfo = [
    {
      title: "Table 1",
      text: posts,
    },
  ];

  return (
    <div className="grid">
      {cardInfo.map((card) => {
        return <Cardsflip card={card} key={card.id} />;
      })}
    </div>
  );
}

export default Cards;
