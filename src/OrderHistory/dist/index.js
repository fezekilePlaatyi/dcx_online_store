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
var colors_1 = require("@material-ui/core/colors");
var theme_config_1 = require("../themes/theme-config");
var react_router_dom_1 = require("react-router-dom");
var invoice_service_1 = require("../services/invoice-service");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        maxWidth: 345,
        color: "black"
    },
    textField: {
        margin: theme.spacing(1),
        minWidth: 20,
        marginBottom: "25px",
        color: "black"
    },
    productDisplayRoot: {
        display: "flex",
        padding: 30
    },
    details: {
        display: "flex",
        flexDirection: "column",
        paddingLeft: 30
    },
    content: {
        flex: "1 0 auto"
    },
    cover: {
        width: 151
    },
    controls: {
        display: "flex",
        alignItems: "center",
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    },
    playIcon: {
        height: 38,
        width: 38
    },
    media: {
        height: 0,
        paddingTop: "56.25%"
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: "rotate(180deg)"
    },
    avatar: {
        backgroundColor: colors_1.red[500]
    },
    productDetails: {
        height: "100vh",
        width: "100vw",
        background: "#e3e3e3",
        display: "none"
    },
    productList: {
        display: "inline-flex"
    },
    paper: {
        padding: 20,
        overflow: "auto",
        backgroundColor: theme_config_1.backgroundMain,
        border: "none",
        display: "flex",
        flexDirection: "column",
        width: "100%"
    },
    productListCardsContainer: {}
}); });
var OrderHistory = function () {
    var classes = useStyles();
    var history = react_router_dom_1.useHistory();
    var _a = react_1["default"].useState([]), orderHistory = _a[0], setOrderHistory = _a[1];
    var _b = react_1.useState([]), invoicesData = _b[0], setInvoiceData = _b[1];
    var invoices = [];
    var displayOrderHistory = function () { return __awaiter(void 0, void 0, void 0, function () {
        var invoiceInstance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    invoiceInstance = new invoice_service_1["default"]();
                    return [4 /*yield*/, invoiceInstance.getInvoicesByUserId()
                            .then(function (data) {
                            invoicesData.splice(0, invoicesData.length);
                            data.forEach(function (doc) {
                                invoicesData.push(doc.data());
                            });
                            setOrderHistory(invoicesData);
                        })["catch"](function (error) {
                            alert(error.toString());
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    invoicesData.forEach(addInvoiceToAccordingList);
    function addInvoiceToAccordingList(element, index, array) {
        for (var _i = 0, _a = Object.entries(element); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            var invoice = value;
            invoices.push(react_1["default"].createElement("div", { className: "panel panel-default" },
                react_1["default"].createElement("div", { className: "panel-heading" },
                    react_1["default"].createElement("h4", { className: "panel-title" },
                        react_1["default"].createElement("a", { "data-toggle": "collapse", "data-parent": "#accordion", href: "#collapse1" }, invoice[0].name))),
                react_1["default"].createElement("div", { id: "collapse1", className: "panel-collapse collapse in" },
                    react_1["default"].createElement("div", { className: "panel-body" },
                        react_1["default"].createElement("p", null,
                            "Description: ",
                            invoice[0].description),
                        react_1["default"].createElement("p", null,
                            "Price: ",
                            invoice[0].price)))));
        }
    }
    displayOrderHistory();
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h2", { style: { color: "black" } },
            "Order History(",
            invoices.length,
            ")"),
        react_1["default"].createElement("div", { style: { color: "black" } }, invoices)));
};
exports["default"] = OrderHistory;
