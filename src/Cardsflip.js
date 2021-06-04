import React from "react";
import "./Cards.css";
import "./Circular_menu.css";

function Cardflip({ card }) {
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
