"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var PrivateRoute_1 = require("./PrivateRoute");
var base_1 = require("./base");
var home_1 = require("./Home/home");
var LogIn_1 = require("./LogIn");
var SignUp_1 = require("./SignUp");
var Basket_1 = require("./Basket");
var OrderHistory_1 = require("./OrderHistory");
var ForgotPassword_1 = require("./ForgotPassword");
function onAuthStateChange(setLoading, setAuthenticated, setUser) {
    return base_1["default"].auth().onAuthStateChanged(function (user) {
        if (user) {
            setAuthenticated(true);
            setUser(user);
            setLoading(false);
        }
        else {
            setAuthenticated(false);
            setUser(null);
            setLoading(false);
        }
    });
}
var App = function () {
    var _a = react_1.useState(true), loading = _a[0], setLoading = _a[1];
    var _b = react_1.useState(false), authenticated = _b[0], setAuthenticated = _b[1];
    var _c = react_1.useState(null), user = _c[0], setUser = _c[1];
    react_1.useEffect(function () {
        var unsubscribe = onAuthStateChange(setLoading, setAuthenticated, setUser);
        return function () {
            unsubscribe();
        };
    }, []);
    if (loading) {
        return react_1["default"].createElement("p", null, "Loading..");
    }
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(PrivateRoute_1["default"], { exact: true, path: "/", component: home_1["default"], authenticated: authenticated }),
            react_1["default"].createElement(PrivateRoute_1["default"], { exact: true, path: "/home", component: home_1["default"], authenticated: authenticated }),
            react_1["default"].createElement(PrivateRoute_1["default"], { exact: true, path: "/basket", component: Basket_1["default"], authenticated: authenticated }),
            react_1["default"].createElement(PrivateRoute_1["default"], { exact: true, path: "/orderHistory", component: OrderHistory_1["default"], authenticated: authenticated }),
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/login", component: LogIn_1["default"] }),
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/signup", component: SignUp_1["default"] }),
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/forgotPassword", component: ForgotPassword_1["default"] }),
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/register", component: SignUp_1["default"] }))));
};
exports["default"] = App;
