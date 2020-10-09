import React from "react";
import ReactDOM from "react-dom";
// https://reactrouter.com/web/guides/quick-start (using HashRouter so custom 404 will work with GitHub Pages)
import { HashRouter as Router } from "react-router-dom";
import "./index.scss";
import App from "./App";
import store from "./app/store";
// https://redux.js.org/tutorials/essentials/part-1-overview-concepts
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
