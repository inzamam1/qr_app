import React from "react";
import Navbar from "./Navbar";
import "./Home.css";

function Home({ user }) {
  if (navigator.onLine) {
    return (
      <div>
        <Navbar username={user} />
        <h1 className="home_queue">This is homepage</h1>
      </div>
    );
  }
}

export default Home;
