import React from "react";
import "./Cards.css";
import "./Circular_menu.css";
import { db } from "./firebase.js";
import Navbar from "./Navbar.js"


function Cardflip({ card }) {
  const update_water = (event) => {
    db.collection("posts").doc("2").update({
      table: "water",
    });
  };
  const update_bill = (event) => {
    db.collection("posts").doc("2").update({
      table: "bill",
    });
  };
  const update_waiter = (event) => {
    db.collection("posts").doc("2").update({
      table: "waiter",
    });
  };
  return (
    <div>
      <div
        className={`card ${card.text.length > 0 ? "flip" : ""}`}
        onClick={() => {}}
      >
        <div className="front">{card.title}</div>
        <div className="back">{card.text}</div>
      </div>
    </div>
  );
}

export default Cardflip;
