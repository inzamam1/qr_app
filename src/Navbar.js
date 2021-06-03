import React from "react";
import { auth } from "./firebase";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
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
    </div>
  );
}

export default Navbar;
