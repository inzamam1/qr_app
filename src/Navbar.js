import React from "react";
import { auth } from "./firebase";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ username }) {
  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("bnb").style.bottom = "0";
    } else {
      document.getElementById("bnb").style.bottom = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <div>
      <nav className="navbar">
        <div class="center">
          <img
            className="navicon"
            align="middle"
            src={"./ordee2.png"}
            alt=""
            onClick={() => auth.signOut()}
          />
        </div>
        <div class="right">
          <Link>
            <img
              className="user_icon"
              align="right"
              src={"./user.png"}
              alt=""
              onClick={() => auth.signOut()}
            />
            {/* <h6 className="username">{name}</h6> */}
          </Link>
        </div>
      </nav>

      <div class="bottom_navbar" id="bnb">
        <btn class="btn">
          <Link to="/">Home</Link>
        </btn>
        <btn class="btn">Menu</btn>
        <btn class="btn">
          <Link to="/my_orders">my orders</Link>
        </btn>
        <btn class="btn">Profile</btn>
      </div>
    </div>
  );
}

export default Navbar;
