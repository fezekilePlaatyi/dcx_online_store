"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var drawer_1 = require("./components/drawer/drawer");
function PrivateRoute(_a) {
    var Component = _a.component, authenticated = _a.authenticated, rest = __rest(_a, ["component", "authenticated"]);
    return (react_1["default"].createElement(react_router_dom_1.Route, __assign({}, rest, { render: function (props) {
            return authenticated === true ? (react_1["default"].createElement(drawer_1["default"], null,
                " ",
                react_1["default"].createElement(Component, __assign({}, props, rest)))) : (react_1["default"].createElement(react_router_dom_1.Redirect, { to: "/login" }));
        } })));
}
exports["default"] = PrivateRoute;
