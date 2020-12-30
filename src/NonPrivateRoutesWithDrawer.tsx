import React from "react";
import { Route, Redirect } from "react-router-dom";
import DrawerContainer from "./components/drawer/drawer";

export default function NonPrivateRoutesWithDrawer({ component: Component, authenticated, ...rest }: any) {
    return (
        <Route
            {...rest}
            render={props =>
            (
                <DrawerContainer activityStatus={authenticated}> <Component {...props} {...rest} /></DrawerContainer>
            )
            }
        />
    );
}
