"use strict";
exports.__esModule = true;
function ConfirmationInfo(data) {
    var classes = useStyles();
    console.log('On confirmation', data);
    var invoiceData = data.data;
    console.log("Invoice data");
    console.log(invoiceData);
    return (React.createElement("div", null));
}
exports["default"] = ConfirmationInfo;
