"use strict";
exports.__esModule = true;
var Util = /** @class */ (function () {
    function Util() {
        this.storeBasketProductDataToLocalStorage = function (basketProductData) {
            localStorage.setItem('basketProductData', JSON.stringify(basketProductData));
        };
        this.retrieveBasketProductDataToLocalStorage = function () {
            var basketProductData = localStorage.getItem('basketProductData');
            var data = basketProductData ?
                JSON.parse(basketProductData)
                :
                    [];
            return data;
        };
    }
    return Util;
}());
exports["default"] = Util;
