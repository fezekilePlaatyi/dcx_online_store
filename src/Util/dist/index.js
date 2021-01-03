"use strict";
exports.__esModule = true;
var Util = /** @class */ (function () {
    function Util() {
        this.storeBasketProductDataToLocalStorage = function (basketProductData) {
            localStorage.setItem('basketProductData', JSON.stringify(basketProductData));
        };
        this.retrieveBasketProductDataFromLocalStorage = function () {
            var basketProductData = localStorage.getItem('basketProductData');
            var data = basketProductData ?
                JSON.parse(basketProductData)
                :
                    [];
            return data;
        };
        this.resetBasketProductDataFromLocalStorage = function () {
            localStorage.removeItem('basketProductData');
        };
    }
    return Util;
}());
exports["default"] = Util;
