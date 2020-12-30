"use strict";
exports.__esModule = true;
var react_1 = require("react");
//import firebase from "../../config/firebase";
var styles_1 = require("@material-ui/core/styles");
var theme_config_1 = require("../../themes/theme-config");
var Button_1 = require("@material-ui/core/Button");
var customer_service_1 = require("../../services/customer-service");
var react_router_1 = require("react-router");
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
            // alignItems: "center",
            // justifyContent: "center",
            backgroundColor: theme_config_1.backgroundMain,
            padding: "30px"
        },
        textfield: {
            color: theme_config_1.primaryColor,
            width: "30%",
            marginRight: 20
        },
        boxBtn: {
            float: "left",
            backgroundColor: theme_config_1.backgroundContrast,
            borderColor: theme_config_1.primaryColor,
            color: theme_config_1.primaryColor,
            marginRight: 10,
            width: "30%"
        },
        boxWrapper: {
            margin: 10,
            backgroundColor: theme_config_1.backgroundMain
        },
        buttonsContainer: {
            marginTop: 20,
            marginBottom: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        },
        paper: {
            padding: 25,
            overflow: "auto",
            backgroundColor: theme_config_1.backgroundContrast,
            border: "none",
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            width: "100%"
        },
        mobileContainer: {
            top: "15%"
        },
        mobileContainerRegister: {
            top: "10%"
        },
        loginButtonContainer: {
            margin: theme.spacing(1),
            position: "relative",
            width: "50%"
        },
        heading: {
            margin: "15px 0px",
            color: theme_config_1.primaryColor
        },
        whiteText: {
            color: theme_config_1.primaryText,
            fontSize: 14
        },
        sentEmailText: {
            color: theme_config_1.primaryColor
        },
        form: {
            marginTop: 20,
            marginBottom: 20,
            display: "flex",
            flexDirection: "column",
            width: "100%"
        },
        textfieldBlock: {
            display: "flex",
            flexDirection: "row"
        },
        textfieldBlockPassword: {
            display: "flex",
            flexDirection: "column"
        },
        forgot: {
            color: theme_config_1.primaryColor
        },
        linkContainer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end"
        },
        passwordBlock: {
            marginTop: 30
        },
        textfieldDetails: {
            // marginRight: "29rem",
            display: "flex",
            marginBottom: "3rem",
            fontSize: 14
        },
        textfieldDetailsFirst: {
            color: theme_config_1.primaryColor,
            marginRight: 20
        }
    });
});
var Profile = function () {
    var classes = useStyles();
    var history = react_router_1.useHistory();
    var _a = react_1.useState({}), userDetails = _a[0], setUserDetails = _a[1];
    var customerService = new customer_service_1["default"]();
    var sendPasswordResetEmailHandler = function () {
        customerService.sendPasswordResetEmail().then(function () {
            alert("Email sent with Link to reset password.");
        })["catch"](function (error) {
            alert("Error occured while trying to send link.");
            console.log(error);
        });
    };
    customerService.getUserDetails().then(function (data) {
        console.log("Data");
        console.log(data.data().firstName);
        setUserDetails(data.data());
    })["catch"](function (error) {
        alert("Error getting your profile details.");
        console.log(error);
    });
    var navigateToUpdateProfile = function () {
        history.push("/updateProfile");
    };
    return (react_1["default"].createElement("div", { className: classes.mainContainer },
        react_1["default"].createElement("div", { className: classes.boxWrapper },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("h3", { className: classes.heading }, "PROFILE")),
            react_1["default"].createElement("div", { className: classes.whiteText }, "You can update your personal information and password"),
            react_1["default"].createElement("form", { className: classes.form },
                react_1["default"].createElement("div", { className: classes.textfieldDetails },
                    react_1["default"].createElement("div", { className: classes.textfieldDetailsFirst }, "First Name: "),
                    " ",
                    userDetails.firstName),
                react_1["default"].createElement("div", { className: classes.textfieldDetails },
                    react_1["default"].createElement("div", { className: classes.textfieldDetailsFirst }, "Last Name:"),
                    " ",
                    userDetails.lastName),
                react_1["default"].createElement("div", { className: classes.textfieldDetails },
                    react_1["default"].createElement("div", { className: classes.textfieldDetailsFirst }, "Phone Number:"),
                    " ",
                    userDetails.phoneNumber),
                react_1["default"].createElement("div", { className: classes.textfieldDetails },
                    react_1["default"].createElement("div", { className: classes.textfieldDetailsFirst }, "Email:"),
                    " ",
                    userDetails.email),
                react_1["default"].createElement("div", { className: classes.textfieldDetails },
                    react_1["default"].createElement("div", { className: classes.textfieldDetailsFirst }, "ID Number:"),
                    " ",
                    userDetails.idNumber),
                react_1["default"].createElement("div", { className: classes.textfieldDetails },
                    react_1["default"].createElement("div", { className: classes.textfieldDetailsFirst }, "Address:"),
                    userDetails.address),
                react_1["default"].createElement("div", { className: classes.buttonsContainer },
                    react_1["default"].createElement("div", { className: classes.loginButtonContainer },
                        react_1["default"].createElement(Button_1["default"], { onClick: navigateToUpdateProfile, className: classes.boxBtn, variant: "outlined" }, "UPDATE PROFILE"),
                        react_1["default"].createElement(Button_1["default"], { className: classes.boxBtn, variant: "outlined", onClick: sendPasswordResetEmailHandler }, "CHANGE PASWWORD")))))));
};
exports["default"] = Profile;
