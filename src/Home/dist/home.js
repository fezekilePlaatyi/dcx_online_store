"use strict";
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
var IconButton_1 = require("@material-ui/core/IconButton");
var Typography_1 = require("@material-ui/core/Typography");
var colors_1 = require("@material-ui/core/colors");
var Favorite_1 = require("@material-ui/icons/Favorite");
var Share_1 = require("@material-ui/icons/Share");
var ExpandMore_1 = require("@material-ui/icons/ExpandMore");
var gold_jpg_1 = require("../assets/gold.jpg");
var moment_1 = require("moment");
var Button_1 = require("@material-ui/core/Button");
var core_1 = require("@material-ui/core");
var theme_config_1 = require("../themes/theme-config");
var Basket_1 = require("../Basket");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        maxWidth: 345
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
function Home() {
    var classes = useStyles();
    var defaultProduct = {
        id: "",
        name: "",
        type: "",
        description: "",
        dateAdded: moment_1["default"](new Date()),
        dateModified: moment_1["default"](new Date()),
        price: 0
    };
    var _a = react_1["default"].useState([]), productsOnBasket = _a[0], addProductToBasket = _a[1];
    var _b = react_1["default"].useState(false), productDetailsBox = _b[0], displayProductDetailsBox = _b[1];
    var _c = react_1["default"].useState(defaultProduct), productDetails = _c[0], setProductDetails = _c[1];
    //   const [orderHistory, setOrderHistory] = React.useState([]);
    var handleExpandClick = function (productId) {
        if (productId != "back") {
            var product = products.find(function (item) { return item.id == productId; });
            setProductDetails(product);
        }
        displayProductDetailsBox(!productDetailsBox);
    };
    var handleAddingProductToBasket = function (productDetails) {
        console.log("adding item to basket...");
        checkIfAlreadyAddedOnBasket(productDetails)
            ? console.log("already added...")
            : addProductToBasket(function (prevArray) { return __spreadArrays(prevArray, [productDetails]); });
    };
    var checkIfAlreadyAddedOnBasket = function (productDetails) {
        var found = !productsOnBasket.find(function (item) { return item.id == productDetails.id; })
            ? false
            : true;
        return found;
    };
    // const displayOrderHistory = async () => {
    //     await firebase
    //         .getInvoices()
    //         .then((data) => {
    //             var invoiceData: any = [];
    //             data.docs.forEach((item) => {
    //                 invoiceData.push(item.data());
    //             });
    //             setOrderHistory(invoiceData);
    //         })
    //         .catch((error) => {
    //             alert(error.toString());
    //         });
    // };
    var products = [
        {
            id: "wdHKuhdwu2ybbxss",
            name: "Gold oz 2nnx",
            type: "gold",
            description: "Some gold blah blah",
            dateAdded: "19 / December / 2020",
            dateModified: "19 / December / 2020",
            price: 200
        },
        {
            id: "PpadsndHKdjwdwjsk",
            name: "Gold 5029K",
            type: "gold",
            description: "Blah blah blah",
            dateAdded: "20 / December / 2020",
            dateModified: "21 / December / 2020",
            price: 900
        },
        {
            id: "LkkddjkdHKuhdwsdjdw",
            name: "Silver JKk",
            type: "silver",
            description: "Some silverish stone blah blah",
            dateAdded: "19 / November / 2020",
            dateModified: "12 / December / 2020",
            price: 100
        },
    ];
    var productList = [];
    products.forEach(function (element) {
        var _a;
        productList.push(react_1["default"].createElement(Card_1["default"], { className: classes.root, style: { marginRight: 30 } },
            react_1["default"].createElement(CardMedia_1["default"], { className: classes.media, image: gold_jpg_1["default"], title: "plcae holder" }),
            react_1["default"].createElement(CardContent_1["default"], null,
                react_1["default"].createElement(Typography_1["default"], { variant: "body2", color: "textSecondary", component: "h3" },
                    react_1["default"].createElement("b", null,
                        "Name: ",
                        element.name)),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement(Typography_1["default"], { variant: "body2", color: "textSecondary", component: "h3" },
                    react_1["default"].createElement("b", null,
                        "Price: R ",
                        element.price)),
                " "),
            react_1["default"].createElement(CardActions_1["default"], { disableSpacing: true },
                react_1["default"].createElement(IconButton_1["default"], { "aria-label": "add to favorites" },
                    react_1["default"].createElement(Favorite_1["default"], null)),
                react_1["default"].createElement(IconButton_1["default"], { "aria-label": "share" },
                    react_1["default"].createElement(Share_1["default"], null)),
                react_1["default"].createElement(IconButton_1["default"], { className: clsx_1["default"](classes.expand, (_a = {},
                        _a[classes.expandOpen] = productDetailsBox,
                        _a)), onClick: function () { return handleExpandClick(element.id); }, "aria-expanded": productDetailsBox, "aria-label": "show more" },
                    react_1["default"].createElement(ExpandMore_1["default"], null)))));
    });
    //   const proceedToPay = async () => {
    //     await firebase
    //       .createInvoice(productsOnBasket)
    //       .then((data) => {
    //         addProductToBasket([]);
    //         alert("Successfuly paid.");
    //       })
    //       .catch((error) => {
    //         alert(error.toString());
    //       });
    //   };
    var Main = function () {
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement(core_1.Paper, { className: classes.paper },
                react_1["default"].createElement("div", { 
                    //   className={classes.productDetails}
                    style: { display: productDetailsBox ? "block" : "none" } },
                    react_1["default"].createElement(IconButton_1["default"], { onClick: function () { return handleExpandClick("back"); }, "aria-expanded": productDetailsBox, "aria-label": "show more" },
                        react_1["default"].createElement(icons_1.ChevronLeft, null),
                        " back"),
                    react_1["default"].createElement(Card_1["default"], { className: classes.productDisplayRoot },
                        react_1["default"].createElement(CardMedia_1["default"], { className: classes.cover, image: gold_jpg_1["default"], title: "plcae holder" }),
                        react_1["default"].createElement("div", { className: classes.details },
                            react_1["default"].createElement(CardContent_1["default"], { className: classes.content },
                                react_1["default"].createElement(Typography_1["default"], { component: "h5", variant: "h5" },
                                    react_1["default"].createElement("b", null, " Name: "),
                                    " ",
                                    productDetails.name),
                                react_1["default"].createElement(Typography_1["default"], { variant: "subtitle1", color: "textSecondary" },
                                    react_1["default"].createElement("b", null, "Price:"),
                                    "  R ",
                                    productDetails.price),
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement(Typography_1["default"], { component: "p" },
                                        react_1["default"].createElement("b", null, "Details:"),
                                        " ",
                                        productDetails.description),
                                    react_1["default"].createElement(Button_1["default"], { onClick: function () { return handleAddingProductToBasket(productDetails); }, style: {
                                            display: checkIfAlreadyAddedOnBasket(productDetails)
                                                ? "none"
                                                : "block"
                                        } },
                                        "+ Add ",
                                        react_1["default"].createElement(icons_1.ShoppingCart, null)),
                                    react_1["default"].createElement(Typography_1["default"], { component: "p", style: {
                                            display: checkIfAlreadyAddedOnBasket(productDetails)
                                                ? "block"
                                                : "none"
                                        } },
                                        "Added ",
                                        react_1["default"].createElement(icons_1.ShoppingCart, null),
                                        " |",
                                        " ",
                                        react_1["default"].createElement(Button_1["default"], { onClick: function () { return handleNavigationClick('basket'); } }, "View Basket"))))))),
                react_1["default"].createElement("div", { className: classes.productListCardsContainer, style: { display: productDetailsBox ? "none" : "block" } },
                    react_1["default"].createElement("h2", null, "Product List(*)"),
                    react_1["default"].createElement("h2", null,
                        "(",
                        productsOnBasket.length,
                        ") ",
                        react_1["default"].createElement(icons_1.ShoppingCart, null)),
                    react_1["default"].createElement("div", { className: classes.productList }, productList)))));
    };
    var _d = react_1.useState('main'), navigationOnHome = _d[0], setSavigationOnHome = _d[1];
    var handleNavigationClick = function (nameOfComponent) {
        console.log("navigating click handler..");
        setSavigationOnHome(nameOfComponent);
    };
    var handleNavigationOnHome = function (nameOfComponent) {
        switch (nameOfComponent) {
            case 'main':
                return (react_1["default"].createElement(Main, null));
            case 'basket':
                return (react_1["default"].createElement(Basket_1["default"], { productsOnBasket: productsOnBasket, addProductToBasket: addProductToBasket }));
        }
    };
    return (react_1["default"].createElement("div", null, handleNavigationOnHome(navigationOnHome)));
}
exports["default"] = Home;
