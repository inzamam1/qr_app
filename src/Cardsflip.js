import React, { useState } from "react";
import "./Cards.css";
import "./Circular_menu.css";

function Cardflip({ card }) {
  const [flip, setFlip] = useState(false);

  return (
    <div>
      <div
        className={`card ${flip ? "flip" : ""}`}
        onClick={() => {
          setFlip(!flip);
        }}
      >
        <div className="front">{card.title}</div>
        <div className="back">{card.text}</div>
      </div>

      <div class="circular_menu">
        <input type="checkbox" id="toggle" className="checkbox" />
        <label id="show-menu" for="toggle">
          <div class="btn2">
            <e class="menuBtn"></e>
            <e class="closeBtn"></e>
          </div>
          <div class="btn2">
            <button class="settings_btn"> water </button>
          </div>
          <div class="btn2">
            <button class="settings_btn"> call waiter </button>
          </div>
          <div class="btn2">
            <button class="settings_btn"> bill </button>
          </div>
        </label>
      </div>
    </div>
  );
}

export default Cardflip;
