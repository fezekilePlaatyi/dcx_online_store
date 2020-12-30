"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var theme_config_1 = require("../../themes/theme-config");
var Paper_1 = require("@material-ui/core/Paper");
var Stars_1 = require("@material-ui/icons/Stars");
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        paper: {
            padding: 40,
            overflow: "auto",
            backgroundColor: theme_config_1.backgroundContrast,
            border: "none",
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            width: "100%"
        },
        heading: {
            margin: "15px 0px",
            color: theme_config_1.primaryColor
        },
        whiteText: {
            color: theme_config_1.primaryText,
            fontSize: 14,
            lineHeight: "30px",
            textAlign: "justify"
        },
        aboutHeading: {
            color: theme_config_1.primaryColor,
            fontSize: 14,
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        },
        contactDetailsPhone: {
            color: theme_config_1.primaryText,
            fontSize: 14,
            marginLeft: 15
        },
        contactDetailsIcon: {
            color: theme_config_1.primaryColor
        },
        contactBlocks: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 30
        },
        contactBlock: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        },
        contactDetails: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 5
        },
        h4: {
            marginLeft: 15
        },
        aboutBlock: {
            width: '55%',
            marginBottom: 20
        }
    });
});
var About = function () {
    var classes = useStyles();
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Paper_1["default"], { className: classes.paper },
            react_1["default"].createElement("h2", { className: classes.heading }, "ABOUT US"),
            react_1["default"].createElement("div", { className: classes.whiteText }, "DCX Bullion (Pty) Ltd was started by Chris Hattingh and Deon Rebello out of passion to help people and show them a way to protect and growth their wealth through God\u2019s commodities \u2013 GOLD and SILVER. Chris has been in Sales and Marketing for the last 25 years. Starting in the security industry and then CEO of an International toy company for the last 9 years with 2 patents in his name. Similarly, Deon has also been in Sales and Marketing for the last 20 years. Starting in a successful family business in the manufacturing industry and then joint CEO for a firm in the mining industry. Having both lived through the recession in 2008, watching people losing their jobs and their homes, they anticipated the next financial crash already a year ago. They have both been in the commodity industry for the last year, specialising mainly in silver as an investment. They recently joined forces and hence created DCX Bullion to educate people and get gold and silver into the hands of as many South Africans as possible to protect themselves for what is coming."),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("h3", null, "WHY CHOOSE US"),
                react_1["default"].createElement("div", { className: classes.aboutBlock },
                    react_1["default"].createElement("div", { className: classes.aboutHeading },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement(Stars_1["default"], null)),
                        react_1["default"].createElement("h4", { className: classes.h4 }, "ONE STOP SHOP")),
                    react_1["default"].createElement("div", { className: classes.whiteText }, "Most people have never been exposed to or purchased commodities such as Gold and Silver. There is an entry point and an exit point. If you are not experienced with the process, you could get cheated out of its full potential. At DCX, we are a \u201Cone stop shop\u201D offering the following to our clients: Daily pricing, national delivery, vaulting options and purchasing of metals.")),
                react_1["default"].createElement("div", { className: classes.aboutBlock },
                    react_1["default"].createElement("div", { className: classes.aboutHeading },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement(Stars_1["default"], null)),
                        react_1["default"].createElement("h4", { className: classes.h4 }, "SECURE YOUR CAPITAL")),
                    react_1["default"].createElement("div", { className: classes.whiteText }, "In these financially uncertain times, investment in tangible silver is a safe way of protecting your capital. For many people this is a comforting thought, as precious metals will always retain their value, even in times of inflation. We will gladly provide you with thorough and personal advice about investing in silver in the form of: Coins, Medallions, Bars.")),
                react_1["default"].createElement("div", { className: classes.aboutBlock },
                    react_1["default"].createElement("div", { className: classes.aboutHeading },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement(Stars_1["default"], null)),
                        react_1["default"].createElement("h4", { className: classes.h4 }, "BUY & INVEST IN YOUR FUTURE NOW!")),
                    react_1["default"].createElement("div", { className: classes.whiteText }, "Unlike gold, silver holds important value in the industrial world. Investors not only see silver as a monetary metal but are also very interested in its industrial possibilities. The shortages of silver on the world market has led to a growing interest in this precious metal as more people are discovering the benefits of investing in silver. It is therefore advisable to act quickly in order to take full advantage of this increasingly popular precious/industrial metal. Silver is still relatively inexpensive to buy, so anyone investing at this time will be investing a great and valuable commodity."))))));
};
exports["default"] = About;
