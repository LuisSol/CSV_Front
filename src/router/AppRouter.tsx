import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

// components
import PublicRoute from "./PublicRoute";
import NavBar from "../components/NavBar";

//pages
import Home from "../pages/Home";
import Providers from "../pages/Providers";

// utils
import url from "./url";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <PublicRoute path={url.home} exact component={Home} />
        <PublicRoute path={url.providers} exact component={Providers} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
