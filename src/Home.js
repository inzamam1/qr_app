import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import Navbar from "./Navbar";
import Cards from "./Cards";
import "./Home.css";


function Home({ user }) {
  const [posts, setPosts] = useState([]);
  let date = new Date('1980-01-1');



  if (navigator.onLine) {
    return (
      <div>
        <Navbar username={user} />
        <div className="home">
          <div className={`home_queue${posts.length > 0 ? "" : "_invisible"}`}>
            {posts.map(({ card, id }) => {
              return (
                <div className="object">
                  <a href={`#${card.id}`}>
                    <div className="settings_icon" title={card.table}>
                      <p className="settings_table_no"> {card.id}</p>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
          <Cards user={user} />
        </div>
      </div>
    );
  } 
}

export default Home;
