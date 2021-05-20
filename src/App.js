import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loginform from "./Loginform";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Loginform />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
