"use strict";
exports.__esModule = true;
var react_1 = require("react");
//import firebase from "../../config/firebase";
var styles_1 = require("@material-ui/core/styles");
var theme_config_1 = require("../../themes/theme-config");
var react_router_1 = require("react-router");
var Button_1 = require("@material-ui/core/Button");
var TextField_1 = require("@material-ui/core/TextField");
var invoice_service_1 = require("../../services/invoice-service");
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        logoContainer: {
            maxWidth: 360,
            paddingTop: 20
        },
        mainContainer: {
            minHeight: "calcu(100vh - 100px)",
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
            width: "25%"
        },
        boxWrapper: {
            // margin: 10,
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
        formHeading: {
            fontSize: 16,
            color: theme_config_1.primaryColor
        },
        textfieldPostal: {
            width: "19%"
        },
        passwordBlock: {
            marginTop: 30
        }
    });
});
var CheckOut = function (props) {
    var classes = useStyles();
    var history = react_router_1.useHistory();
    var _a = react_1.useState(""), postalCode = _a[0], setPostalCode = _a[1];
    var _b = react_1.useState(""), address = _b[0], setAddress = _b[1];
    console.log("PRODUCTS LIST");
    console.log(props.productsOnBasket);
    var procceddToPay = function () {
        if (address == "" || postalCode == "") {
            alert("Please enter address correctly.");
            return;
        }
        else {
            var invoiceService = new invoice_service_1["default"]();
            invoiceService.createInvoice(props.productsOnBasket).then(function () {
                alert("Done Making Payment, You will be redirected to your Orders.");
                history.push("/orderHistory");
            })["catch"](function (error) {
                alert("An error occured while making creating an Invoice.");
            });
        }
    };
    return (react_1["default"].createElement("div", { className: classes.mainContainer },
        react_1["default"].createElement("div", { className: classes.boxWrapper },
            react_1["default"].createElement("h3", { className: classes.heading }, "CHECK OUT")),
        react_1["default"].createElement("div", { className: classes.whiteText }, "Please provide delivery and payment information"),
        react_1["default"].createElement("form", { className: classes.form },
            react_1["default"].createElement("div", { className: classes.formHeading }, " Delivery address"),
            react_1["default"].createElement("div", { className: classes.textfieldBlock },
                react_1["default"].createElement(TextField_1["default"], { className: classes.textfield, autoComplete: "off", margin: "normal", label: "Address", variant: "outlined", required: true, value: address, onChange: function (event) { return setAddress(event.target.value); }, InputProps: {
                        autoComplete: "off"
                    }, autoFocus: true }),
                react_1["default"].createElement(TextField_1["default"], { className: classes.textfieldPostal, autoComplete: "off", margin: "normal", label: "Postal Code", variant: "outlined", value: postalCode, onChange: function (event) { return setPostalCode(event.target.value); }, required: true, InputProps: {
                        autoComplete: "off"
                    }, autoFocus: true })),
            react_1["default"].createElement("div", { className: classes.buttonsContainer },
                react_1["default"].createElement("div", { className: classes.loginButtonContainer },
                    react_1["default"].createElement(Button_1["default"], { className: classes.boxBtn, variant: "outlined", onClick: procceddToPay }, "PAY NOW"))))));
};
exports["default"] = CheckOut;
