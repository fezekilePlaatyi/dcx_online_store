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
var react_router_1 = require("react-router");
var base_1 = require("../base");
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var theme_config_1 = require("../themes/theme-config");
var Button_1 = require("@material-ui/core/Button");
var TextField_1 = require("@material-ui/core/TextField");
var Paper_1 = require("@material-ui/core/Paper");
var core_1 = require("@material-ui/core");
var customer_service_1 = require("../services/customer-service");
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
            color: theme_config_1.primaryColor,
            width: "45%",
            fontSize: 12
        },
        textfieldID: {
            color: theme_config_1.primaryColor,
            width: "100%",
            fontSize: 12
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
            // marginBottom: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%"
        },
        paper: {
            padding: 25,
            overflow: "auto",
            backgroundColor: theme_config_1.backgroundContrast,
            border: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "125%"
        },
        mobileContainer: {
            top: "15%"
        },
        mobileContainerRegister: {
            top: "10%"
        },
        loginButtonContainer: {
            // margin: theme.spacing(1),
            position: "relative",
            width: "100%",
            marginBottom: 20
        },
        heading: {
            margin: "15px 0px",
            color: theme_config_1.primaryColor
        },
        whiteText: {
            color: theme_config_1.primaryText
        },
        sentEmailText: {
            color: theme_config_1.primaryColor
        },
        form: {
            marginTop: 20,
            // marginBottom: 20,
            display: "flex",
            flexDirection: "column",
            width: "100%"
        },
        textfieldBlock: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        },
        forgot: {
            color: theme_config_1.primaryColor,
            marginBottom: 10
        },
        linkContainer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            width: "100%"
        },
        forgotDivider: {
            marginRight: 10,
            marginLeft: 10,
            color: theme_config_1.primaryColor
        },
        buttonsDiv: {
            width: "100%",
            display: "flex",
            flexDirection: "row",
            //alignItems: "flex-end",
            justifyContent: "flex-end"
        }
    });
});
var SignUpContainer = function () {
    var classes = useStyles();
    var history = react_router_1.useHistory();
    var _a = react_1.useState(""), firstName = _a[0], setFirstName = _a[1];
    var _b = react_1.useState(""), lastName = _b[0], setLastName = _b[1];
    var _c = react_1.useState(""), phoneNumber = _c[0], setPhoneNumber = _c[1];
    var _d = react_1.useState(""), email = _d[0], setEmail = _d[1];
    var _e = react_1.useState(""), password = _e[0], setPassword = _e[1];
    var _f = react_1.useState(""), confirmPassword = _f[0], setConfirmPassword = _f[1];
    var _g = react_1.useState(""), idNumber = _g[0], setIdNumber = _g[1];
    var _h = react_1.useState(""), registrationResponse = _h[0], setRegistrationResponse = _h[1];
    var handleSignUp = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, base_1["default"]
                            .auth()
                            .createUserWithEmailAndPassword(email, password)
                            .then(function (user) {
                            var customerInstance = new customer_service_1["default"]();
                            customerInstance.signUpUser({
                                firstName: firstName,
                                lastName: lastName,
                                phoneNumber: phoneNumber,
                                email: email,
                                idNumber: idNumber
                            });
                            if (user && user.emailVerified === false) {
                                user.sendEmailVerification().then(function () {
                                    setRegistrationResponse("Successfully registered. Please open link sent to " + email + " to verify email and continue to login.");
                                });
                            }
                            else {
                                setRegistrationResponse("An error occured while trying to register user with email " + email + ".");
                            }
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    setRegistrationResponse(error_1.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { className: classes.mainContainer },
        react_1["default"].createElement("div", { className: classes.boxWrapper },
            react_1["default"].createElement(Paper_1["default"], { className: classes.paper, elevation: 3, square: true },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", { className: classes.heading }, "REGISTER")),
                react_1["default"].createElement("div", { className: classes.whiteText }, "Please enter required information below"),
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
                        react_1["default"].createElement(TextField_1["default"], { className: classes.textfield, autoComplete: "off", margin: "normal", label: "Password", variant: "outlined", value: password, onChange: function (event) { return setPassword(event.target.value); }, required: true, InputProps: {
                                autoComplete: "off"
                            }, autoFocus: true }),
                        react_1["default"].createElement(TextField_1["default"], { className: classes.textfield, autoComplete: "off", margin: "normal", label: "Confirm password", variant: "outlined", value: confirmPassword, onChange: function (event) { return setConfirmPassword(event.target.value); }, required: true, InputProps: {
                                autoComplete: "off"
                            }, autoFocus: true })),
                    react_1["default"].createElement(TextField_1["default"], { className: classes.textfieldID, autoComplete: "off", margin: "normal", label: "ID Number", variant: "outlined", value: idNumber, onChange: function (event) { return setIdNumber(event.target.value); }, required: true, InputProps: {
                            autoComplete: "off"
                        }, autoFocus: true }),
                    react_1["default"].createElement("div", { className: classes.buttonsContainer },
                        react_1["default"].createElement("div", { className: classes.loginButtonContainer },
                            react_1["default"].createElement(Button_1["default"], { className: classes.boxBtn, variant: "outlined", onClick: function (event) { return handleSignUp(event); } }, "Submit"))),
                    react_1["default"].createElement("div", { className: classes.sentEmailText }, registrationResponse)),
                react_1["default"].createElement("div", { className: classes.buttonsDiv },
                    react_1["default"].createElement(core_1.Link, { className: classes.forgot, href: "/login" }, "Login"),
                    react_1["default"].createElement("div", { className: classes.forgotDivider }, "|"),
                    react_1["default"].createElement(core_1.Link, { className: classes.forgot, href: "/" }, "Home"))))));
};
exports["default"] = react_router_1.withRouter(SignUpContainer);
