import "./Cards.css";
import "./Home.css";
import Navbar from "./Navbar";
import { db } from "./firebase.js";

import React, { useState, useEffect } from "react";

function Cards() {
  const [posts, setPosts] = useState([]);
  // const [posts1, setPosts1] = useState([]);
  // const [posts2, setPosts2] = useState([]);
  // const [posts3, setPosts3] = useState([]);
  // const [posts4, setPosts4] = useState([]);
  //Currently set to static tables for trials.

  useEffect(() => {
    db.collection("posts")
      .doc("2")
      .onSnapshot((doc) => {
        setPosts(doc.data().table);
      });
    // db.collection("posts")
    //   .doc("3")
    //   .onSnapshot((doc) => {
    //     setPosts1(doc.data().table);
    //   });
    // db.collection("posts")
    //   .doc("4")
    //   .onSnapshot((doc) => {
    //     setPosts2(doc.data().table);
    //   });
    // db.collection("posts")
    //   .doc("5")
    //   .onSnapshot((doc) => {
    //     setPosts3(doc.data().table);
    //   });
    // db.collection("posts")
    //   .doc("6")
    //   .onSnapshot((doc) => {
    //     setPosts4(doc.data().table);
    //   });
  }, []);

  const deletes = () => {
    db.collection("posts").doc("2").update("table", "");
  };
  const cardInfo = [
    {
      title: "Table 1",
      text: posts,
    },
    //uncomment for multiple cards
    // {
    //   title: "Table 2",
    //   text: posts1,
    // },
    // {
    //   title: "Table 3",
    //   text: posts2,
    // },
    // {
    //   title: "Table 4",
    //   text: posts3,
    // },
    // {
    //   title: "Table 5",
    //   text: posts4,
    // },
  ];

  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="grid">
          {cardInfo.map((card) => {
            //The below return function maps each card to its table with proper css.
            return (
              <div>
                <div
                  className="card"
                  onClick={() => {
                    if (window.confirm("Are you sure you want to remove?")) {
                      deletes();
                    }
                  }}
                >
                  {card.text.length === 0 ? (
                    <div className="front">No Orders yet</div>
                  ) : (
                    <div className="front">{card.text}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cards;
