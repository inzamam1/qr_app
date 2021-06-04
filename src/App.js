import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loginform from "./Loginform";
import Home from "./Home.js";

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
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route path="/">
            <Loginform />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
