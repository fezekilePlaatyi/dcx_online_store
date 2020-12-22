import React from "react";
import { Route, Redirect } from "react-router-dom";
import DrawerContainer from "./components/drawer/drawer";

export default function PrivateRoute({ component: Component, authenticated, ...rest }: any) {
  return (

    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
          <DrawerContainer> <Component {...props} {...rest} /></DrawerContainer>
        ) : (
            <Redirect to="/login" />
          )
      }
    />
  );
}
