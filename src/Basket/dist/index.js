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
var styles_1 = require("@material-ui/core/styles");
var icons_1 = require("@material-ui/icons/");
var colors_1 = require("@material-ui/core/colors");
var Delete_1 = require("@material-ui/icons/Delete");
var core_1 = require("@material-ui/core");
var theme_config_1 = require("../themes/theme-config");
var react_router_dom_1 = require("react-router-dom");
var Table_1 = require("@material-ui/core/Table");
var TableBody_1 = require("@material-ui/core/TableBody");
var TableCell_1 = require("@material-ui/core/TableCell");
var TableContainer_1 = require("@material-ui/core/TableContainer");
var TableHead_1 = require("@material-ui/core/TableHead");
var TableRow_1 = require("@material-ui/core/TableRow");
var checkOutPage_1 = require("../pages/checkOutPage/checkOutPage");
//import NumberFormat from "react-number-format";
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        maxWidth: 345
    },
    textField: {
        margin: theme.spacing(1),
        minWidth: 20,
        // marginBottom: "25px",
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
    paperSummary: {
        padding: 20,
        overflow: "auto",
        backgroundColor: theme_config_1.backgroundContrast,
        //border: lightBorders,
        display: "flex",
        flexDirection: "column",
        width: "25%"
    },
    paperSummaryHeading: {
        color: theme_config_1.primaryColor,
        textTransform: "uppercase",
        marginBottom: 20,
        fontSize: 18
    },
    paperSummaryTotal: {
        color: theme_config_1.primaryText,
        //textTransform: "uppercase",
        marginBottom: 20,
        fontSize: 18
    },
    tableCell: {
        color: theme_config_1.backgroundMain
    },
    tableDiv: {
        width: "100%",
        marginBottom: 20,
        marginTop: 20
    },
    paperContetnt: {
        display: "flex",
        flexDirection: "column"
    },
    tableRow: {
        "&:hover": {
            backgroundColor: "#808080 !important"
        }
    },
    deleteIcon: {
        cursor: "pointer",
        "&:hover": {
            color: "red !important"
        }
    },
    boxBtn: {
        float: "left",
        color: theme_config_1.primaryColor,
        backgroundColor: theme_config_1.backgroundContrast,
        borderColor: theme_config_1.primaryColor,
        textTransform: "capitalize",
        marginRight: 10,
        fontSize: 14
    },
    boxBtnBack: {
        float: "left",
        color: theme_config_1.primaryColor,
        backgroundColor: theme_config_1.backgroundContrast,
        borderColor: theme_config_1.primaryColor,
        // textTransform: "capitalize",
        marginBottom: 15,
        fontSize: 14
    },
    tableCells: {
        fontSize: 14
    },
    backButton: {
        display: "flex",
        flexDirection: "column",
        alignItems: "self-end",
        color: theme_config_1.primaryColor
    },
    productListCardsContainer: {}
}); });
var Basket = function (props) {
    var classes = useStyles();
    var history = react_router_dom_1.useHistory();
    var handleDeleteProductFromBasket = function (productId) {
        console.log("deleting...");
        addProductToBasket(productsOnBasket.filter(function (item) { return item.id !== productId; }));
    };
    var handleUpdateQuantity = function (productId, value) {
        console.log("updating quantity..");
        var test = productsOnBasket;
        var index = productsOnBasket.findIndex(function (product) { return product.id === productId; });
        if (index !== -1) {
            productsOnBasket[index].quantity = parseInt(value);
            var totalPriceId = "totalPrice_" + productId;
            var x = document.getElementById(totalPriceId);
            x.innerHTML = parseInt(value) * productsOnBasket[index].price;
        }
    };
    var productsOnBasket = props.productsOnBasket.map(function (obj) { return (__assign(__assign({}, obj), { quantity: 1 })); });
    var addProductToBasket = props.addProductToBasket;
    var handleNavigationOnHome = props.handleNavigationOnHome;
    var handleNavigationClick = props.handleNavigationClick;
    var _a = react_1.useState("basket"), navigationOnBasket = _a[0], setNavigationOnBasket = _a[1];
    var productsOnBasketList = [];
    console.log(productsOnBasket);
    var updateUIOnProductChange = function (productsOnBasket) {
        productsOnBasket.forEach(function (element) {
            var totalPrice = element.price * parseInt(element.quantity);
            console.log("TOTAL HEY", totalPrice);
            var totalPriceId = "totalPrice_" + element.id;
            productsOnBasketList.push(react_1["default"].createElement(TableRow_1["default"], { hover: true, className: classes.tableRow, key: element.id },
                react_1["default"].createElement(TableCell_1["default"], null, +1),
                react_1["default"].createElement(TableCell_1["default"], null, element.name),
                react_1["default"].createElement(TableCell_1["default"], null, element.description),
                react_1["default"].createElement(TableCell_1["default"], null, totalPrice),
                react_1["default"].createElement(TableCell_1["default"], null,
                    react_1["default"].createElement(core_1.TextField, { InputProps: {
                            inputProps: { min: 1 },
                            style: { width: "50%" }
                        }, className: classes.textField, type: "number", defaultValue: 1, onChange: function (event) {
                            return handleUpdateQuantity(element.id, event.target.value);
                        } })),
                react_1["default"].createElement(TableCell_1["default"], { id: totalPriceId }, parseInt(element.price)),
                react_1["default"].createElement(TableCell_1["default"], null,
                    react_1["default"].createElement(Delete_1["default"], { className: classes.deleteIcon, onClick: function () { return handleDeleteProductFromBasket(element.id); } }))));
        });
    };
    function handleNavigateBackToHomePage() {
        handleNavigationClick("main");
        handleNavigationOnHome("main");
    }
    updateUIOnProductChange(productsOnBasket);
    var Basket = function () {
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement(core_1.Paper, { className: classes.paper },
                react_1["default"].createElement("h3", { className: classes.backButton },
                    react_1["default"].createElement(core_1.Button, { className: classes.boxBtnBack, variant: "outlined", onClick: function () { return handleNavigateBackToHomePage(); } },
                        react_1["default"].createElement(icons_1.ChevronLeft, null),
                        " back"),
                    "BASKET"),
                react_1["default"].createElement("div", { className: classes.paperContetnt },
                    react_1["default"].createElement(TableContainer_1["default"], { component: core_1.Paper, className: classes.tableDiv },
                        react_1["default"].createElement(Table_1["default"], { "aria-label": "simple table" },
                            react_1["default"].createElement(TableHead_1["default"], null,
                                react_1["default"].createElement(TableRow_1["default"], null,
                                    react_1["default"].createElement(TableCell_1["default"], { className: classes.tableCells, align: "left" }, "#"),
                                    react_1["default"].createElement(TableCell_1["default"], { className: classes.tableCells, align: "left" }, "Name"),
                                    react_1["default"].createElement(TableCell_1["default"], { className: classes.tableCells, align: "left" }, "Description"),
                                    react_1["default"].createElement(TableCell_1["default"], { className: classes.tableCells, align: "left" }, "Price(R)"),
                                    react_1["default"].createElement(TableCell_1["default"], { className: classes.tableCells, align: "left" }, "Quantity"),
                                    react_1["default"].createElement(TableCell_1["default"], { className: classes.tableCells, align: "left" }, "Total price(R)"),
                                    react_1["default"].createElement(TableCell_1["default"], { className: classes.tableCells, align: "left" }, "Delete"))),
                            react_1["default"].createElement(TableBody_1["default"], null, productsOnBasketList))),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(core_1.Paper, { className: classes.paperSummary },
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("div", { className: classes.paperSummaryHeading }, "Basket summary"),
                                react_1["default"].createElement("div", { className: classes.paperSummaryTotal },
                                    "TOTAL ( # of items): total cost",
                                    " "),
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement(core_1.Button, { className: classes.boxBtn, onClick: function () { return handleNavigationClickOnBasket("checkout"); }, variant: "outlined" }, "Checkout")))))))));
    };
    var handleNavigationClickOnBasket = function (nameOfComponent) {
        console.log("navigating click handler..");
        setNavigationOnBasket(nameOfComponent);
    };
    var handleNavigationOnBasket = function (nameOfComponent) {
        switch (nameOfComponent) {
            case "checkout":
                return react_1["default"].createElement(checkOutPage_1["default"], { productsOnBasket: productsOnBasket });
            case "basket":
                return react_1["default"].createElement(Basket, null);
        }
    };
    return react_1["default"].createElement("div", null, handleNavigationOnBasket(navigationOnBasket));
};
exports["default"] = Basket;
