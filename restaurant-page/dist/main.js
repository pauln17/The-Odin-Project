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
/* harmony export */   "createParagraph": () => (/* binding */ createParagraph),
/* harmony export */   "default": () => (/* binding */ createHomeInfo)
/* harmony export */ });
function createHomeInfo() {
    // Create Section for Home Information
    const sectionOne = document.createElement('div');
    sectionOne.classList.add('sectionOne');

    const information = document.createElement('div');
    information.classList.add('information');

    // Create Information
    const p = createParagraph("Welcome to STEAKHOUSE, where the love for meat, quality ingredients, and impeccable cooking techniques come together to create the ultimate dining experience. Our menu showcases the finest cuts of beef, hand-selected from the best farms and ranches around the world, that are dry-aged to perfection to bring out their natural flavors and tenderness.");
    const p2 = createParagraph("Our chefs are masters of the grill, combining their knowledge and expertise with the right seasonings, sauces, and accompaniments to create dishes that are not just delicious, but also visually stunning. From classic cuts like ribeye and filet mignon, to more exotic options like tomahawk and hanger steak, our menu offers something for everyone.");
    const p3 = createParagraph("We invite you to join us at STEAKHOUSE and experience steak like never before. From the moment you walk in, to the last bite of dessert, we guarantee you'll be satisfied with your meal and the exceptional service. Book your table today and discover why we are considered one of the best steak houses in the world.");

    information.append(p, p2, p3);
    sectionOne.append(information);
    
    return sectionOne
}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = text;
    
    return paragraph
}


/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenuInfo)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/modules/home.js");


function createMenuInfo() {
    // Create Section for Menu Information
    const sectionOne = document.createElement('div');
    sectionOne.classList.add('sectionOne');

    const information = document.createElement('div');
    information.classList.add('information');

    // Create Information
    const p = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createParagraph)('MENU!!!!');

    information.append(p);
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
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _images_steak_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/steak.jpg */ "./src/images/steak.jpg");





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
    navLink.classList.add('home');
    navLink.innerHTML = 'Home';
    navLi.append(navLink);

    const navLi2 = document.createElement('li');
    const navLink2 = document.createElement('a');
    navLink2.classList.add('menu');
    navLink2.innerHTML = 'Menu';
    navLi2.append(navLink2);

    const navLi3 = document.createElement('li');
    const navLink3 = document.createElement('a');
    navLink3.classList.add('contact');
    navLink3.innerHTML = 'Contact';
    navLi3.append(navLink3);

    // Appending Items to Content
    navTabs.append(navLi, navLi2, navLi3);
    navContainer.append(navHeader, navTabs);
    navBar.append(navContainer);
    
    return navBar
}

function initializeWebsite() {
    const content = document.querySelector('#content');
    
    content.append(createNavBar());
    // content.append(createHomeInfo());

    const homeTab = document.querySelector('.home');
    const menuTab = document.querySelector('.menu');
    const contactTab = document.querySelector('.contact');

    homeTab.addEventListener('click', () => {
        content.removeChild(content.children[1]);
        content.append((0,_modules_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
    })

    menuTab.addEventListener('click', () => {
        content.removeChild(content.children[1]);
        content.append((0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"])());
    })
}

initializeWebsite();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QjRDO0FBQzVDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx5REFBZTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmNEM7QUFDQTtBQUN0QjtBQUNpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseURBQWM7QUFDckMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5REFBYztBQUNyQyxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlcy5jc3M/MTU1MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIb21lSW5mbygpIHtcclxuICAgIC8vIENyZWF0ZSBTZWN0aW9uIGZvciBIb21lIEluZm9ybWF0aW9uXHJcbiAgICBjb25zdCBzZWN0aW9uT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzZWN0aW9uT25lLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb25PbmUnKTtcclxuXHJcbiAgICBjb25zdCBpbmZvcm1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW5mb3JtYXRpb24uY2xhc3NMaXN0LmFkZCgnaW5mb3JtYXRpb24nKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgSW5mb3JtYXRpb25cclxuICAgIGNvbnN0IHAgPSBjcmVhdGVQYXJhZ3JhcGgoXCJXZWxjb21lIHRvIFNURUFLSE9VU0UsIHdoZXJlIHRoZSBsb3ZlIGZvciBtZWF0LCBxdWFsaXR5IGluZ3JlZGllbnRzLCBhbmQgaW1wZWNjYWJsZSBjb29raW5nIHRlY2huaXF1ZXMgY29tZSB0b2dldGhlciB0byBjcmVhdGUgdGhlIHVsdGltYXRlIGRpbmluZyBleHBlcmllbmNlLiBPdXIgbWVudSBzaG93Y2FzZXMgdGhlIGZpbmVzdCBjdXRzIG9mIGJlZWYsIGhhbmQtc2VsZWN0ZWQgZnJvbSB0aGUgYmVzdCBmYXJtcyBhbmQgcmFuY2hlcyBhcm91bmQgdGhlIHdvcmxkLCB0aGF0IGFyZSBkcnktYWdlZCB0byBwZXJmZWN0aW9uIHRvIGJyaW5nIG91dCB0aGVpciBuYXR1cmFsIGZsYXZvcnMgYW5kIHRlbmRlcm5lc3MuXCIpO1xyXG4gICAgY29uc3QgcDIgPSBjcmVhdGVQYXJhZ3JhcGgoXCJPdXIgY2hlZnMgYXJlIG1hc3RlcnMgb2YgdGhlIGdyaWxsLCBjb21iaW5pbmcgdGhlaXIga25vd2xlZGdlIGFuZCBleHBlcnRpc2Ugd2l0aCB0aGUgcmlnaHQgc2Vhc29uaW5ncywgc2F1Y2VzLCBhbmQgYWNjb21wYW5pbWVudHMgdG8gY3JlYXRlIGRpc2hlcyB0aGF0IGFyZSBub3QganVzdCBkZWxpY2lvdXMsIGJ1dCBhbHNvIHZpc3VhbGx5IHN0dW5uaW5nLiBGcm9tIGNsYXNzaWMgY3V0cyBsaWtlIHJpYmV5ZSBhbmQgZmlsZXQgbWlnbm9uLCB0byBtb3JlIGV4b3RpYyBvcHRpb25zIGxpa2UgdG9tYWhhd2sgYW5kIGhhbmdlciBzdGVhaywgb3VyIG1lbnUgb2ZmZXJzIHNvbWV0aGluZyBmb3IgZXZlcnlvbmUuXCIpO1xyXG4gICAgY29uc3QgcDMgPSBjcmVhdGVQYXJhZ3JhcGgoXCJXZSBpbnZpdGUgeW91IHRvIGpvaW4gdXMgYXQgU1RFQUtIT1VTRSBhbmQgZXhwZXJpZW5jZSBzdGVhayBsaWtlIG5ldmVyIGJlZm9yZS4gRnJvbSB0aGUgbW9tZW50IHlvdSB3YWxrIGluLCB0byB0aGUgbGFzdCBiaXRlIG9mIGRlc3NlcnQsIHdlIGd1YXJhbnRlZSB5b3UnbGwgYmUgc2F0aXNmaWVkIHdpdGggeW91ciBtZWFsIGFuZCB0aGUgZXhjZXB0aW9uYWwgc2VydmljZS4gQm9vayB5b3VyIHRhYmxlIHRvZGF5IGFuZCBkaXNjb3ZlciB3aHkgd2UgYXJlIGNvbnNpZGVyZWQgb25lIG9mIHRoZSBiZXN0IHN0ZWFrIGhvdXNlcyBpbiB0aGUgd29ybGQuXCIpO1xyXG5cclxuICAgIGluZm9ybWF0aW9uLmFwcGVuZChwLCBwMiwgcDMpO1xyXG4gICAgc2VjdGlvbk9uZS5hcHBlbmQoaW5mb3JtYXRpb24pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gc2VjdGlvbk9uZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFyYWdyYXBoKHRleHQpIHtcclxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHBhcmFncmFwaC5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gICAgXHJcbiAgICByZXR1cm4gcGFyYWdyYXBoXHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlUGFyYWdyYXBoIH0gZnJvbSAnLi9ob21lLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1lbnVJbmZvKCkge1xyXG4gICAgLy8gQ3JlYXRlIFNlY3Rpb24gZm9yIE1lbnUgSW5mb3JtYXRpb25cclxuICAgIGNvbnN0IHNlY3Rpb25PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNlY3Rpb25PbmUuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbk9uZScpO1xyXG5cclxuICAgIGNvbnN0IGluZm9ybWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbmZvcm1hdGlvbi5jbGFzc0xpc3QuYWRkKCdpbmZvcm1hdGlvbicpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBJbmZvcm1hdGlvblxyXG4gICAgY29uc3QgcCA9IGNyZWF0ZVBhcmFncmFwaCgnTUVOVSEhISEnKTtcclxuXHJcbiAgICBpbmZvcm1hdGlvbi5hcHBlbmQocCk7XHJcbiAgICBzZWN0aW9uT25lLmFwcGVuZChpbmZvcm1hdGlvbik7XHJcbiAgICBcclxuICAgIHJldHVybiBzZWN0aW9uT25lXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGNyZWF0ZUhvbWVJbmZvIGZyb20gJy4vbW9kdWxlcy9ob21lJztcclxuaW1wb3J0IGNyZWF0ZU1lbnVJbmZvIGZyb20gJy4vbW9kdWxlcy9tZW51JztcclxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgc3RlYWsgZnJvbSAnLi9pbWFnZXMvc3RlYWsuanBnJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcclxuICAgIC8vIE5hdkJhciBFbGVtZW50c1xyXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2QmFyJyk7XHJcblxyXG4gICAgY29uc3QgbmF2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIG5hdkhlYWRlci5pbm5lckhUTUwgPSAnU1RFQUtIT1VTRSc7XHJcblxyXG4gICAgY29uc3QgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuYXZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmF2Q29udGFpbmVyJyk7XHJcblxyXG4gICAgLy8gVW5vcmRlcmVkIExpc3QgYW5kIEhlYWRlciBMaW5rc1xyXG4gICAgY29uc3QgbmF2VGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBuYXZUYWJzLmNsYXNzTGlzdC5hZGQoJ25hdlRhYnMnKTtcclxuXHJcbiAgICBjb25zdCBuYXZMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBuYXZMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbmF2TGluay5jbGFzc0xpc3QuYWRkKCdob21lJyk7XHJcbiAgICBuYXZMaW5rLmlubmVySFRNTCA9ICdIb21lJztcclxuICAgIG5hdkxpLmFwcGVuZChuYXZMaW5rKTtcclxuXHJcbiAgICBjb25zdCBuYXZMaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3QgbmF2TGluazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBuYXZMaW5rMi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcbiAgICBuYXZMaW5rMi5pbm5lckhUTUwgPSAnTWVudSc7XHJcbiAgICBuYXZMaTIuYXBwZW5kKG5hdkxpbmsyKTtcclxuXHJcbiAgICBjb25zdCBuYXZMaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3QgbmF2TGluazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBuYXZMaW5rMy5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XHJcbiAgICBuYXZMaW5rMy5pbm5lckhUTUwgPSAnQ29udGFjdCc7XHJcbiAgICBuYXZMaTMuYXBwZW5kKG5hdkxpbmszKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgSXRlbXMgdG8gQ29udGVudFxyXG4gICAgbmF2VGFicy5hcHBlbmQobmF2TGksIG5hdkxpMiwgbmF2TGkzKTtcclxuICAgIG5hdkNvbnRhaW5lci5hcHBlbmQobmF2SGVhZGVyLCBuYXZUYWJzKTtcclxuICAgIG5hdkJhci5hcHBlbmQobmF2Q29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIG5hdkJhclxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplV2Vic2l0ZSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgXHJcbiAgICBjb250ZW50LmFwcGVuZChjcmVhdGVOYXZCYXIoKSk7XHJcbiAgICAvLyBjb250ZW50LmFwcGVuZChjcmVhdGVIb21lSW5mbygpKTtcclxuXHJcbiAgICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcclxuICAgIGNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xyXG4gICAgY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0Jyk7XHJcblxyXG4gICAgaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuY2hpbGRyZW5bMV0pO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGNyZWF0ZUhvbWVJbmZvKCkpO1xyXG4gICAgfSlcclxuXHJcbiAgICBtZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5jaGlsZHJlblsxXSk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmQoY3JlYXRlTWVudUluZm8oKSk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5pbml0aWFsaXplV2Vic2l0ZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==