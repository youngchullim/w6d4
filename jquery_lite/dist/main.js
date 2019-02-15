/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(array) {\n    this.array = array; \n  }\n\n  append(content) { \n    for (let i = 0; i < content.length || i < this.array.length; i++) { \n      this.array[i].innerHTML = content[i].outerHTML; \n    } \n  } \n\n  empty() {\n    this.array.forEach( el => {\n      el.html = \"\";\n    })\n  };\n\n  attr(name, value) {\n    // determine when this is a getter and when this is a setter \n    // when value is present then it will be a setter \n    // add the attribute to an element and set it to the value \n    if (value) { \n      this.array[0].setAttribute(name, value); \n    } else {\n      this.array[0].getAttribute(name); \n    }\n  };\n  \n  addClass(className) {\n    for (let i = 0; i < this.array.length; i++) {\n      // iterate through className if mutli args\n      let currentAttrValues = this.array[i].getAttribute('class'); \n      currentAttrValues += ` ${className}`;\n      console.log(this.array[i]);\n      this.array[i].setAttribute('class', currentAttrValues);\n    }\n  };\n  \n  removeClass(className) { \n    // if 1 className is provided, remove only that name\n    // if no className, remove all classes \n    // get classes first and split and the join after removing said class \n    for (let i = 0; i < this.array.length; i++) { \n      let currentAttrValues = this.array[i].getAttribute('class').split(' '); \n\n      if (currentAttrValues.includes(className)) { \n        // we can use .filter() \n        let newAttrValues = currentAttrValues.filter(el => el !== className); \n        this.array[i].setAttribute('class', newAttrValues); \n      } else {\n        this.array[i].setAttribute('class', ''); \n      }\n    } \n  }; \n  \n  find() {};\n\n  parent() {\n    let adults = [];\n    for (let i = 0; i < this.array.length; i++) {\n      let current = this.array[i].parentNode; \n      if (!adults.includes(current)) { adults.push(current); } \n    } \n    let result = new DOMNodeCollection(adults); \n    return result; \n  };\n  \n  children() { \n    let kids = [];\n    for (let i = 0; i < this.array.length; i++) {\n      let current = Array.from(this.array[i].children);\n      kids = kids.concat(current); \n    } \n    let result = new DOMNodeCollection(kids); \n    return result;\n  };\n  \n  remote() {};\n\n  html(content) {\n    let firstHTML = this.array[0].innerHTML;\n    if (!content) return firstHTML;\n\n    // if array is undefined. check logic\n    for (let i = 0; i < this.array.length; i++) {\n      this.array[i].innerHTML = content;\n    }\n  };\n};\n\nmodule.exports = DOMNodeCollection; \n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\"); \n\nfunction $l(selector) {\n  let selected;\n  if (selector instanceof HTMLElement) {\n    selected = [selector]; \n    // let selected = Array.from(selector); \n  } else if (selector instanceof HTMLCollection) {\n    selected = Array.from(selector); \n  } else {\n    const nodeList = document.querySelectorAll(selector);\n    selected = Array.from(nodeList);\n  }\n  return new DOMNodeCollection(selected); \n};\n\nwindow.$l = $l;\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });