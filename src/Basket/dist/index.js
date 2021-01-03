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
var Util_1 = require("../Util");
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
    tableRowDescription: {
        width: "35%",
        textAlign: 'justify',
        fontSize: 12
    },
    tableCellsQty: {
        width: "10%",
        fontSize: 14
    },
    tableRowValue: {
        fontSize: 12
    },
    productListCardsContainer: {}
}); });
var Basket = function () {
    var classes = useStyles();
    var history = react_router_dom_1.useHistory();
    var util = new Util_1["default"]();
    var _a = react_1.useState(util.retrieveBasketProductDataFromLocalStorage()), basketProductData = _a[0], setBasketProductData = _a[1];
    var handleDeleteProductFromBasket = function (productId) {
        console.log("deleting item...");
        var updatedProductsOnBasket = basketProductData;
        updatedProductsOnBasket = updatedProductsOnBasket.filter(function (item) { return item.id !== productId; });
        setBasketProductData(updatedProductsOnBasket);
    };
    var handleUpdateQuantity = function (productId, value) {
        console.log("updating item quantity...");
        setBasketProductData(function (prevData) { return prevData.map(function (item) {
            if (item.id === productId) {
                return __assign(__assign({}, item), { quantity: parseInt(value) });
            }
            return item;
        }); });
    };
    var handleNavigation = function (componentName) {
        console.log("navigating to", componentName);
        /*
          To:Do Check if Logged in or force to login
        */
        if (util.retrieveBasketProductDataFromLocalStorage().length > 0)
            history.push(componentName);
    };
    var getBasketSubTotal = function () {
        console.log("updatng basket subtotal...");
        var basketSubTotal = 0;
        var totalNumberOfItems = 0;
        var pricesArray = basketProductData.map(function (element) { return element.price; });
        var quantityArray = basketProductData.map(function (element) { return element.quantity; });
        pricesArray.forEach(function (price, index) {
            basketSubTotal += quantityArray[index] * price;
            totalNumberOfItems += quantityArray[index];
        });
        return {
            basketSubTotal: basketSubTotal,
            totalNumberOfItems: totalNumberOfItems
        };
    };
    react_1.useEffect(function () {
        console.log("Changes detected on basket data...");
        util.storeBasketProductDataToLocalStorage(basketProductData);
        console.log(util.retrieveBasketProductDataFromLocalStorage());
    }, [basketProductData]);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: classes.paperContetnt },
            react_1["default"].createElement(TableContainer_1["default"], { component: core_1.Paper, className: classes.tableDiv },
                react_1["default"].createElement(Table_1["default"], { "aria-label": "simple table" },
                    react_1["default"].createElement(TableHead_1["default"], null,
                        react_1["default"].createElement(TableRow_1["default"], null,
                            react_1["default"].createElement(TableCell_1["default"], { className: classes.tableCells, align: "left" }, "#"),
                            react_1["default"].createElement(TableCell_1["default"], { className: classes.tableCells, align: "left" }, "Name"),
                            react_1["default"].createElement(TableCell_1["default"], { className: classes.tableCells, align: "left" }, "Description"),
                            react_1["default"].createElement(TableCell_1["default"], { className: classes.tableCells, align: "left" }, "Price (R)"),
                            react_1["default"].createElement(TableCell_1["default"], { className: classes.tableCellsQty, align: "left" }, "Quantity"),
                            react_1["default"].createElement(TableCell_1["default"], { className: classes.tableCells, align: "left" }, "Total price (R)"),
                            react_1["default"].createElement(TableCell_1["default"], { className: classes.tableCells, align: "left" }, "Delete"))),
                    react_1["default"].createElement(TableBody_1["default"], null, basketProductData.map(function (item) {
                        return react_1["default"].createElement(TableRow_1["default"], { hover: true, className: classes.tableRow, key: item.id },
                            react_1["default"].createElement(TableCell_1["default"], { className: classes.tableRowValue }, "#"),
                            react_1["default"].createElement(TableCell_1["default"], { className: classes.tableRowValue }, item.name),
                            react_1["default"].createElement(TableCell_1["default"], { className: classes.tableRowValue }, item.description),
                            react_1["default"].createElement(TableCell_1["default"], { className: classes.tableRowValue }, item.price),
                            react_1["default"].createElement(TableCell_1["default"], { className: classes.tableRowValue },
                                react_1["default"].createElement(core_1.TextField, { InputProps: {
                                        inputProps: { min: 1 },
                                        style: { width: "50%" }
                                    }, className: classes.textField, type: "number", value: item.quantity, onChange: function (event) {
                                        return handleUpdateQuantity(item.id, event.target.value);
                                    } })),
                            react_1["default"].createElement(TableCell_1["default"], { className: classes.tableRowValue }, parseInt(item.quantity) * item.price),
                            react_1["default"].createElement(TableCell_1["default"], { className: classes.tableRowValue },
                                react_1["default"].createElement(Delete_1["default"], { className: classes.deleteIcon, onClick: function () { return handleDeleteProductFromBasket(item.id); } })));
                    }))))),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(core_1.Paper, { className: classes.paperSummary },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", { className: classes.paperSummaryHeading }, "Basket summary"),
                    react_1["default"].createElement("div", { className: classes.paperSummaryTotal },
                        "TOTAL ( ",
                        getBasketSubTotal().totalNumberOfItems,
                        " of items): total cost R ",
                        getBasketSubTotal().basketSubTotal),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(core_1.Button, { className: classes.boxBtn, onClick: function () { return handleNavigation("/checkout"); }, variant: "outlined" }, "Checkout")))))));
};
exports["default"] = Basket;
