import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import HomeRoute from "./HomeRoute";
import app from "./base";

import Home from "./Home/home";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Basket from "./Basket";
import OrderHistory from "./OrderHistory";
import ForgotPassword from "./ForgotPassword";
import Profile from "./pages/profilePage/profile";
import Contact from "./pages/contactPage/contactPage";

function onAuthStateChange(
  setLoading: any,
  setAuthenticated: any,
  setUser: any
) {
  return app.auth().onAuthStateChanged((user) => {
    if (user) {
      setAuthenticated(true);
      setUser(user);
      setLoading(false);
    } else {
      setAuthenticated(false);
      setUser(null);
      setLoading(false);
    }
  });
}

const App = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChange(
      setLoading,
      setAuthenticated,
      setUser
    );
    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return <p>Loading..</p>;
  }

  return (
    <Router>
      <div>
        {/* <PrivateRoute
          exact
          path="/"
          component={Home}
          authenticated={authenticated}
        /> */}
        <HomeRoute
          exact
          path="/"
          component={Home}
          authenticated={authenticated}
        />
        <PrivateRoute
          exact
          path="/basket"
          component={Basket}
          authenticated={authenticated}
        />
        <PrivateRoute
          exact
          path="/profile"
          component={Profile}
          authenticated={authenticated}
        />
        <PrivateRoute
          exact
          path="/orderHistory"
          component={OrderHistory}
          authenticated={authenticated}
        />
        <PrivateRoute
          exact
          path="/contact"
          component={Contact}
          authenticated={authenticated}
        />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/forgotPassword" component={ForgotPassword} />
        <Route exact path="/register" component={SignUp} />
      </div>
    </Router>
  );
};

export default App;
