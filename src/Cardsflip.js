import React from "react";
import "./Cards.css";
import "./Circular_menu.css";
import { db } from "./firebase.js";

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

      <div class="circular_menu">
        <input type="checkbox" id="toggle" className="checkbox" />
        <label id="show-menu" for="toggle">
          <div class="btn2">
            <e class="menuBtn"></e>
            <e class="closeBtn"></e>
          </div>
          <div class="btn2">
            <button onClick={update_water} class="settings_btn">
              water
            </button>
          </div>
          <div class="btn2">
            <button onClick={update_waiter} class="settings_btn">
              call waiter
            </button>
          </div>
          <div class="btn2">
            <button onClick={update_bill} class="settings_btn">
              bill
            </button>
          </div>
        </label>
      </div>
    </div>
  );
}

export default Cardflip;
