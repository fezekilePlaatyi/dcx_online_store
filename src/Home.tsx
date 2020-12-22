import React from "react";
import app from "./base";
import { Customer } from "./models/customer-model";
import CustomerService from './services/customer-service'

const Home = () => {

  const logout = async () => {
    await app.auth().signOut();
  }
  var user = app.auth().currentUser;

  if (user && user.emailVerified) {
    return (
      <div>
        <h1>Home</h1>
        <h2 onClick={logout}>Logout</h2>
      </div>);
  } else {
    return (
      <div>
        <h1>Please verify email and login again.</h1>
        <h2 onClick={logout}>Logout</h2>
      </div>);
  }

};

export default Home;
