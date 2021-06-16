import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import Menu from "./Menu";
function Home({ user }) {
  if (navigator.onLine) {
    return (
      <div>
        <Navbar username={user} />
        <Menu />
      </div>
    );
  }
}

export default Home;
