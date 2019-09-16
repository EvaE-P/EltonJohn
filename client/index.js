import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import Main from "./components/Main";
import Home from "./components/Home";

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("app")
);
