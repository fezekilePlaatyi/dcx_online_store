"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
//import firebase from "../../config/firebase";
var styles_1 = require("@material-ui/core/styles");
var theme_config_1 = require("../../themes/theme-config");
var Button_1 = require("@material-ui/core/Button");
var TextField_1 = require("@material-ui/core/TextField");
var customer_service_1 = require("../../services/customer-service");
var react_router_1 = require("react-router");
var useStyles = styles_1.makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f;
    return styles_1.createStyles({
        logoContainer: {
            maxWidth: 360,
            paddingTop: 20
        },
        mainContainer: (_a = {
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
                // justifyContent: "center",
                backgroundColor: theme_config_1.backgroundMain,
                padding: "30px"
            },
            _a[theme.breakpoints.down("xs")] = {
                padding: "10px"
            },
            _a[theme.breakpoints.down("sm")] = {
                padding: "10px"
            },
            _a),
        textfield: (_b = {
                color: theme_config_1.primaryColor,
                width: "30%",
                marginRight: 20
            },
            _b[theme.breakpoints.down("xs")] = {
                width: "100%",
                marginRight: 0
            },
            _b[theme.breakpoints.down("sm")] = {
                width: "100%",
                marginRight: 0
            },
            _b),
        boxBtn: (_c = {
                float: "left",
                backgroundColor: theme_config_1.backgroundContrast,
                borderColor: theme_config_1.primaryColor,
                color: theme_config_1.primaryColor,
                marginRight: 10,
                width: "25%"
            },
            _c[theme.breakpoints.down("xs")] = {
                width: "50%",
                marginBottom: 20
            },
            _c),
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
        loginButtonContainer: (_d = {
                margin: theme.spacing(1),
                position: "relative",
                width: "50%"
            },
            _d[theme.breakpoints.down("xs")] = {
                width: "100%"
            },
            _d[theme.breakpoints.down("sm")] = {
                width: "100%"
            },
            _d),
        heading: (_e = {
                margin: "15px 0px",
                color: theme_config_1.primaryColor
            },
            _e[theme.breakpoints.down("xs")] = {
                fontSize: 22
            },
            _e),
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
        textfieldBlock: (_f = {
                display: "flex",
                flexDirection: "row"
            },
            // justifyContent: "space-between",
            _f[theme.breakpoints.down("xs")] = {
                width: "100%",
                flexDirection: "column"
            },
            _f[theme.breakpoints.down("sm")] = {
                width: "100%",
                flexDirection: "column"
            },
            _f),
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
        }
    });
});
var UpdateProfile = function () {
    var classes = useStyles();
    var history = react_router_1.useHistory();
    var customerService = new customer_service_1["default"]();
    var _a = react_1.useState(""), firstName = _a[0], setFirstName = _a[1];
    var _b = react_1.useState(""), lastName = _b[0], setLastName = _b[1];
    var _c = react_1.useState(""), phoneNumber = _c[0], setPhoneNumber = _c[1];
    var _d = react_1.useState(""), email = _d[0], setEmail = _d[1];
    var _e = react_1.useState(""), idNumber = _e[0], setIdNumber = _e[1];
    var _f = react_1.useState(""), address = _f[0], setAddress = _f[1];
    var _g = react_1.useState(""), registrationResponse = _g[0], setRegistrationResponse = _g[1];
    customerService.getUserDetails().then(function (data) {
        setFirstName(data.data().firstName);
        setLastName(data.data().lastName);
        setPhoneNumber(data.data().phoneNumber);
        setEmail(data.data().email);
        setIdNumber(data.data().idNumber);
        setAddress(data.data().address);
    })["catch"](function (error) {
        alert("Error getting your profile details.");
        console.log(error);
    });
    var navigateToUpdateProfile = function () {
        history.push("/profile");
    };
    var updateCustomer = function () { return __awaiter(void 0, void 0, void 0, function () {
        var userDetails;
        return __generator(this, function (_a) {
            console.log("updating customer information...");
            userDetails = {
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                email: email,
                idNumber: idNumber,
                address: address
            };
            customerService
                .updateUserDetail(userDetails)
                .then(function () {
                setRegistrationResponse("*Successfuly updated user profile.");
            })["catch"](function (error) {
                console.log(error);
                alert(error.message.toString());
            });
            return [2 /*return*/];
        });
    }); };
    return (react_1["default"].createElement("div", { className: classes.mainContainer },
        react_1["default"].createElement("div", { className: classes.boxWrapper },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("h3", { className: classes.heading }, "UPDATE PROFILE")),
            react_1["default"].createElement("div", { className: classes.whiteText }, "Please update personal information"),
            react_1["default"].createElement("form", { className: classes.form },
                react_1["default"].createElement("div", { className: classes.textfieldBlock },
                    react_1["default"].createElement(TextField_1["default"], { className: classes.textfield, autoComplete: "off", margin: "normal", label: "First name", variant: "outlined", required: true, value: firstName, onChange: function (event) { return setFirstName(event.target.value); }, InputProps: {
                            autoComplete: "off"
                        }, autoFocus: true }),
                    react_1["default"].createElement(TextField_1["default"], { className: classes.textfield, autoComplete: "off", margin: "normal", label: "Last name", variant: "outlined", value: lastName, onChange: function (event) { return setLastName(event.target.value); }, required: true, InputProps: {
                            autoComplete: "off"
                        }, autoFocus: true })),
                react_1["default"].createElement("div", { className: classes.textfieldBlock },
                    react_1["default"].createElement(TextField_1["default"], { className: classes.textfield, autoComplete: "off", margin: "normal", label: "Phone number", variant: "outlined", value: phoneNumber, onChange: function (event) { return setPhoneNumber(event.target.value); }, required: true, InputProps: {
                            autoComplete: "off"
                        }, autoFocus: true }),
                    react_1["default"].createElement(TextField_1["default"], { className: classes.textfield, autoComplete: "off", margin: "normal", label: "Email", variant: "outlined", value: email, onChange: function (event) { return setEmail(event.target.value); }, required: true, InputProps: {
                            autoComplete: "off"
                        }, autoFocus: true })),
                react_1["default"].createElement("div", { className: classes.textfieldBlock },
                    react_1["default"].createElement(TextField_1["default"], { className: classes.textfield, autoComplete: "off", margin: "normal", label: "ID Number", variant: "outlined", value: idNumber, onChange: function (event) { return setIdNumber(event.target.value); }, required: true, InputProps: {
                            autoComplete: "off"
                        }, autoFocus: true }),
                    react_1["default"].createElement(TextField_1["default"], { className: classes.textfield, autoComplete: "off", margin: "normal", label: "Address", variant: "outlined", value: address, onChange: function (event) { return setAddress(event.target.value); }, required: true, InputProps: {
                            autoComplete: "off"
                        }, autoFocus: true })),
                react_1["default"].createElement("div", { className: classes.buttonsContainer },
                    react_1["default"].createElement("div", { className: classes.loginButtonContainer },
                        react_1["default"].createElement(Button_1["default"], { className: classes.boxBtn, variant: "outlined", onClick: updateCustomer }, "SUBMIT"),
                        react_1["default"].createElement(Button_1["default"], { onClick: navigateToUpdateProfile, className: classes.boxBtn, variant: "outlined" }, "PROFILE"))),
                react_1["default"].createElement("div", { className: classes.sentEmailText }, registrationResponse)))));
};
exports["default"] = UpdateProfile;
