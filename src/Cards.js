import "./Cards.css";
import Cardsflip from "./Cardsflip";
import { db } from "./firebase.js";
import React, { useState, useEffect } from "react";

function Cards() {
  const [posts, setPosts] = useState([]);
  const [posts1, setPosts1] = useState([]);
  const [posts2, setPosts2] = useState([]);
  const [posts3, setPosts3] = useState([]);
  const [posts4, setPosts4] = useState([]);
  //Currently set to static tables for trials.
  useEffect(() => {
    db.collection("posts")
      .doc("2")
      .onSnapshot((doc) => {
        setPosts(doc.data().table);
      });
    db.collection("posts")
      .doc("3")
      .onSnapshot((doc) => {
        setPosts1(doc.data().table);
      });
    db.collection("posts")
      .doc("4")
      .onSnapshot((doc) => {
        setPosts2(doc.data().table);
      });
    db.collection("posts")
      .doc("5")
      .onSnapshot((doc) => {
        setPosts3(doc.data().table);
      });
    db.collection("posts")
      .doc("6")
      .onSnapshot((doc) => {
        setPosts4(doc.data().table);
      });
  }, []);

  const cardInfo = [
    {
      title: "Table 1",
      text: posts,
    },
    {
      title: "Table 2",
      text: posts1,
    },
    {
      title: "Table 3",
      text: posts2,
    },
    {
      title: "Table 4",
      text: posts3,
    },
    {
      title: "Table 5",
      text: posts4,
    },
  ];

  return (
    <div className="grid">
      {cardInfo.map((card) => {
        return <Cardsflip card={card} />;
      })}
    </div>
  );
}

export default Cards;
