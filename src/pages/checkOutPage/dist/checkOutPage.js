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
//import firebase from "../../config/firebase";
var styles_1 = require("@material-ui/core/styles");
var theme_config_1 = require("../../themes/theme-config");
var react_router_1 = require("react-router");
var Button_1 = require("@material-ui/core/Button");
var TextField_1 = require("@material-ui/core/TextField");
var loader_gif_1 = require("../../assets/loader.gif");
var core_1 = require("@material-ui/core");
var invoice_service_1 = require("../../services/invoice-service");
var Checkbox_1 = require("@material-ui/core/Checkbox");
var FormControlLabel_1 = require("@material-ui/core/FormControlLabel");
var customer_service_1 = require("../../services/customer-service");
var Util_1 = require("../../Util");
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
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
            flexDirection: "column"
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
            fontSize: 14,
            color: theme_config_1.primaryText,
            marginBottom: 15,
            marginRight: 15
        },
        textfieldPostal: {
            width: "19%"
        },
        passwordBlock: {
            marginTop: 30
        },
        hidden: {
            display: 'none'
        },
        errorMessage: {
            color: theme.palette.error.main,
            marginTop: 20,
            textAlign: "left"
        },
        answerYes: {
            paddingLeft: 5,
            cursor: 'pointer',
            '&:hover': {
                color: theme_config_1.primaryColor
            }
        },
        loading: {
            width: 90,
            zIndex: 999,
            position: "absolute",
            display: "block",
            margin: "0 auto"
        }
    });
});
var CheckOut = function () {
    var classes = useStyles();
    var history = react_router_1.useHistory();
    var util = new Util_1["default"]();
    var _a = react_1.useState(""), postalCode = _a[0], setPostalCode = _a[1];
    var _b = react_1.useState(""), address = _b[0], setAddress = _b[1];
    var _c = react_1["default"].useState({
        checkedB: false
    }), state = _c[0], setState = _c[1];
    var _d = react_1.useState(false), payButtonDisabled = _d[0], setPayButtonDisabledStatus = _d[1];
    var _e = react_1.useState({}), userDetails = _e[0], setUserDetails = _e[1];
    var _f = react_1.useState(false), hideProfileAddressStatus = _f[0], setHideProfileAddress = _f[1];
    var _g = react_1.useState("Want to use different"), addressTypeQuestion = _g[0], setAddressTypeQuestion = _g[1];
    var _h = react_1.useState(""), inputErrorMessage = _h[0], setInputErrorMessage = _h[1];
    var handleChange = function (event) {
        var _a;
        setState(__assign(__assign({}, state), (_a = {}, _a[event.target.name] = event.target.checked, _a)));
    };
    var _j = react_1.useState(false), loading = _j[0], setLoading = _j[1];
    var customerService = new customer_service_1["default"]();
    customerService.getUserDetails().then(function (data) {
        setUserDetails(data.data());
    })["catch"](function (error) {
        notify("No address found for this user. Please update your profile.", "/updateProfile");
        console.log(error);
    });
    var procceddToPay = function () {
        if (!hideProfileAddressStatus) {
            if (!userDetails.address) {
                notify("No address found for this user. Please update your profile.", "/updateProfile");
            }
            else {
                saveInvoice(userDetails.address);
            }
        }
        else {
            if (!address) {
                setInputErrorMessage("You chose to enter new Address for delivery, please enter it.");
            }
            else {
                saveInvoice(address);
            }
        }
    };
    var saveInvoice = function (userAddress) {
        var invoiceService = new invoice_service_1["default"]();
        setPayButtonDisabledStatus(true);
        setLoading(true);
        var invoice = {
            invoiceData: util.retrieveBasketProductDataFromLocalStorage(),
            userDetails: userDetails,
            dateCreated: Date.now()
        };
        invoiceService.createInvoice(invoice).then(function () {
            setLoading(false);
            util.resetBasketProductDataFromLocalStorage();
            invoiceService.emailInvoice(invoice).then(function (response) {
                if (state.checkedB == true && hideProfileAddressStatus == true) {
                    var customerService_1 = new customer_service_1["default"]();
                    customerService_1.updateSingleField({
                        address: userAddress
                    }).then(function () {
                        notify("Done Making Payment, You will be redirected to your Orders.", "/orderHistory");
                    })["catch"](function (error) {
                        notify("Error : Done Making Payment, but error occured while saving address. Please contact us to resolve this issue.", "/orderHistory");
                    });
                }
                else {
                    notify("Done Making Payment, You will be redirected to your Orders.", "/orderHistory");
                }
            })["catch"](function (response) {
                setLoading(false);
                notify("Done Making Payment, An error occured while emailing invoice.", "/orderHistory");
                console.log(response);
            });
        })["catch"](function (error) {
            console.log(error);
            notify("An error occured while creating an Invoice.", "none");
        });
    };
    react_1.useEffect(function () {
        setInputErrorMessage("");
        !hideProfileAddressStatus ?
            setAddressTypeQuestion("Want to use NEW address for this delivery")
            :
                setAddressTypeQuestion("Want to use ADDRESS from your PROFILE");
    }, [hideProfileAddressStatus]);
    var handlerToggleAddress = function () {
        hideProfileAddressStatus ?
            setHideProfileAddress(false)
            :
                setHideProfileAddress(true);
    };
    var notify = function (message, redirectTo) {
        react_toastify_1.toast(message, {
            position: react_toastify_1.toast.POSITION.TOP_CENTER,
            autoClose: false,
            onClose: function () {
                if (redirectTo != "none")
                    history.push(redirectTo);
                else
                    return;
            }
        });
    };
    return (react_1["default"].createElement("div", { className: classes.mainContainer },
        react_1["default"].createElement(react_toastify_1.ToastContainer, null),
        react_1["default"].createElement("div", { className: "loading-container", style: {
                position: 'absolute', left: '45%', top: '25%',
                transform: 'translate(-50%, -50%)',
                display: loading ? 'block' : 'none'
            } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("img", { src: loader_gif_1["default"], className: classes.loading }))),
        react_1["default"].createElement("div", { className: classes.boxWrapper },
            react_1["default"].createElement("h3", { className: classes.heading }, "CHECK OUT")),
        react_1["default"].createElement("div", { className: classes.whiteText }, "Delivery address"),
        react_1["default"].createElement("form", { className: classes.form },
            react_1["default"].createElement("div", { className: classes.textfieldBlock },
                react_1["default"].createElement("div", { className: hideProfileAddressStatus == false ? classes.formHeading + " " : "" + classes.hidden },
                    react_1["default"].createElement("b", null, "Address:"),
                    " ",
                    userDetails.address),
                react_1["default"].createElement("div", { className: classes.formHeading },
                    addressTypeQuestion,
                    " ?",
                    react_1["default"].createElement(core_1.Link, { className: classes.answerYes, onClick: function () { return handlerToggleAddress(); } }, "Yes")),
                react_1["default"].createElement("div", { className: hideProfileAddressStatus == true ? "undefined" : "" + classes.hidden },
                    react_1["default"].createElement(TextField_1["default"], { className: classes.textfield, autoComplete: "off", margin: "normal", label: "Enter your full Address here...", variant: "outlined", required: true, value: address, onChange: function (event) { return setAddress(event.target.value); }, InputProps: {
                            autoComplete: "off"
                        }, onFocus: function () { return setInputErrorMessage(""); }, autoFocus: true }),
                    react_1["default"].createElement("br", null),
                    react_1["default"].createElement(FormControlLabel_1["default"], { control: react_1["default"].createElement(Checkbox_1["default"], { checked: state.checkedB, onChange: handleChange, name: "checkedB", color: "primary" }), label: "Save new address to profile?" }))),
            react_1["default"].createElement(core_1.Typography, { paragraph: true, className: classes.errorMessage }, inputErrorMessage),
            react_1["default"].createElement("div", { className: classes.buttonsContainer },
                react_1["default"].createElement("div", { className: classes.loginButtonContainer },
                    react_1["default"].createElement(Button_1["default"], { className: classes.boxBtn, variant: "outlined", onClick: procceddToPay, disabled: payButtonDisabled }, "PAY NOW"))))));
};
exports["default"] = CheckOut;
