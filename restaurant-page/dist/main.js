/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHome": () => (/* binding */ createHome)
/* harmony export */ });
function createHome() {
    createNavBar();
    createInformation();
}

function createNavBar() {
    // Selecting Skeleton HTML 'Div'
    content = document.querySelector('#content');

    // NavBar Elements
    navBar = document.createElement('div');
    navBar.classList.add('navBar');

    navBarContainer = document.createElement('div');
    navContainer.classList.add('navContainer')

    navHeader = document.createElement('h1');
    navHeader.innerHTML = 'STEAKHOUSE';

    // Unordered List and Header Links
    navTabs = document.createElement('ul');
    navLi = document.createElement('li');
    navLink = document.createElement('a');
    navLink.innerHTML = 'Home';
    navLi.append(navLink);
    navLi2 = document.createElement('li');
    navLink2 = document.createElement('a');
    navLink.innerHTML = 'Menu';
    navLi2.append(navLink2);
    navLi3 = document.createElement('li');
    navLink3 = document.createElement('a');
    navLink.innerHTML = 'About';
    navLi3.append(navLink3);

    // Appending Items to Content
    navTabs.append(navLi, navLi2, navLi3);
    navBarContainer.append(navHeader, navTabs);
    navBar.append(navBarContainer)
    content.append(navBar);
}

function createInformation() {
    // Selecting Skeleton HTML 'Div'
    content = document.querySelector('#content');

    // Create Section for Information
    sectionOne = document.createElement('div');
    sectionOne.classList.add('sectionOne');

    information = document.createElement('div');
    information.classList.add('information');

    // Create Information Text
    p = document.createElement('p');
    p.innerHTML = "Welcome to STEAKHOUSE, where the love for meat, quality ingredients, and impeccable cooking techniques come together to create the ultimate dining experience. Our menu showcases the finest cuts of beef, hand-selected from the best farms and ranches around the world, that are dry-aged to perfection to bring out their natural flavors and tenderness.";
    p2 = document.createElement('p');
    p2.innerHTML = "Our chefs are masters of the grill, combining their knowledge and expertise with the right seasonings, sauces, and accompaniments to create dishes that are not just delicious, but also visually stunning. From classic cuts like ribeye and filet mignon, to more exotic options like tomahawk and hanger steak, our menu offers something for everyone.";
    p3 = document.createElement('p');
    p3.innerHTML = "At STEAKHOUSE, we believe in providing not just great food, but also a memorable dining experience. Our elegant and sophisticated dining room is the perfect setting for an intimate evening, a special celebration, or a business dinner. Our friendly and professional staff will ensure that your every need is met, and that you have a memorable time.";
    p4 = document.createElement('p');
    p4.innerHTML = "We invite you to join us at STEAKHOUSE and experience steak like never before. From the moment you walk in, to the last bite of dessert, we guarantee you'll be satisfied with your meal and the exceptional service. Book your table today and discover why we are considered one of the best steak houses in the world.";
    
    information.append(p, p2, p3, p4);
    sectionOne.append(information);
    content.append(sectionOne);
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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");


(0,_home__WEBPACK_IMPORTED_MODULE_0__.createHome)()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDbEVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOb0M7QUFDcEM7QUFDQSxpREFBVSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XHJcbiAgICBjcmVhdGVOYXZCYXIoKTtcclxuICAgIGNyZWF0ZUluZm9ybWF0aW9uKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcclxuICAgIC8vIFNlbGVjdGluZyBTa2VsZXRvbiBIVE1MICdEaXYnXHJcbiAgICBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuXHJcbiAgICAvLyBOYXZCYXIgRWxlbWVudHNcclxuICAgIG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoJ25hdkJhcicpO1xyXG5cclxuICAgIG5hdkJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25hdkNvbnRhaW5lcicpXHJcblxyXG4gICAgbmF2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIG5hdkhlYWRlci5pbm5lckhUTUwgPSAnU1RFQUtIT1VTRSc7XHJcblxyXG4gICAgLy8gVW5vcmRlcmVkIExpc3QgYW5kIEhlYWRlciBMaW5rc1xyXG4gICAgbmF2VGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBuYXZMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBuYXZMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbmF2TGluay5pbm5lckhUTUwgPSAnSG9tZSc7XHJcbiAgICBuYXZMaS5hcHBlbmQobmF2TGluayk7XHJcbiAgICBuYXZMaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbmF2TGluazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBuYXZMaW5rLmlubmVySFRNTCA9ICdNZW51JztcclxuICAgIG5hdkxpMi5hcHBlbmQobmF2TGluazIpO1xyXG4gICAgbmF2TGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIG5hdkxpbmszID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbmF2TGluay5pbm5lckhUTUwgPSAnQWJvdXQnO1xyXG4gICAgbmF2TGkzLmFwcGVuZChuYXZMaW5rMyk7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIEl0ZW1zIHRvIENvbnRlbnRcclxuICAgIG5hdlRhYnMuYXBwZW5kKG5hdkxpLCBuYXZMaTIsIG5hdkxpMyk7XHJcbiAgICBuYXZCYXJDb250YWluZXIuYXBwZW5kKG5hdkhlYWRlciwgbmF2VGFicyk7XHJcbiAgICBuYXZCYXIuYXBwZW5kKG5hdkJhckNvbnRhaW5lcilcclxuICAgIGNvbnRlbnQuYXBwZW5kKG5hdkJhcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUluZm9ybWF0aW9uKCkge1xyXG4gICAgLy8gU2VsZWN0aW5nIFNrZWxldG9uIEhUTUwgJ0RpdidcclxuICAgIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBTZWN0aW9uIGZvciBJbmZvcm1hdGlvblxyXG4gICAgc2VjdGlvbk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2VjdGlvbk9uZS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uT25lJyk7XHJcblxyXG4gICAgaW5mb3JtYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGluZm9ybWF0aW9uLmNsYXNzTGlzdC5hZGQoJ2luZm9ybWF0aW9uJyk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIEluZm9ybWF0aW9uIFRleHRcclxuICAgIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwLmlubmVySFRNTCA9IFwiV2VsY29tZSB0byBTVEVBS0hPVVNFLCB3aGVyZSB0aGUgbG92ZSBmb3IgbWVhdCwgcXVhbGl0eSBpbmdyZWRpZW50cywgYW5kIGltcGVjY2FibGUgY29va2luZyB0ZWNobmlxdWVzIGNvbWUgdG9nZXRoZXIgdG8gY3JlYXRlIHRoZSB1bHRpbWF0ZSBkaW5pbmcgZXhwZXJpZW5jZS4gT3VyIG1lbnUgc2hvd2Nhc2VzIHRoZSBmaW5lc3QgY3V0cyBvZiBiZWVmLCBoYW5kLXNlbGVjdGVkIGZyb20gdGhlIGJlc3QgZmFybXMgYW5kIHJhbmNoZXMgYXJvdW5kIHRoZSB3b3JsZCwgdGhhdCBhcmUgZHJ5LWFnZWQgdG8gcGVyZmVjdGlvbiB0byBicmluZyBvdXQgdGhlaXIgbmF0dXJhbCBmbGF2b3JzIGFuZCB0ZW5kZXJuZXNzLlwiO1xyXG4gICAgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwMi5pbm5lckhUTUwgPSBcIk91ciBjaGVmcyBhcmUgbWFzdGVycyBvZiB0aGUgZ3JpbGwsIGNvbWJpbmluZyB0aGVpciBrbm93bGVkZ2UgYW5kIGV4cGVydGlzZSB3aXRoIHRoZSByaWdodCBzZWFzb25pbmdzLCBzYXVjZXMsIGFuZCBhY2NvbXBhbmltZW50cyB0byBjcmVhdGUgZGlzaGVzIHRoYXQgYXJlIG5vdCBqdXN0IGRlbGljaW91cywgYnV0IGFsc28gdmlzdWFsbHkgc3R1bm5pbmcuIEZyb20gY2xhc3NpYyBjdXRzIGxpa2UgcmliZXllIGFuZCBmaWxldCBtaWdub24sIHRvIG1vcmUgZXhvdGljIG9wdGlvbnMgbGlrZSB0b21haGF3ayBhbmQgaGFuZ2VyIHN0ZWFrLCBvdXIgbWVudSBvZmZlcnMgc29tZXRoaW5nIGZvciBldmVyeW9uZS5cIjtcclxuICAgIHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcDMuaW5uZXJIVE1MID0gXCJBdCBTVEVBS0hPVVNFLCB3ZSBiZWxpZXZlIGluIHByb3ZpZGluZyBub3QganVzdCBncmVhdCBmb29kLCBidXQgYWxzbyBhIG1lbW9yYWJsZSBkaW5pbmcgZXhwZXJpZW5jZS4gT3VyIGVsZWdhbnQgYW5kIHNvcGhpc3RpY2F0ZWQgZGluaW5nIHJvb20gaXMgdGhlIHBlcmZlY3Qgc2V0dGluZyBmb3IgYW4gaW50aW1hdGUgZXZlbmluZywgYSBzcGVjaWFsIGNlbGVicmF0aW9uLCBvciBhIGJ1c2luZXNzIGRpbm5lci4gT3VyIGZyaWVuZGx5IGFuZCBwcm9mZXNzaW9uYWwgc3RhZmYgd2lsbCBlbnN1cmUgdGhhdCB5b3VyIGV2ZXJ5IG5lZWQgaXMgbWV0LCBhbmQgdGhhdCB5b3UgaGF2ZSBhIG1lbW9yYWJsZSB0aW1lLlwiO1xyXG4gICAgcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwNC5pbm5lckhUTUwgPSBcIldlIGludml0ZSB5b3UgdG8gam9pbiB1cyBhdCBTVEVBS0hPVVNFIGFuZCBleHBlcmllbmNlIHN0ZWFrIGxpa2UgbmV2ZXIgYmVmb3JlLiBGcm9tIHRoZSBtb21lbnQgeW91IHdhbGsgaW4sIHRvIHRoZSBsYXN0IGJpdGUgb2YgZGVzc2VydCwgd2UgZ3VhcmFudGVlIHlvdSdsbCBiZSBzYXRpc2ZpZWQgd2l0aCB5b3VyIG1lYWwgYW5kIHRoZSBleGNlcHRpb25hbCBzZXJ2aWNlLiBCb29rIHlvdXIgdGFibGUgdG9kYXkgYW5kIGRpc2NvdmVyIHdoeSB3ZSBhcmUgY29uc2lkZXJlZCBvbmUgb2YgdGhlIGJlc3Qgc3RlYWsgaG91c2VzIGluIHRoZSB3b3JsZC5cIjtcclxuICAgIFxyXG4gICAgaW5mb3JtYXRpb24uYXBwZW5kKHAsIHAyLCBwMywgcDQpO1xyXG4gICAgc2VjdGlvbk9uZS5hcHBlbmQoaW5mb3JtYXRpb24pO1xyXG4gICAgY29udGVudC5hcHBlbmQoc2VjdGlvbk9uZSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUhvbWUgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlSG9tZSB9IGZyb20gJy4vaG9tZSc7XHJcblxyXG5jcmVhdGVIb21lKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=