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
/* harmony export */   "default": () => (/* binding */ createHome)
/* harmony export */ });
function createHome() {
    // Selecting Skeleton HTML 'Div'
    const content = document.querySelector('#content');

    content.append(createNavBar());
    content.append(createHomeInfo());
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

function createHomeInfo() {
    // Create Section for Information
    const sectionOne = document.createElement('div');
    sectionOne.classList.add('sectionOne');

    const information = document.createElement('div');
    information.classList.add('information');

    // Create Information Text
    const p = createParagraph("Welcome to STEAKHOUSE, where the love for meat, quality ingredients, and impeccable cooking techniques come together to create the ultimate dining experience. Our menu showcases the finest cuts of beef, hand-selected from the best farms and ranches around the world, that are dry-aged to perfection to bring out their natural flavors and tenderness.");

    const p2 = createParagraph("Our chefs are masters of the grill, combining their knowledge and expertise with the right seasonings, sauces, and accompaniments to create dishes that are not just delicious, but also visually stunning. From classic cuts like ribeye and filet mignon, to more exotic options like tomahawk and hanger steak, our menu offers something for everyone.");

    const p3 = createParagraph("At STEAKHOUSE, we believe in providing not just great food, but also a memorable dining experience. Our elegant and sophisticated dining room is the perfect setting for an intimate evening, a special celebration, or a business dinner. Our friendly and professional staff will ensure that your every need is met, and that you have a memorable time.");

    const p4 = createParagraph("We invite you to join us at STEAKHOUSE and experience steak like never before. From the moment you walk in, to the last bite of dessert, we guarantee you'll be satisfied with your meal and the exceptional service. Book your table today and discover why we are considered one of the best steak houses in the world.");


    information.append(p, p2, p3, p4);
    sectionOne.append(information);
    
    return sectionOne
}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = text;
    
    return paragraph
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZndDO0FBQ2xCO0FBQ2lCO0FBQ3ZDO0FBQ0EseURBQVUsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZXMuY3NzPzE1NTMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XHJcbiAgICAvLyBTZWxlY3RpbmcgU2tlbGV0b24gSFRNTCAnRGl2J1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmQoY3JlYXRlTmF2QmFyKCkpO1xyXG4gICAgY29udGVudC5hcHBlbmQoY3JlYXRlSG9tZUluZm8oKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcclxuICAgIC8vIE5hdkJhciBFbGVtZW50c1xyXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2QmFyJyk7XHJcblxyXG4gICAgY29uc3QgbmF2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIG5hdkhlYWRlci5pbm5lckhUTUwgPSAnU1RFQUtIT1VTRSc7XHJcblxyXG4gICAgY29uc3QgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuYXZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmF2Q29udGFpbmVyJyk7XHJcblxyXG4gICAgLy8gVW5vcmRlcmVkIExpc3QgYW5kIEhlYWRlciBMaW5rc1xyXG4gICAgY29uc3QgbmF2VGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBuYXZUYWJzLmNsYXNzTGlzdC5hZGQoJ25hdlRhYnMnKTtcclxuXHJcbiAgICBjb25zdCBuYXZMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBuYXZMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbmF2TGluay5pbm5lckhUTUwgPSAnSG9tZSc7XHJcbiAgICBuYXZMaS5hcHBlbmQobmF2TGluayk7XHJcblxyXG4gICAgY29uc3QgbmF2TGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IG5hdkxpbmsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbmF2TGluazIuaW5uZXJIVE1MID0gJ01lbnUnO1xyXG4gICAgbmF2TGkyLmFwcGVuZChuYXZMaW5rMik7XHJcblxyXG4gICAgY29uc3QgbmF2TGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IG5hdkxpbmszID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbmF2TGluazMuaW5uZXJIVE1MID0gJ0Fib3V0JztcclxuICAgIG5hdkxpMy5hcHBlbmQobmF2TGluazMpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBJdGVtcyB0byBDb250ZW50XHJcbiAgICBuYXZUYWJzLmFwcGVuZChuYXZMaSwgbmF2TGkyLCBuYXZMaTMpO1xyXG4gICAgbmF2Q29udGFpbmVyLmFwcGVuZChuYXZIZWFkZXIsIG5hdlRhYnMpO1xyXG4gICAgbmF2QmFyLmFwcGVuZChuYXZDb250YWluZXIpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gbmF2QmFyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhvbWVJbmZvKCkge1xyXG4gICAgLy8gQ3JlYXRlIFNlY3Rpb24gZm9yIEluZm9ybWF0aW9uXHJcbiAgICBjb25zdCBzZWN0aW9uT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzZWN0aW9uT25lLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb25PbmUnKTtcclxuXHJcbiAgICBjb25zdCBpbmZvcm1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW5mb3JtYXRpb24uY2xhc3NMaXN0LmFkZCgnaW5mb3JtYXRpb24nKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgSW5mb3JtYXRpb24gVGV4dFxyXG4gICAgY29uc3QgcCA9IGNyZWF0ZVBhcmFncmFwaChcIldlbGNvbWUgdG8gU1RFQUtIT1VTRSwgd2hlcmUgdGhlIGxvdmUgZm9yIG1lYXQsIHF1YWxpdHkgaW5ncmVkaWVudHMsIGFuZCBpbXBlY2NhYmxlIGNvb2tpbmcgdGVjaG5pcXVlcyBjb21lIHRvZ2V0aGVyIHRvIGNyZWF0ZSB0aGUgdWx0aW1hdGUgZGluaW5nIGV4cGVyaWVuY2UuIE91ciBtZW51IHNob3djYXNlcyB0aGUgZmluZXN0IGN1dHMgb2YgYmVlZiwgaGFuZC1zZWxlY3RlZCBmcm9tIHRoZSBiZXN0IGZhcm1zIGFuZCByYW5jaGVzIGFyb3VuZCB0aGUgd29ybGQsIHRoYXQgYXJlIGRyeS1hZ2VkIHRvIHBlcmZlY3Rpb24gdG8gYnJpbmcgb3V0IHRoZWlyIG5hdHVyYWwgZmxhdm9ycyBhbmQgdGVuZGVybmVzcy5cIik7XHJcblxyXG4gICAgY29uc3QgcDIgPSBjcmVhdGVQYXJhZ3JhcGgoXCJPdXIgY2hlZnMgYXJlIG1hc3RlcnMgb2YgdGhlIGdyaWxsLCBjb21iaW5pbmcgdGhlaXIga25vd2xlZGdlIGFuZCBleHBlcnRpc2Ugd2l0aCB0aGUgcmlnaHQgc2Vhc29uaW5ncywgc2F1Y2VzLCBhbmQgYWNjb21wYW5pbWVudHMgdG8gY3JlYXRlIGRpc2hlcyB0aGF0IGFyZSBub3QganVzdCBkZWxpY2lvdXMsIGJ1dCBhbHNvIHZpc3VhbGx5IHN0dW5uaW5nLiBGcm9tIGNsYXNzaWMgY3V0cyBsaWtlIHJpYmV5ZSBhbmQgZmlsZXQgbWlnbm9uLCB0byBtb3JlIGV4b3RpYyBvcHRpb25zIGxpa2UgdG9tYWhhd2sgYW5kIGhhbmdlciBzdGVhaywgb3VyIG1lbnUgb2ZmZXJzIHNvbWV0aGluZyBmb3IgZXZlcnlvbmUuXCIpO1xyXG5cclxuICAgIGNvbnN0IHAzID0gY3JlYXRlUGFyYWdyYXBoKFwiQXQgU1RFQUtIT1VTRSwgd2UgYmVsaWV2ZSBpbiBwcm92aWRpbmcgbm90IGp1c3QgZ3JlYXQgZm9vZCwgYnV0IGFsc28gYSBtZW1vcmFibGUgZGluaW5nIGV4cGVyaWVuY2UuIE91ciBlbGVnYW50IGFuZCBzb3BoaXN0aWNhdGVkIGRpbmluZyByb29tIGlzIHRoZSBwZXJmZWN0IHNldHRpbmcgZm9yIGFuIGludGltYXRlIGV2ZW5pbmcsIGEgc3BlY2lhbCBjZWxlYnJhdGlvbiwgb3IgYSBidXNpbmVzcyBkaW5uZXIuIE91ciBmcmllbmRseSBhbmQgcHJvZmVzc2lvbmFsIHN0YWZmIHdpbGwgZW5zdXJlIHRoYXQgeW91ciBldmVyeSBuZWVkIGlzIG1ldCwgYW5kIHRoYXQgeW91IGhhdmUgYSBtZW1vcmFibGUgdGltZS5cIik7XHJcblxyXG4gICAgY29uc3QgcDQgPSBjcmVhdGVQYXJhZ3JhcGgoXCJXZSBpbnZpdGUgeW91IHRvIGpvaW4gdXMgYXQgU1RFQUtIT1VTRSBhbmQgZXhwZXJpZW5jZSBzdGVhayBsaWtlIG5ldmVyIGJlZm9yZS4gRnJvbSB0aGUgbW9tZW50IHlvdSB3YWxrIGluLCB0byB0aGUgbGFzdCBiaXRlIG9mIGRlc3NlcnQsIHdlIGd1YXJhbnRlZSB5b3UnbGwgYmUgc2F0aXNmaWVkIHdpdGggeW91ciBtZWFsIGFuZCB0aGUgZXhjZXB0aW9uYWwgc2VydmljZS4gQm9vayB5b3VyIHRhYmxlIHRvZGF5IGFuZCBkaXNjb3ZlciB3aHkgd2UgYXJlIGNvbnNpZGVyZWQgb25lIG9mIHRoZSBiZXN0IHN0ZWFrIGhvdXNlcyBpbiB0aGUgd29ybGQuXCIpO1xyXG5cclxuXHJcbiAgICBpbmZvcm1hdGlvbi5hcHBlbmQocCwgcDIsIHAzLCBwNCk7XHJcbiAgICBzZWN0aW9uT25lLmFwcGVuZChpbmZvcm1hdGlvbik7XHJcbiAgICBcclxuICAgIHJldHVybiBzZWN0aW9uT25lXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBhcmFncmFwaCh0ZXh0KSB7XHJcbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwYXJhZ3JhcGguaW5uZXJIVE1MID0gdGV4dDtcclxuICAgIFxyXG4gICAgcmV0dXJuIHBhcmFncmFwaFxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBjcmVhdGVIb21lIGZyb20gJy4vbW9kdWxlcy9ob21lJztcclxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgc3RlYWsgZnJvbSAnLi9pbWFnZXMvc3RlYWsuanBnJztcclxuXHJcbmNyZWF0ZUhvbWUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=