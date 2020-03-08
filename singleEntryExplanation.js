
(function (module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__); // adds Symbol.toStringTag and __esmodule to the object to __webpack_exports


    /*   __webpack_exports__ = {
          Symbol.toStringTag: 'Module',
          __esmodule: true,
          "default": add
      } */
    var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/add.js");


    /*   __webpack_exports__ = {
      Symbol.toStringTag: 'Module',
      __esmodule: true,
      "default": substract
  } */
    var _subtract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/subtract.js");

    console.log(Object(_add__WEBPACK_IMPORTED_MODULE_0__["default"])(4, 5));
    console.log(Object(_subtract__WEBPACK_IMPORTED_MODULE_1__["default"])(10, 5));
})


    (function (module, __webpack_exports__, __webpack_require__) {

        /*   __webpack_exports__ = {
              Symbol.toStringTag: 'Module',
              __esmodule: true,
              "default": add
          } */

        __webpack_require__.r(__webpack_exports__); // adds Symbol.toStringTag and __esmodule to the object to __webpack_exports
        function add(a, b) { return a + b; }
        __webpack_exports__["default"] = (add)
    })


    (function (module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        function subtract(a, b) { return a - b; }
        __webpack_exports__["default"] = (subtract);
    })






