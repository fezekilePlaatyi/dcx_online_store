"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_1 = require("react-router");
var styles_1 = require("@material-ui/core/styles");
var theme_config_1 = require("../themes/theme-config");
var react_router_dom_1 = require("react-router-dom");
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        logoContainer: {
            maxWidth: 360,
            paddingTop: 20
        },
        mainContainer: {
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme_config_1.backgroundMain,
            padding: "44px"
        },
        textfield: {
            color: theme_config_1.primaryColor
        },
        forgot: {
            color: theme_config_1.primaryColor
        },
        boxBtn: {
            float: "left",
            backgroundColor: theme_config_1.backgroundContrast,
            borderColor: theme_config_1.primaryColor,
            color: theme_config_1.primaryColor,
            width: "100%"
        },
        boxWrapper: {
            margin: 10,
            backgroundColor: theme_config_1.backgroundMain
        },
        buttonsContainer: {
            marginTop: 20,
            display: "flex",
            justifyContent: "space-between"
        },
        buttonsContainerRegister: {
            marginTop: 20,
            display: "flex",
            flexDirection: 'column',
            alignItems: 'center'
        },
        buttonsDiv: {
            width: "100%",
            display: "flex",
            flexDirection: 'column',
            alignItems: "flex-end",
            justifyContent: "flex-end"
        },
        errorMessage: {
            color: theme.palette.error.main,
            marginTop: 20,
            textAlign: "left"
        },
        paper: {
            padding: 20,
            overflow: "auto",
            backgroundColor: theme_config_1.backgroundContrast,
            border: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "80%"
        },
        mobileContainer: {
            top: "15%"
        },
        mobileContainerRegister: {
            top: "10%"
        },
        loginButtonContainer: {
            position: "relative",
            width: "100%",
            marginBottom: 15
        },
        loginButtonContainerRegister: {
            position: "relative",
            width: "100%",
            marginBottom: 15,
            marginTop: 15
        },
        logText: {
            fontSize: 16,
            margin: 15
        }
    });
});
var BasketContainer = function () {
    var classes = useStyles();
    var history = react_router_dom_1.useHistory();
    return (react_1["default"].createElement("div", { className: classes.mainContainer },
        react_1["default"].createElement("h2", null, "SOME BASKEt")));
};
exports["default"] = react_router_1.withRouter(BasketContainer);
