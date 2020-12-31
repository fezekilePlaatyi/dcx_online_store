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
var styles_1 = require("@material-ui/core/styles");
var theme_config_1 = require("../themes/theme-config");
var Button_1 = require("@material-ui/core/Button");
var TextField_1 = require("@material-ui/core/TextField");
var Paper_1 = require("@material-ui/core/Paper");
var base_1 = require("../base");
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
            color: theme_config_1.primaryColor,
            fontSize: 12
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
            marginBottom: 20,
            display: "flex",
            justifyContent: "space-between",
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
            width: "100%"
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
            width: "100%"
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
            //  marginBottom: 20,
            width: '100%'
        },
        linkContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            width: '100%'
        },
        forgot: {
            color: theme_config_1.primaryColor,
            marginBottom: 10
        },
        forgotDivider: {
            marginRight: 10,
            marginLeft: 10,
            color: theme_config_1.primaryColor
        }
    });
});
var ForgotPassword = function () {
    var classes = useStyles();
    var history = react_router_dom_1.useHistory();
    var _a = react_1.useState(""), email = _a[0], setEmail = _a[1];
    var _b = react_1.useState(""), resetPasswordResults = _b[0], setResetPasswordResults = _b[1];
    var navigate = function (nameOfComponent) {
        history.push(nameOfComponent);
    };
    var resetPasswordWithEmail = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, base_1["default"]
                        .auth()
                        .sendPasswordResetEmail(email)
                        .then(function () {
                        setResetPasswordResults("An email has been sent to " + email + " with further instructions.");
                    })["catch"](function (error) {
                        alert(error.message);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { className: classes.mainContainer },
        react_1["default"].createElement("div", { className: classes.boxWrapper },
            react_1["default"].createElement(Paper_1["default"], { className: classes.paper, elevation: 3, square: true },
                react_1["default"].createElement("div", { className: classes.logoContainer },
                    react_1["default"].createElement("img", { style: { width: "180px", height: "auto" }, src: theme_config_1.logo, alt: "logo" })),
                react_1["default"].createElement("div", { className: classes.heading }, "FORGOT PASSWORD?"),
                react_1["default"].createElement("div", { className: classes.whiteText }, "Enter your e-mail address below to reset your password"),
                react_1["default"].createElement("form", { className: classes.form },
                    react_1["default"].createElement(TextField_1["default"], { className: classes.textfield, autoComplete: "off", margin: "normal", label: "Email", fullWidth: true, placeholder: "Email", variant: "outlined", value: email, onChange: function (event) { return setEmail(event.target.value); }, required: true, InputProps: {
                            autoComplete: "off"
                        }, autoFocus: true }),
                    react_1["default"].createElement("div", { className: classes.buttonsContainer },
                        react_1["default"].createElement("div", { className: classes.loginButtonContainer },
                            react_1["default"].createElement(Button_1["default"], { className: classes.boxBtn, variant: "outlined", onClick: resetPasswordWithEmail }, "Send email"))),
                    react_1["default"].createElement("div", { className: classes.sentEmailText }, resetPasswordResults)),
                react_1["default"].createElement("div", { className: classes.linkContainer },
                    react_1["default"].createElement("span", { className: classes.forgot, onClick: function () { return navigate('/login'); } }, "Login"),
                    react_1["default"].createElement("div", { className: classes.forgotDivider }, "|"),
                    react_1["default"].createElement("span", { className: classes.forgot, onClick: function () { return navigate('/'); } }, "Home"))))));
};
exports["default"] = ForgotPassword;
