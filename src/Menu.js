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

  return (
    <div className="menu__container">
      {Menu.map(({ menus, id }) => {
        return (
          { id },
          (
            <div>
              <h1>{menus.itemName}</h1>
              <img src={menus.imageUrl} />
              <h2>{menus.description}</h2>
              <h2>{menus.Price}</h2>
            </div>
          )
        );
      })}
    </div>
  );
}

export default Menu;
