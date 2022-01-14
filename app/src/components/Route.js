// This is where all the routes in the application are defined

import React from "react";
import { Switch, Route } from "react-router-dom";

// A <Switch> looks through all its children <Route>
// elements and renders the first one whose path matches the current URL.

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <h1>This is an about me</h1>
        {/* <About /> */}
      </Route>
      <Route path="/projects">
        <h1>These are my projects</h1>
        {/* <Projects /> */}
      </Route>
      <Route path="/contact">
        <h1>This is how to contact me</h1>
        {/* <Contact /> */}
      </Route>
    </Switch>
  );
};

export default Routes;
