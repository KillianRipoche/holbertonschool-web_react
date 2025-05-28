/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/subjects/Cpp.ts":
/*!****************************!*\
  !*** ./js/subjects/Cpp.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "./js/subjects/Subject.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Cpp = /** @class */ (function (_super) {
    __extends(Cpp, _super);
    function Cpp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cpp.prototype.getRequirements = function () {
        return 'Here is the list of requirements for Cpp';
    };
    Cpp.prototype.getAvailableTeacher = function () {
        if (!this.teacher || !this.teacher.experienceTeachingC) {
            return 'No available teacher';
        }
        return "Available Teacher: ".concat(this.teacher.firstName);
    };
    return Cpp;
}(_Subject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cpp);


/***/ }),

/***/ "./js/subjects/Java.ts":
/*!*****************************!*\
  !*** ./js/subjects/Java.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "./js/subjects/Subject.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Java = /** @class */ (function (_super) {
    __extends(Java, _super);
    function Java() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Java.prototype.getRequirements = function () {
        return 'Here is the list of requirements for Java';
    };
    Java.prototype.getAvailableTeacher = function () {
        if (!this.teacher || !this.teacher.experienceTeachingJava) {
            return 'No available teacher';
        }
        return "Available Teacher: ".concat(this.teacher.firstName);
    };
    return Java;
}(_Subject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Java);


/***/ }),

/***/ "./js/subjects/React.ts":
/*!******************************!*\
  !*** ./js/subjects/React.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "./js/subjects/Subject.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var React = /** @class */ (function (_super) {
    __extends(React, _super);
    function React() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    React.prototype.getRequirements = function () {
        return 'Here is the list of requirements for React';
    };
    React.prototype.getAvailableTeacher = function () {
        if (!this.teacher || !this.teacher.experienceTeachingReact) {
            return 'No available teacher';
        }
        return "Available Teacher: ".concat(this.teacher.firstName);
    };
    return React;
}(_Subject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (React);


/***/ }),

/***/ "./js/subjects/Subject.ts":
/*!********************************!*\
  !*** ./js/subjects/Subject.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Subject = /** @class */ (function () {
    function Subject() {
    }
    Subject.prototype.setTeacher = function (teacher) {
        this.teacher = teacher;
    };
    return Subject;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Subject);


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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subjects_Cpp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subjects/Cpp */ "./js/subjects/Cpp.ts");
/* harmony import */ var _subjects_Java__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subjects/Java */ "./js/subjects/Java.ts");
/* harmony import */ var _subjects_React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subjects/React */ "./js/subjects/React.ts");



var cpp = new _subjects_Cpp__WEBPACK_IMPORTED_MODULE_0__["default"]();
var java = new _subjects_Java__WEBPACK_IMPORTED_MODULE_1__["default"]();
var react = new _subjects_React__WEBPACK_IMPORTED_MODULE_2__["default"]();
var teacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 5,
    experienceTeachingJava: 0,
    experienceTeachingReact: 2,
};
cpp.setTeacher(teacher);
java.setTeacher(teacher);
react.setTeacher(teacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pCLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztBQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7QUFFdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztBQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7QUFFeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztBQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL3N1YmplY3RzL0NwcC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL3N1YmplY3RzL0phdmEudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9zdWJqZWN0cy9SZWFjdC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL3N1YmplY3RzL1N1YmplY3QudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVhY2hlciB9IGZyb20gJy4vVGVhY2hlcic7XG5pbXBvcnQgU3ViamVjdCBmcm9tICcuL1N1YmplY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcHAgZXh0ZW5kcyBTdWJqZWN0IHtcbiAgZ2V0UmVxdWlyZW1lbnRzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdIZXJlIGlzIHRoZSBsaXN0IG9mIHJlcXVpcmVtZW50cyBmb3IgQ3BwJztcbiAgfVxuXG4gIGdldEF2YWlsYWJsZVRlYWNoZXIoKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMudGVhY2hlciB8fCAhdGhpcy50ZWFjaGVyLmV4cGVyaWVuY2VUZWFjaGluZ0MpIHtcbiAgICAgIHJldHVybiAnTm8gYXZhaWxhYmxlIHRlYWNoZXInO1xuICAgIH1cbiAgICByZXR1cm4gYEF2YWlsYWJsZSBUZWFjaGVyOiAke3RoaXMudGVhY2hlci5maXJzdE5hbWV9YDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVGVhY2hlciB9IGZyb20gJy4vVGVhY2hlcic7XG5pbXBvcnQgU3ViamVjdCBmcm9tICcuL1N1YmplY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKYXZhIGV4dGVuZHMgU3ViamVjdCB7XG4gIGdldFJlcXVpcmVtZW50cygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnSGVyZSBpcyB0aGUgbGlzdCBvZiByZXF1aXJlbWVudHMgZm9yIEphdmEnO1xuICB9XG5cbiAgZ2V0QXZhaWxhYmxlVGVhY2hlcigpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy50ZWFjaGVyIHx8ICF0aGlzLnRlYWNoZXIuZXhwZXJpZW5jZVRlYWNoaW5nSmF2YSkge1xuICAgICAgcmV0dXJuICdObyBhdmFpbGFibGUgdGVhY2hlcic7XG4gICAgfVxuICAgIHJldHVybiBgQXZhaWxhYmxlIFRlYWNoZXI6ICR7dGhpcy50ZWFjaGVyLmZpcnN0TmFtZX1gO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUZWFjaGVyIH0gZnJvbSAnLi9UZWFjaGVyJztcbmltcG9ydCBTdWJqZWN0IGZyb20gJy4vU3ViamVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0IGV4dGVuZHMgU3ViamVjdCB7XG4gIGdldFJlcXVpcmVtZW50cygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnSGVyZSBpcyB0aGUgbGlzdCBvZiByZXF1aXJlbWVudHMgZm9yIFJlYWN0JztcbiAgfVxuXG4gIGdldEF2YWlsYWJsZVRlYWNoZXIoKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMudGVhY2hlciB8fCAhdGhpcy50ZWFjaGVyLmV4cGVyaWVuY2VUZWFjaGluZ1JlYWN0KSB7XG4gICAgICByZXR1cm4gJ05vIGF2YWlsYWJsZSB0ZWFjaGVyJztcbiAgICB9XG4gICAgcmV0dXJuIGBBdmFpbGFibGUgVGVhY2hlcjogJHt0aGlzLnRlYWNoZXIuZmlyc3ROYW1lfWA7XG4gIH1cbn1cbiIsImltcG9ydCB7IFRlYWNoZXIgfSBmcm9tICcuL1RlYWNoZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJqZWN0IHtcbiAgcHJvdGVjdGVkIHRlYWNoZXI6IFRlYWNoZXIgfCB1bmRlZmluZWQ7XG5cbiAgc2V0VGVhY2hlcih0ZWFjaGVyOiBUZWFjaGVyKTogdm9pZCB7XG4gICAgdGhpcy50ZWFjaGVyID0gdGVhY2hlcjtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBUZWFjaGVyIH0gZnJvbSAnLi9zdWJqZWN0cy9UZWFjaGVyJztcbmltcG9ydCBDcHAgZnJvbSAnLi9zdWJqZWN0cy9DcHAnO1xuaW1wb3J0IEphdmEgZnJvbSAnLi9zdWJqZWN0cy9KYXZhJztcbmltcG9ydCBSZWFjdCBmcm9tICcuL3N1YmplY3RzL1JlYWN0JztcblxuY29uc3QgY3BwID0gbmV3IENwcCgpO1xuY29uc3QgamF2YSA9IG5ldyBKYXZhKCk7XG5jb25zdCByZWFjdCA9IG5ldyBSZWFjdCgpO1xuXG5jb25zdCB0ZWFjaGVyOiBUZWFjaGVyID0ge1xuICBmaXJzdE5hbWU6ICdKb2huJyxcbiAgbGFzdE5hbWU6ICdEb2UnLFxuICBleHBlcmllbmNlVGVhY2hpbmdDOiA1LFxuICBleHBlcmllbmNlVGVhY2hpbmdKYXZhOiAwLFxuICBleHBlcmllbmNlVGVhY2hpbmdSZWFjdDogMixcbn07XG5cbmNwcC5zZXRUZWFjaGVyKHRlYWNoZXIpO1xuamF2YS5zZXRUZWFjaGVyKHRlYWNoZXIpO1xucmVhY3Quc2V0VGVhY2hlcih0ZWFjaGVyKTtcblxuY29uc29sZS5sb2coY3BwLmdldFJlcXVpcmVtZW50cygpKTtcbmNvbnNvbGUubG9nKGNwcC5nZXRBdmFpbGFibGVUZWFjaGVyKCkpO1xuXG5jb25zb2xlLmxvZyhqYXZhLmdldFJlcXVpcmVtZW50cygpKTtcbmNvbnNvbGUubG9nKGphdmEuZ2V0QXZhaWxhYmxlVGVhY2hlcigpKTtcblxuY29uc29sZS5sb2cocmVhY3QuZ2V0UmVxdWlyZW1lbnRzKCkpO1xuY29uc29sZS5sb2cocmVhY3QuZ2V0QXZhaWxhYmxlVGVhY2hlcigpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==