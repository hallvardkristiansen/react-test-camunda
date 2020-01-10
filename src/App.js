import React from "react";
// import route stuff
import { Switch, Route } from "react-router-dom";

// import Navigation component
import Navigation from "./components/Navigation";
// import HomePage component
import HomePage from "./pages/HomePage";
// import ModelerPage component
import ModelerPage from "./pages/ModelerPage";
import FrameworksPage from "./pages/FrameworksPage";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export default () => (
  <Container>
    {/* render a navigation component */}
    <Navigation />
    {/* render routing logic of react-router-dom */}
    <Switch>
      <Route path="/modeler" component={ModelerPage} />
      <Route path="/frameworks" component={FrameworksPage} />
      <Route component={HomePage} />
    </Switch>
  </Container>
);
