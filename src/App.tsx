import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import NonPrivateRoutesWithDrawer from "./NonPrivateRoutesWithDrawer";
import HomeRoute from "./HomeRoute";
import app from "./base";
import Home from "./Home/home";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Basket from "./Basket";
import DisplayMoreProductDetails from "./DisplayMoreProductDetails";
import OrderHistory from "./OrderHistory";
import ForgotPassword from "./ForgotPassword";
import Profile from "./pages/profilePage/profile";
import Contact from "./pages/contactPage/contactPage";
import About from "./pages/aboutUsPage/aboutUsPage";
import CheckOut from "./pages/checkOutPage/checkOutPage";
import ChangePassword from "./pages/profilePage/changePassword";
import UpdateProfile from "./pages/profilePage/updateProfile";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // flexDirection: 'column',
    position: 'absolute',
    alignItems: "center",
    top: '50%',
    left: '50%',
    justifyContent: "center",
    width: '10rem',
    height: '10rem',
    // "& > * + *": {
    //   marginLeft: theme.spacing(2),
    // },
  },
  loader: {
    size: "5rem",
    thickness: 6,
    width: '10rem',
    height: '10rem',
  },
}));

function onAuthStateChange(
  setLoading: any,
  setAuthenticated: any,
  setUser: any
) {
  return app.auth().onAuthStateChanged((user: any) => {
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
  const classes = useStyles();

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
    return (
      <div className={classes.root}>
        <CircularProgress className={classes.loader} size={60} thickness={6} />
      </div>
    );
  }

  return (
    <Router>
      <div>
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
        <NonPrivateRoutesWithDrawer
          exact
          path="/contact"
          component={Contact}
          authenticated={authenticated}
        />
        <NonPrivateRoutesWithDrawer
          exact
          path="/displayMoreProductDetails"
          component={DisplayMoreProductDetails}
          authenticated={authenticated}
        />
        <NonPrivateRoutesWithDrawer
          exact
          path="/about"
          component={About}
          authenticated={authenticated}
        />
        <PrivateRoute
          exact
          path="/checkout"
          component={CheckOut}
          authenticated={authenticated}
        />
        <PrivateRoute
          exact
          path="/changePassword"
          component={ChangePassword}
          authenticated={authenticated}
        />
        <PrivateRoute
          exact
          path="/updateProfile"
          component={UpdateProfile}
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
