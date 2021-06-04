import React from "react";
import { auth } from "./firebase";
import { Link } from "react-router-dom";
import "./Navbar.css";



function Navbar({username}) {

  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
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
         
        <div id="bottom_navbar">
        <a href="#home">Home</a>
        <span></span>
        <a href="#news">News</a>
        <span></span>
        <a href="#contact">Contact</a>
        </div>
        </div>
    );
}

export default Navbar;
