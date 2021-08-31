import React from "react";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import Game from "./Components/Game";

const Routes = () => {
  return (
    <div className="routez">
      <Route path="/" component={Home} />
      <Route exact path="/" component={Game} />
    </div>
  );
};

export default Routes;
