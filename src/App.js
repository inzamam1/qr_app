import "./App.css";
import HTMLFlipBook from "react-pageflip";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home.js";
import Cards from "./Cards.js";

function App() {
  const [isLoading, setLoading] = useState(true);
  const el = document.querySelector(".loader-container");

  useEffect(() => {
    setLoading(0);
  }, []);

  if (isLoading === 0) {
    return (
      <div>
        <h1>Flipping page</h1>

        <HTMLFlipBook width={300} height={500}>
          <div className="demoPage">
            <h1>Page 1</h1>
            <p>This will be welcome page</p>
            <p>1</p>
          </div>
          <div className="demoPage">
            <h1>Page 2</h1>
            <p>
              when the user clicks on this page,it will flip and he will be
              taken to homepage
            </p>
            <p>2</p>
          </div>
          <div className="demoPage">
            <h1>Page 3</h1>
            <p>For demonstration purpose only</p>
            <p>3</p>
          </div>
          <div className="demoPage">
            <h1>Page 4</h1>
            <p>For demonstration purpose only</p>
            <p>4</p>
          </div>
        </HTMLFlipBook>

        <button
          onClick={(e) => {
            setLoading(1);
            el.remove();
          }}
        >
          Click for Home screen
        </button>
      </div>
    );
  } else {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/my_orders">
              <Cards />
            </Route>
            <Route path="/">
              <Home />
              {/* <Cards /> */}
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
