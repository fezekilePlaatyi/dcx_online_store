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
var icons_1 = require("@material-ui/icons/");
var Card_1 = require("@material-ui/core/Card");
var CardMedia_1 = require("@material-ui/core/CardMedia");
var CardContent_1 = require("@material-ui/core/CardContent");
var IconButton_1 = require("@material-ui/core/IconButton");
var Typography_1 = require("@material-ui/core/Typography");
var colors_1 = require("@material-ui/core/colors");
var Button_1 = require("@material-ui/core/Button");
var theme_config_1 = require("../themes/theme-config");
var theme_config_2 = require("../themes/theme-config");
var react_router_dom_1 = require("react-router-dom");
var Util_1 = require("../Util");
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
        backgroundColor: theme_config_1.backgroundContrast,
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
        backgroundColor: theme_config_1.backgroundContrast,
        borderColor: theme_config_2.primaryColor,
        color: theme_config_2.primaryColor,
        width: "30%"
    },
    boxBtnAddMain: {
        //float: "left",
        backgroundColor: theme_config_1.backgroundContrast,
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
        backgroundColor: theme_config_1.backgroundContrast,
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
        backgroundColor: theme_config_1.backgroundContrast,
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
        cursor: 'pointer',
        color: '#CC9933'
    }
}); });
var DisplayMoreProductDetails = function (props) {
    var classes = useStyles();
    var history = react_router_dom_1.useHistory();
    var util = new Util_1["default"]();
    var productDetails = props.location.state.selectedProduct;
    console.log(productDetails);
    var _a = react_1.useState(util.retrieveBasketProductDataFromLocalStorage()), productsOnBasket = _a[0], addProductToBasket = _a[1];
    react_1.useEffect(function () {
        util.storeBasketProductDataToLocalStorage(productsOnBasket);
        console.log(util.retrieveBasketProductDataFromLocalStorage());
        setProductIsAdded(checkIfAlreadyAddedOnBasket(productDetails));
    }, [productsOnBasket]);
    var handleNavigation = function (nameOfTheComponent) {
        history.push(nameOfTheComponent);
    };
    var handleAddingProductToBasket = function (productDetails) {
        checkIfAlreadyAddedOnBasket(productDetails)
            ? console.log("already added...")
            : addProductToBasket(function (prevArray) { return __spreadArrays(prevArray, [
                productDetails,
            ]); });
    };
    var checkIfAlreadyAddedOnBasket = function (productDetails) {
        if (productsOnBasket.length > 0) {
            console.log(productsOnBasket);
            var found = !productsOnBasket.find(function (item) { return item.id == productDetails.id; })
                ? false
                : true;
            return found;
        }
        else {
            return false;
        }
    };
    var _b = react_1.useState(checkIfAlreadyAddedOnBasket(productDetails)), productIsAdded = _b[0], setProductIsAdded = _b[1];
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(IconButton_1["default"], { onClick: function () {
                return handleNavigation("/");
            }, "aria-label": "show more" },
            react_1["default"].createElement(icons_1.ChevronLeft, null),
            "back"),
        react_1["default"].createElement(Card_1["default"], { className: classes.productDisplayRoot },
            react_1["default"].createElement(CardMedia_1["default"], { className: classes.cover, image: productDetails.imgUrl, title: "Image" }),
            react_1["default"].createElement("div", { className: classes.details },
                react_1["default"].createElement(CardContent_1["default"], { className: classes.content },
                    react_1["default"].createElement(Typography_1["default"], { className: classes.contentDetailsName, component: "h5", variant: "h5" },
                        react_1["default"].createElement("b", null, " Name: "),
                        " ",
                        productDetails.name),
                    react_1["default"].createElement(Typography_1["default"], { className: classes.contentDetails, variant: "subtitle1", color: "textSecondary" },
                        react_1["default"].createElement("b", null, "Price:"),
                        " R ",
                        productDetails.price),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(Typography_1["default"], { className: classes.contentDetails, component: "p" },
                            react_1["default"].createElement("b", null, "Details:"),
                            " ",
                            productDetails.description),
                        react_1["default"].createElement(Button_1["default"], { variant: "outlined", className: classes.boxBtnAddMain, onClick: function () {
                                return handleAddingProductToBasket(productDetails);
                            }, style: {
                                display: productIsAdded
                                    ? "none"
                                    : "flex"
                            } },
                            "+ Add",
                            react_1["default"].createElement(icons_1.ShoppingCart, null)),
                        react_1["default"].createElement(Typography_1["default"], { component: "p", style: {
                                display: productIsAdded
                                    ? "flex"
                                    : "none",
                                color: theme_config_1.primaryText,
                                alignItems: "center",
                                fontSize: 14
                            } },
                            "Added",
                            react_1["default"].createElement(icons_1.ShoppingCart, null),
                            " ",
                            react_1["default"].createElement("div", { className: classes.divider }, "|"),
                            react_1["default"].createElement(Button_1["default"], { className: classes.boxBtnAdd, onClick: function () { return handleNavigation("/basket"); } }, "View Basket"))))))));
};
exports["default"] = DisplayMoreProductDetails;
