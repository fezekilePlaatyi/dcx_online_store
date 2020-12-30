import React from "react";
import { Route, Redirect } from "react-router-dom";
import DrawerContainer from "./components/drawer/drawer";

export default function HomeRoute({ component: Component, authenticated, ...rest }: any) {
    return (

        <Route
            {...rest}
            render={props =>
            // authenticated === true ?
            (
                <DrawerContainer activityStatus={authenticated}> <Component activityStatus={authenticated} {...props} {...rest} /></DrawerContainer>
                // ) : (
                // <Redirect to="/login" />
            )
            }
        />
    );
}