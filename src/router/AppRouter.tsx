import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

// components
import PublicRoute from "./PublicRoute";

//pages
import Home from "../pages/Home";

// utils
import url from "./url";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute path={url.home} exact component={Home} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
