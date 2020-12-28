"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
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
        border: "none",
        display: "flex",
        flexDirection: "column",
        width: "100%"
    },
    tableCell: {
        color: theme_config_1.backgroundMain
    },
    tableDiv: {
        width: "80%"
    },
    paperContetnt: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
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
        var index = productsOnBasket.findIndex(function (product) { return product.id === productId; });
        if (index !== -1)
            productsOnBasket[index].quantity = value;
        console.log(productsOnBasket);
    };
    //   function ccyFormat(num: number) {
    //     return `${num.toFixed(2)}`;
    // }
    var productsOnBasket = props.productsOnBasket;
    var addProductToBasket = props.addProductToBasket;
    var handleNavigationOnHome = props.handleNavigationOnHome;
    var productsOnBasketList = [];
    console.log(productsOnBasket);
    productsOnBasket.forEach(function (element) {
        productsOnBasketList.push(react_1["default"].createElement(TableRow_1["default"], { key: element.id },
            react_1["default"].createElement(TableCell_1["default"], null, +1),
            react_1["default"].createElement(TableCell_1["default"], null, element.name),
            react_1["default"].createElement(TableCell_1["default"], null, element.description),
            react_1["default"].createElement(TableCell_1["default"], null, element.price),
            react_1["default"].createElement(TableCell_1["default"], null,
                react_1["default"].createElement(core_1.TextField, { InputProps: {
                        inputProps: { min: 1 },
                        style: { width: "50%" }
                    }, className: classes.textField, type: "number", defaultValue: 1, onChange: function (event) {
                        return handleUpdateQuantity(element.id, event.target.value);
                    } })),
            react_1["default"].createElement(TableCell_1["default"], null, element.totalPrice),
            react_1["default"].createElement(TableCell_1["default"], null,
                react_1["default"].createElement(Delete_1["default"], { onClick: function () { return handleDeleteProductFromBasket(element.id); } }))));
    });
    function test() {
        handleNavigationOnHome("main");
    }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(core_1.Paper, { className: classes.paper },
            react_1["default"].createElement("h2", { onClick: function () { return test(); } }, "BASKET "),
            react_1["default"].createElement("div", { className: classes.paperContetnt },
                react_1["default"].createElement(TableContainer_1["default"], { component: core_1.Paper, className: classes.tableDiv },
                    react_1["default"].createElement(Table_1["default"], { "aria-label": "simple table" },
                        react_1["default"].createElement(TableHead_1["default"], null,
                            react_1["default"].createElement(TableRow_1["default"], null,
                                react_1["default"].createElement(TableCell_1["default"], { align: "left" }, "#"),
                                react_1["default"].createElement(TableCell_1["default"], { align: "left" }, "Name"),
                                react_1["default"].createElement(TableCell_1["default"], { align: "left" }, "Description"),
                                react_1["default"].createElement(TableCell_1["default"], { align: "left" }, "Price(R)"),
                                react_1["default"].createElement(TableCell_1["default"], { align: "left" }, "Quantity"),
                                react_1["default"].createElement(TableCell_1["default"], { align: "left" }, "Total price(R)"),
                                react_1["default"].createElement(TableCell_1["default"], { align: "left" }, "Delete"))),
                        react_1["default"].createElement(TableBody_1["default"], null, productsOnBasketList))),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(core_1.Paper, { className: classes.paperSummary },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("div", null, "Basket summary"),
                            react_1["default"].createElement("div", null, "TOTAL ( # of items): total cost "))))))));
};
exports["default"] = Basket;
