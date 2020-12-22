"use strict";
exports.__esModule = true;
function ConfirmationInfo(data) {
    console.log('On confirmation', data);
    var invoiceData = data.data;
    console.log("Invoice data");
    console.log(invoiceData);
    return (React.createElement("div", null, "Hello From The Comp"));
}
exports["default"] = ConfirmationInfo;
