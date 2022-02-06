import "../styles/App.scss";
import { Home } from "../pages/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header } from "../components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export { App };
