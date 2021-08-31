import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import Game from "./Components/Game";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/game" component={Game} />
    </div>
  );
};

export default Routes;
