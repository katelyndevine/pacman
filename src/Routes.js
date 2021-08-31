import React from "react";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import Game from "./Components/Game";
import Rules from "./Components/Rules";

const Routes = () => {
  return (
    <div className="routez">
      <Route path="/" component={Home} />
      <Route path="/" component={Rules} />
      <Route exact path="/" component={Game} />
    </div>
  );
};

export default Routes;
