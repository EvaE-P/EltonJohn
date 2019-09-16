import React, { Component } from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Navbar";
import City from "./City";
export default class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          {/* <nav>
            <div id="nav-right-container">
              <h3 className="nav-links">Elton John</h3>
            </div>
          </nav> */}
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/city" component={City} />
            </Switch>
          </main>
        </div>
      </HashRouter>
    );
  }
}
