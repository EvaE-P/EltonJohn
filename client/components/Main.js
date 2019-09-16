import React, { Component } from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Navbar";

export default class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </main>
        </div>
      </HashRouter>
    );
  }
}
