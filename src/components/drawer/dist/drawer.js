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
exports.__esModule = true;
var react_1 = require("react");
var clsx_1 = require("clsx");
var styles_1 = require("@material-ui/core/styles");
var Drawer_1 = require("@material-ui/core/Drawer");
var AppBar_1 = require("@material-ui/core/AppBar");
var Toolbar_1 = require("@material-ui/core/Toolbar");
var List_1 = require("@material-ui/core/List");
var CssBaseline_1 = require("@material-ui/core/CssBaseline");
var Typography_1 = require("@material-ui/core/Typography");
var Divider_1 = require("@material-ui/core/Divider");
var IconButton_1 = require("@material-ui/core/IconButton");
var ChevronLeft_1 = require("@material-ui/icons/ChevronLeft");
var ChevronRight_1 = require("@material-ui/icons/ChevronRight");
var ListItem_1 = require("@material-ui/core/ListItem");
var ListItemIcon_1 = require("@material-ui/core/ListItemIcon");
var ListItemText_1 = require("@material-ui/core/ListItemText");
var Dashboard_1 = require("@material-ui/icons/Dashboard");
// import Auth from "../../util/auth";
var theme_config_1 = require("../../themes/theme-config");
var core_1 = require("@material-ui/core");
var react_router_1 = require("react-router");
// import auth from "../../util/auth";
// import { UserContext } from "../../models/user-context";
var drawerWidth = 240;
var useStyles = styles_1.makeStyles(function (theme) {
    var _a;
    return styles_1.createStyles({
        root: {
            display: "flex",
            backgroundColor: theme_config_1.backgroundContrast,
            flex: 1
        },
        header: {
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: theme_config_1.backgroundContrast
        },
        logoHeader: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        },
        logoContainer: {
            marginRight: "20px"
        },
        listItemText: {
            color: theme_config_1.primaryText
        },
        icon: {
            color: theme_config_1.primaryColor
        },
        boxBtn: {
            float: "left",
            color: theme_config_1.primaryColor,
            backgroundColor: theme_config_1.backgroundContrast,
            borderColor: theme_config_1.primaryColor,
            textTransform: "capitalize",
            marginRight: 10
        },
        boxBtnSignOut: {
            float: "left",
            color: theme_config_1.primaryColor,
            backgroundColor: theme_config_1.backgroundContrast,
            borderColor: theme_config_1.primaryColor,
            textTransform: "capitalize"
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
            backgroundColor: theme_config_1.backgroundMain
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: "calc(100% - " + drawerWidth + "px)",
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
        },
        menuButton: {
            marginRight: 36
        },
        hide: {
            display: "none"
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: "nowrap",
            backgroundColor: theme_config_1.backgroundContrast
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            }),
            backgroundColor: theme_config_1.backgroundContrast
        },
        drawerClose: (_a = {
                transition: theme.transitions.create("width", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen
                }),
                backgroundColor: theme_config_1.backgroundContrast,
                overflowX: "hidden",
                width: theme.spacing(7) + 1
            },
            _a[theme.breakpoints.up("sm")] = {
                width: theme.spacing(9) + 1
            },
            _a),
        toolbar: __assign({ display: "flex", alignItems: "center", justifyContent: "flex-end", padding: theme.spacing(0, 1) }, theme.mixins.toolbar),
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            backgroundColor: "white"
        }
    });
});
var DrawerContainer = function (_a) {
    var _b, _c, _d;
    var children = _a.children;
    var classes = useStyles();
    var theme = styles_1.useTheme();
    var _e = react_1["default"].useState(false), open = _e[0], setOpen = _e[1];
    var history = react_router_1.useHistory();
    // const location = useLocation();
    var signOut = function () {
        // auth.signOut();
        history.push("/login");
    };
    var handleDrawerClose = function () {
        setOpen(false);
    };
    var adminMenuItems = [
        { label: "HOME", icon: function () { return react_1["default"].createElement(Dashboard_1["default"], null); }, route: "/" },
    ];
    var brokerMenuItems = [
        { label: "HOME", icon: function () { return react_1["default"].createElement(Dashboard_1["default"], null); }, route: "/" },
    ];
    // var user: UserContext = Auth.getUserDetails();
    var menuItems = brokerMenuItems;
    return (react_1["default"].createElement("div", { className: classes.root },
        react_1["default"].createElement(CssBaseline_1["default"], null),
        react_1["default"].createElement(AppBar_1["default"], { position: "fixed", className: clsx_1["default"](classes.appBar, (_b = {},
                _b[classes.appBarShift] = open,
                _b)) },
            react_1["default"].createElement(Toolbar_1["default"], { className: classes.header },
                react_1["default"].createElement("div", { className: classes.logoHeader },
                    react_1["default"].createElement("div", { className: classes.logoContainer },
                        react_1["default"].createElement("img", { style: { width: "60px", height: "auto" }, src: theme_config_1.logo, alt: "logo" })),
                    react_1["default"].createElement(Typography_1["default"], { variant: "h6", noWrap: true }, "DCX Bullion")),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(core_1.Button, { href: "#/login", className: classes.boxBtn, variant: "outlined" }, "Login"),
                    react_1["default"].createElement(core_1.Button, { href: "#/register", className: classes.boxBtn, variant: "outlined" }, "Register"),
                    react_1["default"].createElement(core_1.Button, { href: "#/profile", className: classes.boxBtn, variant: "outlined" }, "Profile"),
                    react_1["default"].createElement(core_1.Button, { href: "#/basket", className: classes.boxBtn, variant: "outlined" }, "Basket"),
                    react_1["default"].createElement(core_1.Button, { className: classes.boxBtn, variant: "outlined" }, "Chekout"),
                    react_1["default"].createElement(core_1.Button, { className: classes.boxBtnSignOut, variant: "outlined", onClick: function () { return signOut(); } }, "Sign Out")))),
        react_1["default"].createElement(Drawer_1["default"], { variant: "permanent", className: clsx_1["default"](classes.drawer, (_c = {},
                _c[classes.drawerOpen] = !open,
                _c[classes.drawerClose] = open,
                _c)), classes: {
                paper: clsx_1["default"]((_d = {},
                    _d[classes.drawerOpen] = !open,
                    _d[classes.drawerClose] = open,
                    _d))
            } },
            react_1["default"].createElement("div", { className: classes.toolbar },
                react_1["default"].createElement(IconButton_1["default"], { onClick: handleDrawerClose }, theme.direction === "rtl" ? (react_1["default"].createElement(ChevronRight_1["default"], null)) : (react_1["default"].createElement(ChevronLeft_1["default"], null)))),
            react_1["default"].createElement(Divider_1["default"], null),
            react_1["default"].createElement(List_1["default"], null, menuItems.map(function (x) {
                var match = location.pathname.includes(x.route);
                return (react_1["default"].createElement(ListItem_1["default"], { button: true, onClick: function () { return history.push(x.route); } },
                    react_1["default"].createElement(ListItemIcon_1["default"], { style: { color: match ? theme_config_1.primaryColor : "white" } }, x.icon()),
                    react_1["default"].createElement(ListItemText_1["default"], { style: { color: match ? theme_config_1.primaryColor : "white" }, className: classes.listItemText, primary: x.label })));
            }))),
        react_1["default"].createElement("main", { className: classes.content },
            react_1["default"].createElement(Toolbar_1["default"], null),
            children)));
};
exports["default"] = DrawerContainer;
