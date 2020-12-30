"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var PrivateRoute_1 = require("./PrivateRoute");
var NonPrivateRoutesWithDrawer_1 = require("./NonPrivateRoutesWithDrawer");
var HomeRoute_1 = require("./HomeRoute");
var base_1 = require("./base");
var home_1 = require("./Home/home");
var LogIn_1 = require("./LogIn");
var SignUp_1 = require("./SignUp");
var Basket_1 = require("./Basket");
var OrderHistory_1 = require("./OrderHistory");
var ForgotPassword_1 = require("./ForgotPassword");
var profile_1 = require("./pages/profilePage/profile");
var contactPage_1 = require("./pages/contactPage/contactPage");
var aboutUsPage_1 = require("./pages/aboutUsPage/aboutUsPage");
var checkOutPage_1 = require("./pages/checkOutPage/checkOutPage");
var changePassword_1 = require("./pages/profilePage/changePassword");
var updateProfile_1 = require("./pages/profilePage/updateProfile");
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
            react_1["default"].createElement(HomeRoute_1["default"], { exact: true, path: "/", component: home_1["default"], authenticated: authenticated }),
            react_1["default"].createElement(PrivateRoute_1["default"], { exact: true, path: "/basket", component: Basket_1["default"], authenticated: authenticated }),
            react_1["default"].createElement(PrivateRoute_1["default"], { exact: true, path: "/profile", component: profile_1["default"], authenticated: authenticated }),
            react_1["default"].createElement(PrivateRoute_1["default"], { exact: true, path: "/orderHistory", component: OrderHistory_1["default"], authenticated: authenticated }),
            react_1["default"].createElement(NonPrivateRoutesWithDrawer_1["default"], { exact: true, path: "/contact", component: contactPage_1["default"], authenticated: authenticated }),
            react_1["default"].createElement(NonPrivateRoutesWithDrawer_1["default"], { exact: true, path: "/about", component: aboutUsPage_1["default"], authenticated: authenticated }),
            react_1["default"].createElement(PrivateRoute_1["default"], { exact: true, path: "/checkout", component: checkOutPage_1["default"], authenticated: authenticated }),
            react_1["default"].createElement(PrivateRoute_1["default"], { exact: true, path: "/changePassword", component: changePassword_1["default"], authenticated: authenticated }),
            react_1["default"].createElement(PrivateRoute_1["default"], { exact: true, path: "/updateProfile", component: updateProfile_1["default"], authenticated: authenticated }),
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/login", component: LogIn_1["default"] }),
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/signup", component: SignUp_1["default"] }),
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/forgotPassword", component: ForgotPassword_1["default"] }),
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/register", component: SignUp_1["default"] }))));
};
exports["default"] = App;
