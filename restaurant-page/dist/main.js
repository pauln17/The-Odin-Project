/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    content = document.querySelector('#content');

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");


function init() {
    (0,_modules_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3BFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ3hDO0FBQ0E7QUFDQSxJQUFJLHlEQUFVO0FBQ2Q7QUFDQTtBQUNBLE8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xyXG4gICAgLy8gU2VsZWN0aW5nIFNrZWxldG9uIEhUTUwgJ0RpdidcclxuICAgIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kKGNyZWF0ZU5hdkJhcigpKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kKGNyZWF0ZUluZm9ybWF0aW9uKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXZCYXIoKSB7XHJcbiAgICAvLyBOYXZCYXIgRWxlbWVudHNcclxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoJ25hdkJhcicpO1xyXG5cclxuICAgIGNvbnN0IG5hdkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBuYXZIZWFkZXIuaW5uZXJIVE1MID0gJ1NURUFLSE9VU0UnO1xyXG5cclxuICAgIGNvbnN0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25hdkNvbnRhaW5lcicpO1xyXG5cclxuICAgIC8vIFVub3JkZXJlZCBMaXN0IGFuZCBIZWFkZXIgTGlua3NcclxuICAgIGNvbnN0IG5hdlRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgbmF2VGFicy5jbGFzc0xpc3QuYWRkKCduYXZUYWJzJyk7XHJcblxyXG4gICAgY29uc3QgbmF2TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3QgbmF2TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIG5hdkxpbmsuaW5uZXJIVE1MID0gJ0hvbWUnO1xyXG4gICAgbmF2TGkuYXBwZW5kKG5hdkxpbmspO1xyXG5cclxuICAgIGNvbnN0IG5hdkxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBuYXZMaW5rMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIG5hdkxpbmsyLmlubmVySFRNTCA9ICdNZW51JztcclxuICAgIG5hdkxpMi5hcHBlbmQobmF2TGluazIpO1xyXG5cclxuICAgIGNvbnN0IG5hdkxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBuYXZMaW5rMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIG5hdkxpbmszLmlubmVySFRNTCA9ICdBYm91dCc7XHJcbiAgICBuYXZMaTMuYXBwZW5kKG5hdkxpbmszKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgSXRlbXMgdG8gQ29udGVudFxyXG4gICAgbmF2VGFicy5hcHBlbmQobmF2TGksIG5hdkxpMiwgbmF2TGkzKTtcclxuICAgIG5hdkNvbnRhaW5lci5hcHBlbmQobmF2SGVhZGVyLCBuYXZUYWJzKTtcclxuICAgIG5hdkJhci5hcHBlbmQobmF2Q29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIG5hdkJhclxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVJbmZvcm1hdGlvbigpIHtcclxuICAgIC8vIENyZWF0ZSBTZWN0aW9uIGZvciBJbmZvcm1hdGlvblxyXG4gICAgY29uc3Qgc2VjdGlvbk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2VjdGlvbk9uZS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uT25lJyk7XHJcblxyXG4gICAgY29uc3QgaW5mb3JtYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGluZm9ybWF0aW9uLmNsYXNzTGlzdC5hZGQoJ2luZm9ybWF0aW9uJyk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIEluZm9ybWF0aW9uIFRleHRcclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwLmlubmVySFRNTCA9IFwiV2VsY29tZSB0byBTVEVBS0hPVVNFLCB3aGVyZSB0aGUgbG92ZSBmb3IgbWVhdCwgcXVhbGl0eSBpbmdyZWRpZW50cywgYW5kIGltcGVjY2FibGUgY29va2luZyB0ZWNobmlxdWVzIGNvbWUgdG9nZXRoZXIgdG8gY3JlYXRlIHRoZSB1bHRpbWF0ZSBkaW5pbmcgZXhwZXJpZW5jZS4gT3VyIG1lbnUgc2hvd2Nhc2VzIHRoZSBmaW5lc3QgY3V0cyBvZiBiZWVmLCBoYW5kLXNlbGVjdGVkIGZyb20gdGhlIGJlc3QgZmFybXMgYW5kIHJhbmNoZXMgYXJvdW5kIHRoZSB3b3JsZCwgdGhhdCBhcmUgZHJ5LWFnZWQgdG8gcGVyZmVjdGlvbiB0byBicmluZyBvdXQgdGhlaXIgbmF0dXJhbCBmbGF2b3JzIGFuZCB0ZW5kZXJuZXNzLlwiO1xyXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwMi5pbm5lckhUTUwgPSBcIk91ciBjaGVmcyBhcmUgbWFzdGVycyBvZiB0aGUgZ3JpbGwsIGNvbWJpbmluZyB0aGVpciBrbm93bGVkZ2UgYW5kIGV4cGVydGlzZSB3aXRoIHRoZSByaWdodCBzZWFzb25pbmdzLCBzYXVjZXMsIGFuZCBhY2NvbXBhbmltZW50cyB0byBjcmVhdGUgZGlzaGVzIHRoYXQgYXJlIG5vdCBqdXN0IGRlbGljaW91cywgYnV0IGFsc28gdmlzdWFsbHkgc3R1bm5pbmcuIEZyb20gY2xhc3NpYyBjdXRzIGxpa2UgcmliZXllIGFuZCBmaWxldCBtaWdub24sIHRvIG1vcmUgZXhvdGljIG9wdGlvbnMgbGlrZSB0b21haGF3ayBhbmQgaGFuZ2VyIHN0ZWFrLCBvdXIgbWVudSBvZmZlcnMgc29tZXRoaW5nIGZvciBldmVyeW9uZS5cIjtcclxuICAgIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcDMuaW5uZXJIVE1MID0gXCJBdCBTVEVBS0hPVVNFLCB3ZSBiZWxpZXZlIGluIHByb3ZpZGluZyBub3QganVzdCBncmVhdCBmb29kLCBidXQgYWxzbyBhIG1lbW9yYWJsZSBkaW5pbmcgZXhwZXJpZW5jZS4gT3VyIGVsZWdhbnQgYW5kIHNvcGhpc3RpY2F0ZWQgZGluaW5nIHJvb20gaXMgdGhlIHBlcmZlY3Qgc2V0dGluZyBmb3IgYW4gaW50aW1hdGUgZXZlbmluZywgYSBzcGVjaWFsIGNlbGVicmF0aW9uLCBvciBhIGJ1c2luZXNzIGRpbm5lci4gT3VyIGZyaWVuZGx5IGFuZCBwcm9mZXNzaW9uYWwgc3RhZmYgd2lsbCBlbnN1cmUgdGhhdCB5b3VyIGV2ZXJ5IG5lZWQgaXMgbWV0LCBhbmQgdGhhdCB5b3UgaGF2ZSBhIG1lbW9yYWJsZSB0aW1lLlwiO1xyXG4gICAgY29uc3QgcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwNC5pbm5lckhUTUwgPSBcIldlIGludml0ZSB5b3UgdG8gam9pbiB1cyBhdCBTVEVBS0hPVVNFIGFuZCBleHBlcmllbmNlIHN0ZWFrIGxpa2UgbmV2ZXIgYmVmb3JlLiBGcm9tIHRoZSBtb21lbnQgeW91IHdhbGsgaW4sIHRvIHRoZSBsYXN0IGJpdGUgb2YgZGVzc2VydCwgd2UgZ3VhcmFudGVlIHlvdSdsbCBiZSBzYXRpc2ZpZWQgd2l0aCB5b3VyIG1lYWwgYW5kIHRoZSBleGNlcHRpb25hbCBzZXJ2aWNlLiBCb29rIHlvdXIgdGFibGUgdG9kYXkgYW5kIGRpc2NvdmVyIHdoeSB3ZSBhcmUgY29uc2lkZXJlZCBvbmUgb2YgdGhlIGJlc3Qgc3RlYWsgaG91c2VzIGluIHRoZSB3b3JsZC5cIjtcclxuICAgIFxyXG4gICAgaW5mb3JtYXRpb24uYXBwZW5kKHAsIHAyLCBwMywgcDQpO1xyXG4gICAgc2VjdGlvbk9uZS5hcHBlbmQoaW5mb3JtYXRpb24pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gc2VjdGlvbk9uZVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSAnLi9tb2R1bGVzL2hvbWUnO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGNyZWF0ZUhvbWUoKTtcclxufVxyXG5cclxuaW5pdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==