import React from "react";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import Game from "./Components/Game";
import Rules from "./Components/Rules";
import Footer from "./Components/Footer";

const Routes = () => {
  return (
    <div className="routez">
      <Route path="/" component={Home} />
      <Route path="/" component={Rules} />
      <Route exact path="/" component={Game} />
      <Route path="/" component={Footer} />
    </div>
  );
};

export default Routes;
