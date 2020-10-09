import React from "react";
// https://reactrouter.com/web/guides/quick-start
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import QuoteMachine from "../pages/QuoteMachine";
import MarkdownPrev from "../pages/MarkdownPrev";
import NotFound from "../pages/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Quote-Machine" component={QuoteMachine} />
      <Route exact path="/Markdown-Previewer" component={MarkdownPrev} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
