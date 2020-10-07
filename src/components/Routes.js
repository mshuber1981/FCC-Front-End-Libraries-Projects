import React from "react";
// https://reactrouter.com/web/guides/quick-start
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import QuoteMachine from "../pages/QuoteMachine";
import NotFound from "../pages/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Quote-Machine">
        <QuoteMachine />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
