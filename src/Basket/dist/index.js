"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var colors_1 = require("@material-ui/core/colors");
var Delete_1 = require("@material-ui/icons/Delete");
var core_1 = require("@material-ui/core");
var theme_config_1 = require("../themes/theme-config");
var react_router_dom_1 = require("react-router-dom");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        maxWidth: 345
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
    var productsOnBasket = props.productsOnBasket;
    var addProductToBasket = props.addProductToBasket;
    var handleNavigationOnHome = props.handleNavigationOnHome;
    var productsOnBasketList = [];
    productsOnBasket.forEach(function (element) {
        productsOnBasketList.push(react_1["default"].createElement("tr", { key: element.id },
            react_1["default"].createElement("td", null, element.name),
            react_1["default"].createElement("td", null, element.description),
            react_1["default"].createElement("td", null,
                "R ",
                element.price),
            react_1["default"].createElement("td", null,
                react_1["default"].createElement(core_1.TextField, { InputProps: {
                        inputProps: { min: 1 }
                    }, className: classes.textField, type: "number", defaultValue: 1, onChange: function (event) {
                        return handleUpdateQuantity(element.id, event.target.value);
                    } })),
            react_1["default"].createElement("td", null,
                react_1["default"].createElement(Delete_1["default"], { onClick: function () { return handleDeleteProductFromBasket(element.id); } }))));
    });
    function test() {
        handleNavigationOnHome('main');
    }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h2", { onClick: function () { return test(); } }, "BASKET "),
        react_1["default"].createElement("div", { className: "table table-striped" },
            react_1["default"].createElement("thead", null,
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("th", null, "Name"),
                    react_1["default"].createElement("th", null, "Description"),
                    react_1["default"].createElement("th", null, "Price(zars)"),
                    react_1["default"].createElement("th", null, "Quantity"),
                    react_1["default"].createElement("th", null, "Delete"))),
            react_1["default"].createElement("tbody", null, productsOnBasketList))));
};
exports["default"] = Basket;
