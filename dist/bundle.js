/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/drag.component.js":
/*!**************************************!*\
  !*** ./components/drag.component.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DragComponent\": () => (/* binding */ DragComponent)\n/* harmony export */ });\n/* harmony import */ var _templates_drag_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/drag.create */ \"./templates/drag.create.js\");\n\r\n\r\nclass DragComponent{\r\n    constructor(elementId, placeholders) {\r\n        this.$el = document.querySelector(elementId)\r\n        this.$placeholders = document.querySelectorAll(placeholders)\r\n        this.placeholdersEvents()\r\n    }\r\n\r\n    init() {\r\n        this.$el.addEventListener('dragstart', this.dragstart.bind(this))\r\n        this.$el.addEventListener('dragend', this.dragend.bind(this))\r\n    }\r\n\r\n    placeholdersEvents() {\r\n        for (const placeholder of this.$placeholders) {\r\n            placeholder.addEventListener('dragover',  this.dragover.bind(this))\r\n            placeholder.addEventListener('dragenter', this.dragenter.bind(this))\r\n            placeholder.addEventListener('dragleave', this.dragleave.bind(this))\r\n            placeholder.addEventListener('drop', this.dragdrop.bind(this))\r\n        }\r\n    }\r\n\r\n    dragstart(event) {\r\n        if (event.target.nodeName === 'DIV') {\r\n            event.target.classList.add('hold')\r\n            setTimeout(() => event.target.classList.add('hide'), 0)\r\n        }\r\n    }\r\n\r\n    dragend(event) {\r\n        event.target.className = 'place-down'\r\n    }\r\n\r\n    dragover(event) {\r\n        event.preventDefault()\r\n\r\n        event.target.classList.remove('hovered')\r\n\r\n    }\r\n    \r\n    dragenter(event) {\r\n        if (event.target.nodeName === 'H1') {\r\n            event.target.offsetParent.classList.add('hovered')\r\n        }\r\n    }\r\n    \r\n    dragleave(event) {\r\n        if(event.target.nodeName === 'H1') {\r\n            event.target.offsetParent.classList.remove('hovered')\r\n        }\r\n        \r\n    }\r\n    \r\n    dragdrop(event) {\r\n        if (event.target.nodeName === 'H1') {\r\n            let HTML = (0,_templates_drag_create__WEBPACK_IMPORTED_MODULE_0__.dragCreate)(event.target.offsetParent, event.target)\r\n            this.$el.innerHTML = ''\r\n            event.target.offsetParent.classList.remove('hovered')\r\n            this.$el.insertAdjacentHTML('afterbegin', HTML)\r\n            event.target.offsetParent.append(this.$el)\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://portfolio/./components/drag.component.js?");

/***/ }),

/***/ "./components/validator.component.js":
/*!*******************************************!*\
  !*** ./components/validator.component.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Validator\": () => (/* binding */ Validator)\n/* harmony export */ });\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ \"./core/component.js\");\n/* harmony import */ var _templates_info_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/info.create */ \"./templates/info.create.js\");\n\r\n\r\n\r\nclass Validator extends _core_component__WEBPACK_IMPORTED_MODULE_0__.Component{\r\n    constructor(item, btn, dataName, spawn) {\r\n        super(btn)\r\n        this.$spawn = document.querySelector(spawn)\r\n        this.$el = document.querySelector(item)\r\n        this.$dataName = dataName\r\n    }\r\n\r\n    init() {\r\n        this.$btn.addEventListener('click', this.checkItem.bind(this))\r\n    }\r\n\r\n    toMass(mass, element){\r\n        element.forEach(item => {\r\n            mass.push(item)\r\n        })\r\n        return mass\r\n    }\r\n\r\n    checkItem(event) {\r\n        event.preventDefault()\r\n        \r\n        let allInputs = this.$el.querySelectorAll('input')\r\n        let allTextAreas = this.$el.querySelectorAll('textarea')\r\n        let mass = []\r\n\r\n        this.toMass(mass, allInputs)\r\n        this.toMass(mass, allTextAreas)\r\n        \r\n        mass.forEach(item => {\r\n            this.validation(item, this.$dataName)\r\n        })\r\n        \r\n        if (this.$el.querySelector('form').querySelectorAll('span').length == 0) {\r\n            let newMass = []\r\n            mass.forEach(input => {\r\n                newMass.push({[input.dataset[this.$dataName]]: input.value})\r\n            })\r\n\r\n            let HTMLInfo = (0,_templates_info_create__WEBPACK_IMPORTED_MODULE_1__.renderInfo)(newMass, this.$dataName)\r\n\r\n            let parentBLock = this.$spawn.parentNode\r\n            let allElements = this.$spawn.querySelectorAll('div')\r\n            if (allElements.length === 0) {\r\n                this.$spawn.insertAdjacentHTML('beforeend', HTMLInfo)\r\n    \r\n            }else {\r\n                let widthSpawn = this.$spawn.getBoundingClientRect().width\r\n                let sum = 0\r\n\r\n                allElements.forEach(element => {\r\n                    sum += element.clientWidth\r\n                })\r\n\r\n                if (((widthSpawn - (allElements.length * sum)) > 50)) {\r\n                    this.$spawn.insertAdjacentHTML('beforeend', HTMLInfo)\r\n                }else {\r\n                    let dataName = this.$spawn.dataset[this.$dataName]\r\n                    let HTMLRow = (0,_templates_info_create__WEBPACK_IMPORTED_MODULE_1__.renderInfo)(false, dataName)\r\n                    parentBLock.insertAdjacentHTML('beforeend', HTMLRow)\r\n                    this.$spawn = parentBLock.lastElementChild\r\n                }\r\n            }         \r\n        }\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://portfolio/./components/validator.component.js?");

/***/ }),

/***/ "./core/component.js":
/*!***************************!*\
  !*** ./core/component.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => (/* binding */ Component)\n/* harmony export */ });\nclass Component {\r\n    constructor(btn) {\r\n        this.$btn = document.querySelector(btn)\r\n        this.init()\r\n    }\r\n\r\n    init(){}\r\n\r\n    validation(input, dataName) {\r\n        const dictionary = {\r\n            title: 3,\r\n            text: 10\r\n        }\r\n\r\n        let inputLength = input.value.length\r\n        let typeInput = input.dataset[dataName]\r\n    \r\n        if (typeInput in dictionary) {\r\n            let span = `<span>Type more symbols! (${dictionary[typeInput]})</span>`\r\n            if (inputLength < dictionary[typeInput]) {\r\n                let child = input.parentNode.querySelector('span')\r\n                if (!child) {\r\n                    input.insertAdjacentHTML('afterend', span)\r\n                }\r\n            }else {\r\n                if (input.parentNode.querySelector('span')) {\r\n                    let child = input.parentNode.querySelector('span')\r\n                    input.parentNode.removeChild(child)\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://portfolio/./core/component.js?");

/***/ }),

/***/ "./src/source.js":
/*!***********************!*\
  !*** ./src/source.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_drag_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/drag.component */ \"./components/drag.component.js\");\n/* harmony import */ var _components_validator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/validator.component */ \"./components/validator.component.js\");\n\r\n\r\n\r\nconst dragElement = new _components_drag_component__WEBPACK_IMPORTED_MODULE_0__.DragComponent('.place-down', '.placeholder')\r\nconst navCreater = new _components_validator_component__WEBPACK_IMPORTED_MODULE_1__.Validator('.place-down', '.submit', 'nav', '.row')\n\n//# sourceURL=webpack://portfolio/./src/source.js?");

/***/ }),

/***/ "./templates/drag.create.js":
/*!**********************************!*\
  !*** ./templates/drag.create.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dragCreate\": () => (/* binding */ dragCreate)\n/* harmony export */ });\nfunction dragCreate(eventPlaceholder) {\r\n    const dataName = eventPlaceholder.dataset.drag\r\n    return searchKey(dataName)\r\n    \r\n}\r\n\r\nfunction searchKey(dataName) {\r\n    let HTML = ''\r\n    let HTMLObjects = {\r\n        github: `<h2>This is ${dataName}!</h2>\r\n                <a href=\"https://github.com/wkila\" target=\"_blank\"><img class=\"gitImg\" src=\"img/githubNew.svg\" alt=\"\"></a>`,\r\n\r\n        nav: `  <h2>This is tab creater!</h2>\r\n                <form action=\"\">\r\n                    <div class=\"text-block\">\r\n                        <input type=\"text\" class=\"main-input\" placeholder=\"Name\" data-nav=\"title\" id=\"1\">\r\n                    </div>\r\n                    <div class=\"text-block\">\r\n                        <textarea name=\"\" placeholder=\"Title\" id=\"\" data-nav=\"text\" rows=\"5\"></textarea>\r\n                    </div>\r\n        \r\n                    <div class=\"btn-block\">\r\n                        <button class=\"submit\">Submit</button>\r\n                    </div>\r\n                </form>`,\r\n        info: `  <h2>This is ${dataName}!</h2>\r\n                <p>But now we have no ${dataName}</p>`\r\n    }\r\n    Object.keys(HTMLObjects).forEach(key => {\r\n        if (dataName === key) {\r\n            HTML = HTMLObjects[key]\r\n        }\r\n    })\r\n    return HTML\r\n}\n\n//# sourceURL=webpack://portfolio/./templates/drag.create.js?");

/***/ }),

/***/ "./templates/info.create.js":
/*!**********************************!*\
  !*** ./templates/info.create.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderInfo\": () => (/* binding */ renderInfo)\n/* harmony export */ });\n\r\nfunction renderInfo(inputs, dataname) {\r\n    let newObj = {}\r\n    if (inputs) {\r\n        newObj = {...inputs[0], ...inputs[1]}\r\n    }\r\n    \r\n    let HTMLInfo = {\r\n        nav: `\r\n            <div class=\"block-join\" style=\"box-shadow: 12px 12px 2px 1px rgb(${\r\n                (Math.random() * (257 - 10) + 10).toFixed(0)}\r\n                ${(Math.random() * (257 - 10) + 10).toFixed(0)}\r\n                ${(Math.random() * (257 - 10) + 10).toFixed(0)} / 20%)\">\r\n                <h1>${newObj.title}</h1>\r\n                <p>${newObj.text}</p>\r\n            </div>\r\n            `,\r\n        row: `<div class=\"row\" data-nav=\"row\"></div>`\r\n    }\r\n    return HTMLInfo[dataname]\r\n}\r\n\n\n//# sourceURL=webpack://portfolio/./templates/info.create.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/source.js");
/******/ 	
/******/ })()
;