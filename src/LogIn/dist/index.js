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
var react_router_1 = require("react-router");
var base_1 = require("../base");
var styles_1 = require("@material-ui/core/styles");
var theme_config_1 = require("../themes/theme-config");
var core_1 = require("@material-ui/core");
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
            color: theme_config_1.primaryColor,
            marginBottom: 10
        },
        boxBtn: {
            float: "left",
            backgroundColor: theme_config_1.backgroundContrast,
            borderColor: theme_config_1.primaryColor,
            color: theme_config_1.primaryColor,
            width: "100%",
            fontSize: 12
        },
        boxWrapper: {
            margin: 10,
            backgroundColor: theme_config_1.backgroundMain
        },
        buttonsContainer: {
            marginTop: 20,
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
        },
        buttonsContainerRegister: {
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        buttonsDiv: {
            width: "100%",
            display: "flex",
            flexDirection: "row",
            //alignItems: "flex-end",
            justifyContent: "flex-end"
        },
        errorMessage: {
            color: theme.palette.error.main,
            marginTop: 20,
            textAlign: "left"
        },
        paper: {
            padding: 25,
            overflow: "auto",
            backgroundColor: theme_config_1.backgroundContrast,
            border: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%"
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
        },
        forgotDivider: {
            marginRight: 10,
            marginLeft: 10,
            color: theme_config_1.primaryColor
        }
    });
});
var LogInContainer = function () {
    var classes = useStyles();
    var history = react_router_dom_1.useHistory();
    var _a = react_1.useState(""), username = _a[0], setusername = _a[1];
    var _b = react_1.useState(""), password = _b[0], setpassword = _b[1];
    var _c = react_1.useState(""), errorMessage = _c[0], setError = _c[1];
    var handleSignUp = function () { return __awaiter(void 0, void 0, void 0, function () {
        var user, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, base_1["default"]
                            .auth()
                            .signInWithEmailAndPassword(username, password)];
                case 1:
                    user = _a.sent();
                    history.push("/");
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    setError(error_1.message.split(". ", 1)[0]);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var navigate = function (nameOfComponent) {
        history.push(nameOfComponent);
    };
    var _d = react_1.useState(true), emailFocus = _d[0], updateEmailFocus = _d[1];
    var handleOnFocus = function (event) {
        updateEmailFocus(false);
        setError("");
    };
    return (react_1["default"].createElement("div", { className: classes.mainContainer },
        react_1["default"].createElement("div", { className: classes.boxWrapper },
            react_1["default"].createElement(core_1.Paper, { className: classes.paper, elevation: 3, square: true },
                react_1["default"].createElement("div", { className: classes.logoContainer },
                    react_1["default"].createElement("img", { style: { width: "170px", height: "auto" }, src: theme_config_1.logo, alt: "logo" })),
                react_1["default"].createElement("div", { className: classes.logText }, "Log into your account"),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("form", null,
                        react_1["default"].createElement(core_1.TextField, { className: classes.textfield, name: "email", type: "email", margin: "normal", label: "Email", fullWidth: true, variant: "outlined", required: true, InputProps: {
                                readOnly: emailFocus
                            }, onFocus: function (event) { return handleOnFocus(event); }, onChange: function (event) { return setusername(event.target.value); } }),
                        react_1["default"].createElement(core_1.TextField, { className: classes.textfield, margin: "normal", label: "Password", fullWidth: true, type: "password", autoComplete: "none", variant: "outlined", name: "password", required: true, InputProps: {
                                readOnly: emailFocus
                            }, onFocus: function (event) { return handleOnFocus(event); }, onChange: function (event) { return setpassword(event.target.value); } }),
                        react_1["default"].createElement(core_1.Typography, { paragraph: true, className: classes.errorMessage }, errorMessage),
                        react_1["default"].createElement("div", { className: classes.buttonsContainer },
                            react_1["default"].createElement("div", { className: classes.loginButtonContainer }, react_1["default"].createElement(core_1.Button, { onClick: function () { return handleSignUp(); }, className: classes.boxBtn, variant: "outlined" }, "Login"))),
                        react_1["default"].createElement("div", { className: classes.buttonsDiv },
                            react_1["default"].createElement("span", { className: classes.forgot, onClick: function () { return navigate('/forgotPassword'); } }, "Forgot Password?"),
                            react_1["default"].createElement("div", { className: classes.forgotDivider }, "|"),
                            react_1["default"].createElement("span", { className: classes.forgot, onClick: function () { return navigate('/signup'); } }, "Register"),
                            react_1["default"].createElement("div", { className: classes.forgotDivider }, "|"),
                            react_1["default"].createElement("span", { className: classes.forgot, onClick: function () { return navigate('/'); } }, "Home"))))))));
};
exports["default"] = react_router_1.withRouter(LogInContainer);
