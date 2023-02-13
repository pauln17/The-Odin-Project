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

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContactInfo)
/* harmony export */ });
function createContactInfo() {
    // Create Section for Contact Information
    const sectionOne = document.createElement('div');
    sectionOne.classList.add('sectionOne');

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const contactInfoContainer = document.createElement('div');
    contactInfoContainer.classList.add('contact-info-container');

    const location = document.createElement('div');
    location.classList.add('location');
    const locationText = document.createElement('h3');
    locationText.innerHTML = 'Location'
    const locationAddress = document.createElement('p');
    locationAddress.innerHTML = 'Address';

    const hours = document.createElement('div');
    hours.classList.add('hours');
    const hoursText = document.createElement('h3');
    hoursText.innerHTML = 'Hours'
    const hoursTime = document.createElement('p');
    hoursTime.innerHTML = 'Time';

    const contact = document.createElement('div');
    contact.classList.add('contact');
    const contactText = document.createElement('h3');
    contactText.innerHTML = 'Contact'
    const contactPhone = document.createElement('p');
    contactPhone.innerHTML = 'Phone Number';


    location.append(locationText, locationAddress);
    hours.append(hoursText, hoursTime);
    contact.append(contactText, contactPhone);
    contactInfoContainer.append(location, hours, contact);
    contactInfo.append(contactInfoContainer);
    sectionOne.append(contactInfo);
    
    return sectionOne
}

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
/* harmony export */   "createMenuItem": () => (/* binding */ createMenuItem),
/* harmony export */   "default": () => (/* binding */ createMenuInfo)
/* harmony export */ });
function createMenuInfo() {
    // Create Section for Menu Information
    const sectionOne = document.createElement('div');
    sectionOne.classList.add('sectionOne');

    const menu = document.createElement('div');
    menu.classList.add('menu-info');

    for (let i = 0; i < 4; i++) {
        menu.append(createMenuItem('Items', 'Ingredients', './images/steak-item.jpg'));
    }
    sectionOne.append(menu);
    
    return sectionOne
}

function createMenuItem(item, ingredients, image) {
    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-item-container')

    const imgItem = document.createElement('img');
    imgItem.setAttribute('src', image);

    const itemInfo = document.createElement('div');
    itemInfo.classList.add('item-info');

    const itemName = document.createElement('h3');
    itemName.innerHTML = item;

    const itemText = document.createElement('p');
    itemText.innerHTML = ingredients;

    itemInfo.append(itemName, itemText);
    menuItems.append(imgItem, itemInfo);

    return menuItems;
}


/***/ }),

/***/ "./src/images/steak-item.jpg":
/*!***********************************!*\
  !*** ./src/images/steak-item.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/steak-item.jpg";

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
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _images_steak_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/steak.jpg */ "./src/images/steak.jpg");
/* harmony import */ var _images_steak_item_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/steak-item.jpg */ "./src/images/steak-item.jpg");







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
    content.append((0,_modules_home__WEBPACK_IMPORTED_MODULE_0__["default"])());

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

    contactTab.addEventListener('click', () => {
        content.removeChild(content.children[1]);
        content.append((0,_modules_contact__WEBPACK_IMPORTED_MODULE_2__["default"])());
    })
}

initializeWebsite();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2Y0QztBQUNBO0FBQ007QUFDNUI7QUFDaUI7QUFDUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5REFBYztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5REFBYztBQUNyQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlEQUFjO0FBQ3JDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNERBQWlCO0FBQ3hDLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGVzLmNzcz8xNTUzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ29udGFjdEluZm8oKSB7XG4gICAgLy8gQ3JlYXRlIFNlY3Rpb24gZm9yIENvbnRhY3QgSW5mb3JtYXRpb25cbiAgICBjb25zdCBzZWN0aW9uT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VjdGlvbk9uZS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uT25lJyk7XG5cbiAgICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RJbmZvLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaW5mbycpO1xuXG4gICAgY29uc3QgY29udGFjdEluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0SW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWluZm8tY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uJyk7XG4gICAgY29uc3QgbG9jYXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBsb2NhdGlvblRleHQuaW5uZXJIVE1MID0gJ0xvY2F0aW9uJ1xuICAgIGNvbnN0IGxvY2F0aW9uQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsb2NhdGlvbkFkZHJlc3MuaW5uZXJIVE1MID0gJ0FkZHJlc3MnO1xuXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3Vycy5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xuICAgIGNvbnN0IGhvdXJzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaG91cnNUZXh0LmlubmVySFRNTCA9ICdIb3VycydcbiAgICBjb25zdCBob3Vyc1RpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaG91cnNUaW1lLmlubmVySFRNTCA9ICdUaW1lJztcblxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcbiAgICBjb25zdCBjb250YWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29udGFjdFRleHQuaW5uZXJIVE1MID0gJ0NvbnRhY3QnXG4gICAgY29uc3QgY29udGFjdFBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RQaG9uZS5pbm5lckhUTUwgPSAnUGhvbmUgTnVtYmVyJztcblxuXG4gICAgbG9jYXRpb24uYXBwZW5kKGxvY2F0aW9uVGV4dCwgbG9jYXRpb25BZGRyZXNzKTtcbiAgICBob3Vycy5hcHBlbmQoaG91cnNUZXh0LCBob3Vyc1RpbWUpO1xuICAgIGNvbnRhY3QuYXBwZW5kKGNvbnRhY3RUZXh0LCBjb250YWN0UGhvbmUpO1xuICAgIGNvbnRhY3RJbmZvQ29udGFpbmVyLmFwcGVuZChsb2NhdGlvbiwgaG91cnMsIGNvbnRhY3QpO1xuICAgIGNvbnRhY3RJbmZvLmFwcGVuZChjb250YWN0SW5mb0NvbnRhaW5lcik7XG4gICAgc2VjdGlvbk9uZS5hcHBlbmQoY29udGFjdEluZm8pO1xuICAgIFxuICAgIHJldHVybiBzZWN0aW9uT25lXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSG9tZUluZm8oKSB7XHJcbiAgICAvLyBDcmVhdGUgU2VjdGlvbiBmb3IgSG9tZSBJbmZvcm1hdGlvblxyXG4gICAgY29uc3Qgc2VjdGlvbk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2VjdGlvbk9uZS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uT25lJyk7XHJcblxyXG4gICAgY29uc3QgaW5mb3JtYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGluZm9ybWF0aW9uLmNsYXNzTGlzdC5hZGQoJ2luZm9ybWF0aW9uJyk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIEluZm9ybWF0aW9uXHJcbiAgICBjb25zdCBwID0gY3JlYXRlUGFyYWdyYXBoKFwiV2VsY29tZSB0byBTVEVBS0hPVVNFLCB3aGVyZSB0aGUgbG92ZSBmb3IgbWVhdCwgcXVhbGl0eSBpbmdyZWRpZW50cywgYW5kIGltcGVjY2FibGUgY29va2luZyB0ZWNobmlxdWVzIGNvbWUgdG9nZXRoZXIgdG8gY3JlYXRlIHRoZSB1bHRpbWF0ZSBkaW5pbmcgZXhwZXJpZW5jZS4gT3VyIG1lbnUgc2hvd2Nhc2VzIHRoZSBmaW5lc3QgY3V0cyBvZiBiZWVmLCBoYW5kLXNlbGVjdGVkIGZyb20gdGhlIGJlc3QgZmFybXMgYW5kIHJhbmNoZXMgYXJvdW5kIHRoZSB3b3JsZCwgdGhhdCBhcmUgZHJ5LWFnZWQgdG8gcGVyZmVjdGlvbiB0byBicmluZyBvdXQgdGhlaXIgbmF0dXJhbCBmbGF2b3JzIGFuZCB0ZW5kZXJuZXNzLlwiKTtcclxuICAgIGNvbnN0IHAyID0gY3JlYXRlUGFyYWdyYXBoKFwiT3VyIGNoZWZzIGFyZSBtYXN0ZXJzIG9mIHRoZSBncmlsbCwgY29tYmluaW5nIHRoZWlyIGtub3dsZWRnZSBhbmQgZXhwZXJ0aXNlIHdpdGggdGhlIHJpZ2h0IHNlYXNvbmluZ3MsIHNhdWNlcywgYW5kIGFjY29tcGFuaW1lbnRzIHRvIGNyZWF0ZSBkaXNoZXMgdGhhdCBhcmUgbm90IGp1c3QgZGVsaWNpb3VzLCBidXQgYWxzbyB2aXN1YWxseSBzdHVubmluZy4gRnJvbSBjbGFzc2ljIGN1dHMgbGlrZSByaWJleWUgYW5kIGZpbGV0IG1pZ25vbiwgdG8gbW9yZSBleG90aWMgb3B0aW9ucyBsaWtlIHRvbWFoYXdrIGFuZCBoYW5nZXIgc3RlYWssIG91ciBtZW51IG9mZmVycyBzb21ldGhpbmcgZm9yIGV2ZXJ5b25lLlwiKTtcclxuICAgIGNvbnN0IHAzID0gY3JlYXRlUGFyYWdyYXBoKFwiV2UgaW52aXRlIHlvdSB0byBqb2luIHVzIGF0IFNURUFLSE9VU0UgYW5kIGV4cGVyaWVuY2Ugc3RlYWsgbGlrZSBuZXZlciBiZWZvcmUuIEZyb20gdGhlIG1vbWVudCB5b3Ugd2FsayBpbiwgdG8gdGhlIGxhc3QgYml0ZSBvZiBkZXNzZXJ0LCB3ZSBndWFyYW50ZWUgeW91J2xsIGJlIHNhdGlzZmllZCB3aXRoIHlvdXIgbWVhbCBhbmQgdGhlIGV4Y2VwdGlvbmFsIHNlcnZpY2UuIEJvb2sgeW91ciB0YWJsZSB0b2RheSBhbmQgZGlzY292ZXIgd2h5IHdlIGFyZSBjb25zaWRlcmVkIG9uZSBvZiB0aGUgYmVzdCBzdGVhayBob3VzZXMgaW4gdGhlIHdvcmxkLlwiKTtcclxuXHJcbiAgICBpbmZvcm1hdGlvbi5hcHBlbmQocCwgcDIsIHAzKTtcclxuICAgIHNlY3Rpb25PbmUuYXBwZW5kKGluZm9ybWF0aW9uKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHNlY3Rpb25PbmVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhcmFncmFwaCh0ZXh0KSB7XHJcbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwYXJhZ3JhcGguaW5uZXJIVE1MID0gdGV4dDtcclxuICAgIFxyXG4gICAgcmV0dXJuIHBhcmFncmFwaFxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1lbnVJbmZvKCkge1xyXG4gICAgLy8gQ3JlYXRlIFNlY3Rpb24gZm9yIE1lbnUgSW5mb3JtYXRpb25cclxuICAgIGNvbnN0IHNlY3Rpb25PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNlY3Rpb25PbmUuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbk9uZScpO1xyXG5cclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudS1pbmZvJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICBtZW51LmFwcGVuZChjcmVhdGVNZW51SXRlbSgnSXRlbXMnLCAnSW5ncmVkaWVudHMnLCAnLi9pbWFnZXMvc3RlYWstaXRlbS5qcGcnKSk7XHJcbiAgICB9XHJcbiAgICBzZWN0aW9uT25lLmFwcGVuZChtZW51KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHNlY3Rpb25PbmVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKGl0ZW0sIGluZ3JlZGllbnRzLCBpbWFnZSkge1xyXG4gICAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51SXRlbXMuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWNvbnRhaW5lcicpXHJcblxyXG4gICAgY29uc3QgaW1nSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1nSXRlbS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltYWdlKTtcclxuXHJcbiAgICBjb25zdCBpdGVtSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaXRlbUluZm8uY2xhc3NMaXN0LmFkZCgnaXRlbS1pbmZvJyk7XHJcblxyXG4gICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgaXRlbU5hbWUuaW5uZXJIVE1MID0gaXRlbTtcclxuXHJcbiAgICBjb25zdCBpdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGl0ZW1UZXh0LmlubmVySFRNTCA9IGluZ3JlZGllbnRzO1xyXG5cclxuICAgIGl0ZW1JbmZvLmFwcGVuZChpdGVtTmFtZSwgaXRlbVRleHQpO1xyXG4gICAgbWVudUl0ZW1zLmFwcGVuZChpbWdJdGVtLCBpdGVtSW5mbyk7XHJcblxyXG4gICAgcmV0dXJuIG1lbnVJdGVtcztcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgY3JlYXRlSG9tZUluZm8gZnJvbSAnLi9tb2R1bGVzL2hvbWUnO1xyXG5pbXBvcnQgY3JlYXRlTWVudUluZm8gZnJvbSAnLi9tb2R1bGVzL21lbnUnO1xyXG5pbXBvcnQgY3JlYXRlQ29udGFjdEluZm8gZnJvbSAnLi9tb2R1bGVzL2NvbnRhY3QnO1xyXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCBzdGVhayBmcm9tICcuL2ltYWdlcy9zdGVhay5qcGcnO1xyXG5pbXBvcnQgc3RlYWtJdGVtIGZyb20gJy4vaW1hZ2VzL3N0ZWFrLWl0ZW0uanBnJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcclxuICAgIC8vIE5hdkJhciBFbGVtZW50c1xyXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2QmFyJyk7XHJcblxyXG4gICAgY29uc3QgbmF2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIG5hdkhlYWRlci5pbm5lckhUTUwgPSAnU1RFQUtIT1VTRSc7XHJcblxyXG4gICAgY29uc3QgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuYXZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmF2Q29udGFpbmVyJyk7XHJcblxyXG4gICAgLy8gVW5vcmRlcmVkIExpc3QgYW5kIEhlYWRlciBMaW5rc1xyXG4gICAgY29uc3QgbmF2VGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBuYXZUYWJzLmNsYXNzTGlzdC5hZGQoJ25hdlRhYnMnKTtcclxuXHJcbiAgICBjb25zdCBuYXZMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBuYXZMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbmF2TGluay5jbGFzc0xpc3QuYWRkKCdob21lJyk7XHJcbiAgICBuYXZMaW5rLmlubmVySFRNTCA9ICdIb21lJztcclxuICAgIG5hdkxpLmFwcGVuZChuYXZMaW5rKTtcclxuXHJcbiAgICBjb25zdCBuYXZMaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3QgbmF2TGluazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBuYXZMaW5rMi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcbiAgICBuYXZMaW5rMi5pbm5lckhUTUwgPSAnTWVudSc7XHJcbiAgICBuYXZMaTIuYXBwZW5kKG5hdkxpbmsyKTtcclxuXHJcbiAgICBjb25zdCBuYXZMaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3QgbmF2TGluazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBuYXZMaW5rMy5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XHJcbiAgICBuYXZMaW5rMy5pbm5lckhUTUwgPSAnQ29udGFjdCc7XHJcbiAgICBuYXZMaTMuYXBwZW5kKG5hdkxpbmszKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgSXRlbXMgdG8gQ29udGVudFxyXG4gICAgbmF2VGFicy5hcHBlbmQobmF2TGksIG5hdkxpMiwgbmF2TGkzKTtcclxuICAgIG5hdkNvbnRhaW5lci5hcHBlbmQobmF2SGVhZGVyLCBuYXZUYWJzKTtcclxuICAgIG5hdkJhci5hcHBlbmQobmF2Q29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIG5hdkJhclxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplV2Vic2l0ZSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgXHJcbiAgICBjb250ZW50LmFwcGVuZChjcmVhdGVOYXZCYXIoKSk7XHJcbiAgICBjb250ZW50LmFwcGVuZChjcmVhdGVIb21lSW5mbygpKTtcclxuXHJcbiAgICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcclxuICAgIGNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xyXG4gICAgY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0Jyk7XHJcblxyXG4gICAgaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuY2hpbGRyZW5bMV0pO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGNyZWF0ZUhvbWVJbmZvKCkpO1xyXG4gICAgfSlcclxuXHJcbiAgICBtZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5jaGlsZHJlblsxXSk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmQoY3JlYXRlTWVudUluZm8oKSk7XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnRhY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmNoaWxkcmVuWzFdKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZChjcmVhdGVDb250YWN0SW5mbygpKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmluaXRpYWxpemVXZWJzaXRlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9