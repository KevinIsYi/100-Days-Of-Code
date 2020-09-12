import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { Navbar } from "../components/ui/Navbar";
import { MarvelScreen } from "../components/marvel/MarvelScreen";

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/login" component={ LoginScreen } />
                <Route exact path="/" component={ MarvelScreen } />
            </Switch>
        </Router>
      );
}
