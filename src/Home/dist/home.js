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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var clsx_1 = require("clsx");
var icons_1 = require("@material-ui/icons/");
var Card_1 = require("@material-ui/core/Card");
var CardMedia_1 = require("@material-ui/core/CardMedia");
var CardContent_1 = require("@material-ui/core/CardContent");
var CardActions_1 = require("@material-ui/core/CardActions");
var Typography_1 = require("@material-ui/core/Typography");
var colors_1 = require("@material-ui/core/colors");
var ExpandMore_1 = require("@material-ui/icons/ExpandMore");
var moment_1 = require("moment");
var Button_1 = require("@material-ui/core/Button");
var core_1 = require("@material-ui/core");
var theme_config_1 = require("../themes/theme-config");
var Util_1 = require("../Util");
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
var theme_config_2 = require("../themes/theme-config");
var base_1 = require("../base");
var DisplayMoreProductDetails_1 = require("../DisplayMoreProductDetails");
var react_router_1 = require("react-router");
var react_number_format_1 = require("react-number-format");
var Zoom = react_toastify_1.cssTransition({
    enter: "zoomIn",
    exit: "zoomOut"
});
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        maxWidth: 345,
        width: "40%"
    },
    textField: {
        margin: theme.spacing(1),
        minWidth: 20,
        marginBottom: "25px",
        color: "black",
        background: "grey"
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
        width: "25%"
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
        backgroundColor: theme_config_2.backgroundContrast,
        borderColor: theme_config_2.primaryColor,
        color: theme_config_2.primaryColor,
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
        // height: "100vh",
        // width: "100vw",
        //   background: "#e3e3e3",
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
    boxBtn: {
        float: "left",
        backgroundColor: theme_config_2.backgroundContrast,
        borderColor: theme_config_2.primaryColor,
        color: theme_config_2.primaryColor,
        width: "30%"
    },
    boxBtnAddMain: {
        //float: "left",
        backgroundColor: theme_config_2.backgroundContrast,
        borderColor: theme_config_2.primaryColor,
        color: theme_config_2.primaryColor,
        // width: "20%",
        // marginTop: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    boxBtnAdd: {
        //float: "left",
        backgroundColor: theme_config_2.backgroundContrast,
        borderColor: theme_config_2.primaryColor,
        color: theme_config_1.primaryText,
        // width: "20%",
        // marginTop: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    shopCategory: {
        display: "flex",
        flexDirection: "column",
        marginBottom: 40
    },
    shopCategoryHeading: {
        display: "flex",
        //flexDirection: 'column',
        justifyContent: "space-between"
    },
    shopCategoryButtons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "37%",
        marginTop: 20
    },
    shopCategoryHeadingMain: {
        color: theme_config_1.primaryText
    },
    heading: {
        margin: "15px 0px",
        color: theme_config_2.primaryColor
    },
    pointer: {
        backgroundColor: theme_config_2.backgroundContrast,
        borderColor: theme_config_2.primaryColor,
        color: theme_config_2.primaryColor
    },
    cart: {
        display: "flex",
        alignItems: "center",
        fontSize: 18
    },
    cardDetails: {
        fontSize: 14
    },
    contentDetailsName: {
        marginBottom: 15
    },
    contentDetails: {
        marginBottom: 10,
        fontSize: 14
    },
    divider: {
        marginRight: 15,
        marginLeft: 15
    },
    productListCardsContainer: {},
    hidden: {
        display: "none"
    },
    cursorPointer: {
        cursor: "pointer",
        color: "#CC9933"
    },
    toastSuccess: {
        backgroundColor: "yellow !important"
    },
    costValue: {
        // marginLeft: "10px",
        color: theme_config_1.primaryText
    }
}); });
function Home(_a) {
    var _this = this;
    var activityStatus = _a.activityStatus;
    var classes = useStyles();
    var history = react_router_1.useHistory();
    var util = new Util_1["default"]();
    var defaultProduct = {
        id: "",
        name: "",
        type: "",
        description: "",
        dateAdded: moment_1["default"](new Date()),
        dateModified: moment_1["default"](new Date()),
        price: 0
    };
    var _b = react_1["default"].useState([]), productsOnBasket = _b[0], addProductToBasket = _b[1];
    var _c = react_1["default"].useState(false), productDetailsBox = _c[0], displayProductDetailsBox = _c[1];
    var _d = react_1["default"].useState(defaultProduct), productDetails = _d[0], setProductDetails = _d[1];
    var _e = react_1["default"].useState({}), selectedProduct = _e[0], setSelectedProduct = _e[1];
    var _f = react_1.useState(""), notificationMessage = _f[0], setNotificationMessage = _f[1];
    var _g = react_1.useState("all"), productTypeToDisplay = _g[0], setProductListCategory = _g[1];
    var _h = react_1["default"].useState([]), productList = _h[0], setProductList = _h[1];
    var handleExpandClick = function (productId) {
        var product = products.find(function (item) { return item.id == productId; });
        history.push({
            pathname: "/displayMoreProductDetails",
            state: {
                selectedProduct: product
            }
        });
    };
    var handleAddingProductToBasket = function (productDetails) {
        if (activityStatus == true) {
            console.log("adding item to basket...");
            checkIfAlreadyAddedOnBasket(productDetails)
                ? console.log("already added...")
                : addProductToBasket(function (prevArray) { return __spreadArrays(prevArray, [
                    productDetails,
                ]); });
        }
        else {
            setNotificationMessage("You need to be logged in to add product to busket.");
            notify(notificationMessage);
        }
        setSelectedProduct(productDetails);
    };
    var checkIfAlreadyAddedOnBasket = function (productDetails) {
        var found = !productsOnBasket.find(function (item) { return item.id == productDetails.id; })
            ? false
            : true;
        return found;
    };
    var updateProductListCategory = function (productType) {
        setProductListCategory(productType);
    };
    var goToBasketIfNotEmpty = function () {
        if (util.retrieveBasketProductDataFromLocalStorage().length > 0)
            history.push("/basket");
    };
    var notify = function (message) {
        react_toastify_1.toast("Success Notification !", {
            position: react_toastify_1.toast.POSITION.TOP_CENTER,
            autoClose: false,
            onClose: function () { return window.alert("Called when I close"); }
        });
    };
    var dismissAll = function () { return react_toastify_1.toast.dismiss(); };
    var products = [
        {
            id: "Ppadsndsjuydjwdwjsk",
            name: "1oz Fine Gold Medallion",
            type: "gold",
            description: "The complete Wildlife Society's 50th anniversary gold plated animal medallion set, including the original box, dating to 1976-78.",
            dateAdded: "20 / December / 2020",
            dateModified: "21 / December / 2020",
            unitWeight: 31,
            quantity: 1,
            price: 38751,
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/online-store-e8ed0.appspot.com/o/dcx-online-store%2Fgold.jpg?alt=media&token=4b63446a-7f63-4e21-a68a-f28aba76a37e"
        },
        {
            id: "DWHWWEdsksHKdjwdwjsk",
            name: "100g Fine Silver Minted Bar",
            type: "silver",
            description: "The complete Wildlife Society's 50th anniversary Silver plated animal medallion set, including the original box, dating to 1976-78.",
            dateAdded: "20 / December / 2020",
            dateModified: "21 / December / 2020",
            unitWeight: 31,
            quantity: 1,
            price: 28751,
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/online-store-e8ed0.appspot.com/o/dcx-online-store%2F3.jfif?alt=media&token=f6c56140-699f-4c30-bf03-e0f4434404a9"
        },
        {
            id: "LkkddjkdHluhdwsdjdw",
            name: "1/10oz Fine Gold Medallion",
            type: "gold",
            description: "The 1oz Fine Gold Medallion (24 Carat) will have an unlimited mintage and is linked to the current gold spot price and Rand/Dollar exchange rate which will give investors exposure to the spot gold price and also provide a hedge.",
            dateAdded: "19 / November / 2020",
            dateModified: "12 / December / 2020",
            unitWeight: 3,
            quantity: 1,
            price: 100,
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/online-store-e8ed0.appspot.com/o/dcx-online-store%2Fheadline_GOLD_13.jfif?alt=media&token=62978e07-970a-4073-9b08-e08c56d49d72"
        },
        {
            id: "DWHWWEssndHKsdsdqejsk",
            name: "1kg Fine Silver Minted Medallion",
            type: "silver",
            description: "The complete Wildlife Society's 50th anniversary Silver plated animal medallion set, including the original box, dating to 1976-78.",
            dateAdded: "20 / December / 2020",
            dateModified: "21 / December / 2020",
            unitWeight: 1,
            quantity: 1,
            price: 1000,
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/online-store-e8ed0.appspot.com/o/dcx-online-store%2Fdownload%20(1).jfif?alt=media&token=2f466880-5adb-4da4-b4c3-105c2cf438d3"
        },
        {
            id: "wdHKuhdwuapdxss",
            name: "100g Fine Gold Minted Medallion",
            type: "gold",
            description: "The 1oz Fine Gold Medallion (24 Carat) will have an unlimited mintage and is linked to the current gold spot price and Rand/Dollar exchange rate which will give investors exposure to the spot gold price and also provide a hedge.",
            dateAdded: "19 / December / 2020",
            dateModified: "19 / December / 2020",
            unitWeight: 100,
            quantity: 1,
            price: 124084,
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/online-store-e8ed0.appspot.com/o/dcx-online-store%2Fdownload.jfif?alt=media&token=1e4301af-a89f-40ff-bf4d-fc57cbfdf72d"
        }
    ];
    var displayProductList = function (productType) {
        var updateProductByCategory = [];
        productList.splice(0, productList.length);
        if (productType == "all") {
            updateUIOnProductCatergoryChange(products);
        }
        else {
            updateProductByCategory = products.filter(function (element) {
                return element.type == productType;
            });
            updateUIOnProductCatergoryChange(updateProductByCategory);
        }
    };
    var updateUIOnProductCatergoryChange = function (updateProductByCategory) {
        updateProductByCategory.forEach(function (element) {
            var _a;
            productList.push(react_1["default"].createElement(Card_1["default"], { className: classes.root, style: { marginRight: 30 } },
                react_1["default"].createElement(CardMedia_1["default"], { className: classes.media, image: element.imgUrl }),
                react_1["default"].createElement(CardContent_1["default"], null,
                    react_1["default"].createElement(Typography_1["default"], { className: classes.cardDetails, variant: "body2", color: "textSecondary", component: "h3" }, element.name),
                    react_1["default"].createElement("br", null),
                    react_1["default"].createElement(Typography_1["default"], { className: classes.cardDetails, variant: "body2", color: "textSecondary", component: "h3" },
                        "Price: R  ",
                        react_1["default"].createElement(react_number_format_1["default"], { className: classes.costValue, thousandSeparator: true, displayType: "text", value: element.price })),
                    " "),
                react_1["default"].createElement(CardActions_1["default"], { disableSpacing: true },
                    react_1["default"].createElement(Button_1["default"], { variant: "outlined", className: clsx_1["default"](classes.expand, (_a = {},
                            _a[classes.expandOpen] = productDetailsBox,
                            _a)), onClick: function () { return handleExpandClick(element.id); }, "aria-expanded": productDetailsBox, "aria-label": "Show more" },
                        " ",
                        "Details",
                        react_1["default"].createElement(ExpandMore_1["default"], null)))));
        });
    };
    displayProductList(productTypeToDisplay);
    var Main = function () {
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement(core_1.Paper, { className: classes.paper },
                react_1["default"].createElement("div", { className: classes.productListCardsContainer, style: { display: productDetailsBox ? "none" : "block" } },
                    react_1["default"].createElement("div", { className: classes.shopCategory },
                        react_1["default"].createElement("h3", { className: classes.heading }, "INVEST IN YOUR FUTURE NOW!"),
                        react_1["default"].createElement("div", { className: classes.shopCategoryHeading },
                            react_1["default"].createElement("h3", { className: classes.shopCategoryHeadingMain }, "Shop by category"),
                            react_1["default"].createElement(Button_1["default"], { variant: "outlined", className: classes.pointer, onClick: function () { return goToBasketIfNotEmpty(); } },
                                react_1["default"].createElement("div", { className: classes.cart },
                                    " ",
                                    "(",
                                    util.retrieveBasketProductDataFromLocalStorage().length,
                                    ") ",
                                    react_1["default"].createElement(icons_1.ShoppingCart, null)))),
                        react_1["default"].createElement("div", { className: classes.shopCategoryButtons },
                            react_1["default"].createElement(Button_1["default"], { className: classes.boxBtn, variant: "outlined", onClick: function (evet) { return updateProductListCategory("gold"); } }, "GOLD"),
                            react_1["default"].createElement(Button_1["default"], { className: classes.boxBtn, variant: "outlined", onClick: function (event) { return updateProductListCategory("silver"); } }, "SILVER"),
                            react_1["default"].createElement(Button_1["default"], { className: classes.boxBtn, variant: "outlined", onClick: function (event) { return updateProductListCategory("all"); } }, "ALL"))),
                    react_1["default"].createElement("div", { className: classes.productList }, productList)))));
    };
    var _j = react_1.useState("main"), navigationOnHome = _j[0], setSavigationOnHome = _j[1];
    var handleNavigationClick = function (nameOfComponent) {
        console.log("navigating click handler..");
        setSavigationOnHome(nameOfComponent);
    };
    var handleNavigationOnHome = function (nameOfComponent) {
        switch (nameOfComponent) {
            case "main":
                return react_1["default"].createElement(Main, null);
            case "displayMoreProductDetails": {
                return react_1["default"].createElement(DisplayMoreProductDetails_1["default"], { productDetails: selectedProduct });
            }
        }
    };
    var logout = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, base_1["default"].auth().signOut()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var user = base_1["default"].auth().currentUser;
    if (user) {
        if (user.emailVerified) {
            return react_1["default"].createElement("div", null, handleNavigationOnHome(navigationOnHome));
        }
        else {
            return (react_1["default"].createElement(core_1.Paper, { className: classes.paper },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h2", null, "Please verify email and login again!"),
                    react_1["default"].createElement("h4", null,
                        "You can",
                        " ",
                        react_1["default"].createElement("span", { onClick: logout, className: classes.cursorPointer }, "Logout")))));
        }
    }
    else {
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement(Main, null)));
    }
}
exports["default"] = Home;
