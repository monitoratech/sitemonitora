    
import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";


import Main from "../pages/Main/Main.js";
import Card from "../pages/Card";

class Router extends Component {
  render() {
    return (
      
      <HashRouter  basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/cartaovirtual" component={Card} />
          </Switch>
      </HashRouter>
    );
  }
}

export default Router;