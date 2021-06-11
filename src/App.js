import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home.js";
import Cards from "./Cards.js";

function App() {
  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2000));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      //The below function is placed in index.html
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) {
    return null;
  }
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

export default App;
