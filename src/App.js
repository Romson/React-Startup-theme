import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import { Navbarmenu } from "./components/navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbarmenu />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
        <div className="paspartu-top" />
        <div className="paspartu-right" />
        <div className="paspartu-bottom" />
        <div className="paspartu-left" />
      </React.Fragment>
    );
  }
}

export default App;
