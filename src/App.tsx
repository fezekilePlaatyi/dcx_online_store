import React, { Component, useEffect, useState } from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DrawerContainer from "./components/drawer/drawer";
import PrivateRoute from "./PrivateRoute";
import app from "./base";

import Home from "./Home/home";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";

function onAuthStateChange(setLoading: any, setAuthenticated: any, setUser: any) {
  return app.auth().onAuthStateChanged(user => {
    if (user) {
      setAuthenticated(true)
      setUser(user)
      setLoading(false)
    } else {
      setAuthenticated(false)
      setUser(null)
      setLoading(false)
    }
  });
}

const App = () => {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setLoading, setAuthenticated, setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return <p>Loading..</p>;
  }

  return (
    <div className="app">
      <DrawerContainer>
        <BrowserRouter>
          <Switch>
            <PrivateRoute
              exact
              path="/"
              component={Home}
              authenticated={authenticated}
            />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/forgotPassword" component={ForgotPassword} />
            <Route exact path="/register" component={SignUp} />
          </Switch>
        </BrowserRouter>
      </DrawerContainer>
    </div>
  );
}

export default App;
