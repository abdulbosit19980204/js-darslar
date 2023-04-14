/******/
(() => { // webpackBootstrap
    /******/
    "use strict";
    /******/
    var __webpack_modules__ = ({

        /***/
        "./src/js/js.js":
        /*!**********************!*\
          !*** ./src/js/js.js ***!
          \**********************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "default": () => ( /* binding */ logger),
                /* harmony export */
                "firstVariable": () => ( /* binding */ firstVariable),
                /* harmony export */
                "newVar": () => ( /* binding */ newVar),
                /* harmony export */
                "secVar": () => ( /* binding */ secVar)
                    /* harmony export */
            });


            // export qilish uchun birinchi o'zgaruvchi elon qilib olib keyin eport qilish mumkin
            const firstVariable = "Hello",
                newVar = "Mono variable eksported"


            // bir yoli epoxrt dan keyin eksport qilinadigan o'zgaruvchini yozish mumkin
            const secVar = 'Hello sec'

            // default eksport - lekin bitta fayldan faqat bitta eksport default yuborish mumkin
            function logger() {
                console.log("Logger default export function");
            }

            /***/
        })

        /******/
    });
    /************************************************************************/
    /******/ // The module cache
    /******/
    var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/
        var cachedModule = __webpack_module_cache__[moduleId];
        /******/
        if (cachedModule !== undefined) {
            /******/
            return cachedModule.exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = __webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /************************************************************************/
    /******/
    /* webpack/runtime/define property getters */
    /******/
    (() => {
        /******/ // define getter functions for harmony exports
        /******/
        __webpack_require__.d = (exports, definition) => {
            /******/
            for (var key in definition) {
                /******/
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/
                    Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                    /******/
                }
                /******/
            }
            /******/
        };
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/hasOwnProperty shorthand */
    /******/
    (() => {
        /******/
        __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
            /******/
    })();
    /******/
    /******/
    /* webpack/runtime/make namespace object */
    /******/
    (() => {
        /******/ // define __esModule on exports
        /******/
        __webpack_require__.r = (exports) => {
            /******/
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/
                Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/
            }
            /******/
            Object.defineProperty(exports, '__esModule', { value: true });
            /******/
        };
        /******/
    })();
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
    (() => {
        /*!**************************!*\
          !*** ./src/js/script.js ***!
          \**************************/
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var _js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./js */ "./src/js/js.js");


        ;
        console.log(_js__WEBPACK_IMPORTED_MODULE_0__.firstVariable);
        console.log("secVar=> ", _js__WEBPACK_IMPORTED_MODULE_0__.secVar);
        // import qilish ni ham bir nech usuli bor

        // defaultni eksport qilishda to'g'ridan to'gri eksport qilinadi


        // hammasini bir daniga eksport qilish


        console.log(_js__WEBPACK_IMPORTED_MODULE_0__.newVar);

        console.log(_js__WEBPACK_IMPORTED_MODULE_0__);
    })();

    /******/
})();
//# sourceMappingURL=bundle.js.map