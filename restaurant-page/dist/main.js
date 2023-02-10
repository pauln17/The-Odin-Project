/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInformation": () => (/* binding */ createInformation),
/* harmony export */   "createNavBar": () => (/* binding */ createNavBar),
/* harmony export */   "default": () => (/* binding */ createHome)
/* harmony export */ });
function createHome() {
    // Selecting Skeleton HTML 'Div'
    const content = document.querySelector('#content');

    content.append(createNavBar());
    content.append(createInformation());
}

function createNavBar() {
    // NavBar Elements
    const navBar = document.createElement('div');
    navBar.classList.add('navBar');

    const navHeader = document.createElement('h1');
    navHeader.innerHTML = 'STEAKHOUSE';

    const navContainer = document.createElement('div');
    navContainer.classList.add('navContainer');

    // Unordered List and Header Links
    const navTabs = document.createElement('ul');
    navTabs.classList.add('navTabs');

    const navLi = document.createElement('li');
    const navLink = document.createElement('a');
    navLink.innerHTML = 'Home';
    navLi.append(navLink);

    const navLi2 = document.createElement('li');
    const navLink2 = document.createElement('a');
    navLink2.innerHTML = 'Menu';
    navLi2.append(navLink2);

    const navLi3 = document.createElement('li');
    const navLink3 = document.createElement('a');
    navLink3.innerHTML = 'About';
    navLi3.append(navLink3);

    // Appending Items to Content
    navTabs.append(navLi, navLi2, navLi3);
    navContainer.append(navHeader, navTabs);
    navBar.append(navContainer);
    
    return navBar
}

function createInformation() {
    // Create Section for Information
    const sectionOne = document.createElement('div');
    sectionOne.classList.add('sectionOne');

    const information = document.createElement('div');
    information.classList.add('information');

    // Create Information Text
    const p = document.createElement('p');
    p.innerHTML = "Welcome to STEAKHOUSE, where the love for meat, quality ingredients, and impeccable cooking techniques come together to create the ultimate dining experience. Our menu showcases the finest cuts of beef, hand-selected from the best farms and ranches around the world, that are dry-aged to perfection to bring out their natural flavors and tenderness.";
    const p2 = document.createElement('p');
    p2.innerHTML = "Our chefs are masters of the grill, combining their knowledge and expertise with the right seasonings, sauces, and accompaniments to create dishes that are not just delicious, but also visually stunning. From classic cuts like ribeye and filet mignon, to more exotic options like tomahawk and hanger steak, our menu offers something for everyone.";
    const p3 = document.createElement('p');
    p3.innerHTML = "At STEAKHOUSE, we believe in providing not just great food, but also a memorable dining experience. Our elegant and sophisticated dining room is the perfect setting for an intimate evening, a special celebration, or a business dinner. Our friendly and professional staff will ensure that your every need is met, and that you have a memorable time.";
    const p4 = document.createElement('p');
    p4.innerHTML = "We invite you to join us at STEAKHOUSE and experience steak like never before. From the moment you walk in, to the last bite of dessert, we guarantee you'll be satisfied with your meal and the exceptional service. Book your table today and discover why we are considered one of the best steak houses in the world.";
    
    information.append(p, p2, p3, p4);
    sectionOne.append(information);
    
    return sectionOne
}


/***/ }),

/***/ "./src/images/steak.jpg":
/*!******************************!*\
  !*** ./src/images/steak.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/steak.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _images_steak_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/steak.jpg */ "./src/images/steak.jpg");




(0,_modules_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZndDO0FBQ2xCO0FBQ2lCO0FBQ3ZDO0FBQ0EseURBQVUsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZXMuY3NzPzE1NTMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XHJcbiAgICAvLyBTZWxlY3RpbmcgU2tlbGV0b24gSFRNTCAnRGl2J1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmQoY3JlYXRlTmF2QmFyKCkpO1xyXG4gICAgY29udGVudC5hcHBlbmQoY3JlYXRlSW5mb3JtYXRpb24oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOYXZCYXIoKSB7XHJcbiAgICAvLyBOYXZCYXIgRWxlbWVudHNcclxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoJ25hdkJhcicpO1xyXG5cclxuICAgIGNvbnN0IG5hdkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBuYXZIZWFkZXIuaW5uZXJIVE1MID0gJ1NURUFLSE9VU0UnO1xyXG5cclxuICAgIGNvbnN0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25hdkNvbnRhaW5lcicpO1xyXG5cclxuICAgIC8vIFVub3JkZXJlZCBMaXN0IGFuZCBIZWFkZXIgTGlua3NcclxuICAgIGNvbnN0IG5hdlRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgbmF2VGFicy5jbGFzc0xpc3QuYWRkKCduYXZUYWJzJyk7XHJcblxyXG4gICAgY29uc3QgbmF2TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3QgbmF2TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIG5hdkxpbmsuaW5uZXJIVE1MID0gJ0hvbWUnO1xyXG4gICAgbmF2TGkuYXBwZW5kKG5hdkxpbmspO1xyXG5cclxuICAgIGNvbnN0IG5hdkxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBuYXZMaW5rMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIG5hdkxpbmsyLmlubmVySFRNTCA9ICdNZW51JztcclxuICAgIG5hdkxpMi5hcHBlbmQobmF2TGluazIpO1xyXG5cclxuICAgIGNvbnN0IG5hdkxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBuYXZMaW5rMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIG5hdkxpbmszLmlubmVySFRNTCA9ICdBYm91dCc7XHJcbiAgICBuYXZMaTMuYXBwZW5kKG5hdkxpbmszKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgSXRlbXMgdG8gQ29udGVudFxyXG4gICAgbmF2VGFicy5hcHBlbmQobmF2TGksIG5hdkxpMiwgbmF2TGkzKTtcclxuICAgIG5hdkNvbnRhaW5lci5hcHBlbmQobmF2SGVhZGVyLCBuYXZUYWJzKTtcclxuICAgIG5hdkJhci5hcHBlbmQobmF2Q29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIG5hdkJhclxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5mb3JtYXRpb24oKSB7XHJcbiAgICAvLyBDcmVhdGUgU2VjdGlvbiBmb3IgSW5mb3JtYXRpb25cclxuICAgIGNvbnN0IHNlY3Rpb25PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNlY3Rpb25PbmUuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbk9uZScpO1xyXG5cclxuICAgIGNvbnN0IGluZm9ybWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbmZvcm1hdGlvbi5jbGFzc0xpc3QuYWRkKCdpbmZvcm1hdGlvbicpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBJbmZvcm1hdGlvbiBUZXh0XHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcC5pbm5lckhUTUwgPSBcIldlbGNvbWUgdG8gU1RFQUtIT1VTRSwgd2hlcmUgdGhlIGxvdmUgZm9yIG1lYXQsIHF1YWxpdHkgaW5ncmVkaWVudHMsIGFuZCBpbXBlY2NhYmxlIGNvb2tpbmcgdGVjaG5pcXVlcyBjb21lIHRvZ2V0aGVyIHRvIGNyZWF0ZSB0aGUgdWx0aW1hdGUgZGluaW5nIGV4cGVyaWVuY2UuIE91ciBtZW51IHNob3djYXNlcyB0aGUgZmluZXN0IGN1dHMgb2YgYmVlZiwgaGFuZC1zZWxlY3RlZCBmcm9tIHRoZSBiZXN0IGZhcm1zIGFuZCByYW5jaGVzIGFyb3VuZCB0aGUgd29ybGQsIHRoYXQgYXJlIGRyeS1hZ2VkIHRvIHBlcmZlY3Rpb24gdG8gYnJpbmcgb3V0IHRoZWlyIG5hdHVyYWwgZmxhdm9ycyBhbmQgdGVuZGVybmVzcy5cIjtcclxuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcDIuaW5uZXJIVE1MID0gXCJPdXIgY2hlZnMgYXJlIG1hc3RlcnMgb2YgdGhlIGdyaWxsLCBjb21iaW5pbmcgdGhlaXIga25vd2xlZGdlIGFuZCBleHBlcnRpc2Ugd2l0aCB0aGUgcmlnaHQgc2Vhc29uaW5ncywgc2F1Y2VzLCBhbmQgYWNjb21wYW5pbWVudHMgdG8gY3JlYXRlIGRpc2hlcyB0aGF0IGFyZSBub3QganVzdCBkZWxpY2lvdXMsIGJ1dCBhbHNvIHZpc3VhbGx5IHN0dW5uaW5nLiBGcm9tIGNsYXNzaWMgY3V0cyBsaWtlIHJpYmV5ZSBhbmQgZmlsZXQgbWlnbm9uLCB0byBtb3JlIGV4b3RpYyBvcHRpb25zIGxpa2UgdG9tYWhhd2sgYW5kIGhhbmdlciBzdGVhaywgb3VyIG1lbnUgb2ZmZXJzIHNvbWV0aGluZyBmb3IgZXZlcnlvbmUuXCI7XHJcbiAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHAzLmlubmVySFRNTCA9IFwiQXQgU1RFQUtIT1VTRSwgd2UgYmVsaWV2ZSBpbiBwcm92aWRpbmcgbm90IGp1c3QgZ3JlYXQgZm9vZCwgYnV0IGFsc28gYSBtZW1vcmFibGUgZGluaW5nIGV4cGVyaWVuY2UuIE91ciBlbGVnYW50IGFuZCBzb3BoaXN0aWNhdGVkIGRpbmluZyByb29tIGlzIHRoZSBwZXJmZWN0IHNldHRpbmcgZm9yIGFuIGludGltYXRlIGV2ZW5pbmcsIGEgc3BlY2lhbCBjZWxlYnJhdGlvbiwgb3IgYSBidXNpbmVzcyBkaW5uZXIuIE91ciBmcmllbmRseSBhbmQgcHJvZmVzc2lvbmFsIHN0YWZmIHdpbGwgZW5zdXJlIHRoYXQgeW91ciBldmVyeSBuZWVkIGlzIG1ldCwgYW5kIHRoYXQgeW91IGhhdmUgYSBtZW1vcmFibGUgdGltZS5cIjtcclxuICAgIGNvbnN0IHA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcDQuaW5uZXJIVE1MID0gXCJXZSBpbnZpdGUgeW91IHRvIGpvaW4gdXMgYXQgU1RFQUtIT1VTRSBhbmQgZXhwZXJpZW5jZSBzdGVhayBsaWtlIG5ldmVyIGJlZm9yZS4gRnJvbSB0aGUgbW9tZW50IHlvdSB3YWxrIGluLCB0byB0aGUgbGFzdCBiaXRlIG9mIGRlc3NlcnQsIHdlIGd1YXJhbnRlZSB5b3UnbGwgYmUgc2F0aXNmaWVkIHdpdGggeW91ciBtZWFsIGFuZCB0aGUgZXhjZXB0aW9uYWwgc2VydmljZS4gQm9vayB5b3VyIHRhYmxlIHRvZGF5IGFuZCBkaXNjb3ZlciB3aHkgd2UgYXJlIGNvbnNpZGVyZWQgb25lIG9mIHRoZSBiZXN0IHN0ZWFrIGhvdXNlcyBpbiB0aGUgd29ybGQuXCI7XHJcbiAgICBcclxuICAgIGluZm9ybWF0aW9uLmFwcGVuZChwLCBwMiwgcDMsIHA0KTtcclxuICAgIHNlY3Rpb25PbmUuYXBwZW5kKGluZm9ybWF0aW9uKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHNlY3Rpb25PbmVcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgY3JlYXRlSG9tZSBmcm9tICcuL21vZHVsZXMvaG9tZSc7XHJcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHN0ZWFrIGZyb20gJy4vaW1hZ2VzL3N0ZWFrLmpwZyc7XHJcblxyXG5jcmVhdGVIb21lKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9