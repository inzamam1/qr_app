import React, { useState, useEffect } from "react";
import "./Menu.css";
import { db } from "./firebase.js";


function Menu() {
  const [Menu, setMenu] = useState([]);
  useEffect(() => {
    db.collection("menu").onSnapshot((snapshot) => {
      setMenu(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          menus: doc.data(),
        }))
      );
    });
  }, []);
  Menu.map(({ menus, id }) => {
    console.log(menus.itemName);
  });

  (function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    // Magic happens here
    function parallax(e) {
      // let _w = window.innerWidth/2;
      // let _h = window.innerHeight/2;
      // let _mouseX = e.clientX;
      // let _mouseY = e.clientY;
      // let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
      // let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
      // let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
      // let x = `${_depth3}, ${_depth2}, ${_depth1}`;
      // console.log(x);
      // elem.style.backgroundPosition = x;
  }

})();



  return (
    <div className="menu__container">
      {Menu.map(({ menus, id }) => {
        return (
          { id },
          (
            <div>
            <section class="section parallax bg1">
            <div id="parallax"></div>

            <h1>{menus.itemName}</h1>
              {/* <img src={menus.imageUrl} /> */}
              {/* <h2>{menus.description}</h2> */}
              {/* <h2>{menus.Price}</h2> */}
            </section>
            <section class="section static">
             <div id="parallax1"></div>
             <video id="myVideo" autoPlay loop src="wine.mp4"/>
            </section>
            <section class="section parallax bg2">
            <div id="parallax2"></div>
            <h1>{menus.itemName}</h1>
              {/* <img src={menus.imageUrl} /> */}
              {/* <h2>{menus.description}</h2> */}
              {/* <h2>{menus.Price}</h2> */}
            </section>
            </div>
          )
        );
      })}
    </div>
  );
}

export default Menu;
