import React from "react";
// https://reactrouter.com/web/guides/quick-start
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import QuoteMachine from "../pages/QuoteMachine";
import MarkdownPrev from "../pages/MarkdownPrev";
import NotFound from "../pages/NotFound";
import DrumMachine from "../pages/DrumMachine";
import Calculator from "../pages/Calculator";
import ClockPage from "../pages/ClockPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Quote-Machine" component={QuoteMachine} />
      <Route exact path="/Markdown-Previewer" component={MarkdownPrev} />
      <Route exact path="/Drum-Machine" component={DrumMachine} />
      <Route exact path="/Calculator" component={Calculator} />
      <Route exact path="/Clock" component={ClockPage} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
