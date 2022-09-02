/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var selectors = {
  boardContainer: document.querySelector('.board-container'),
  board: document.querySelector('.board'),
  moves: document.querySelector('.moves'),
  timer: document.querySelector('.timer'),
  start: document.querySelector('button'),
  win: document.querySelector('.win')
};
var state = {
  gameStarted: false,
  flippedCards: 0,
  totalFlips: 0,
  totalTime: 0,
  loop: null
};

var shuffle = function shuffle(array) {
  var clonedArray = _toConsumableArray(array);

  for (var index = clonedArray.length - 1; index > 0; index--) {
    var randomIndex = Math.floor(Math.random() * (index + 1));
    var original = clonedArray[index];
    clonedArray[index] = clonedArray[randomIndex];
    clonedArray[randomIndex] = original;
  }

  return clonedArray;
};

var pickRandom = function pickRandom(array, items) {
  var clonedArray = _toConsumableArray(array);

  var randomPicks = [];

  for (var index = 0; index < items; index++) {
    var randomIndex = Math.floor(Math.random() * clonedArray.length);
    randomPicks.push(clonedArray[randomIndex]);
    clonedArray.splice(randomIndex, 1);
  }

  return randomPicks;
};

var generateGame = function generateGame() {
  var dimensions = selectors.board.getAttribute('data-dimension');

  if (dimensions % 2 !== 0) {
    throw new Error("The dimension of the board must be an even number.");
  }

  var emojis = ['🥔', '🍒', '🥑', '🌽', '🥕', '🍇', '🍉', '🍌', '🥭', '🍍'];
  var picks = pickRandom(emojis, dimensions * dimensions / 2);
  var items = shuffle([].concat(_toConsumableArray(picks), _toConsumableArray(picks)));
  var cards = "\n        <div class=\"board\" style=\"grid-template-columns: repeat(".concat(dimensions, ", auto)\">\n            ").concat(items.map(function (item) {
    return "\n                <div class=\"card\">\n                    <div class=\"card-front\"></div>\n                    <div class=\"card-back\">".concat(item, "</div>\n                </div>\n            ");
  }).join(''), "\n       </div>\n    ");
  var parser = new DOMParser().parseFromString(cards, 'text/html');
  selectors.board.replaceWith(parser.querySelector('.board'));
};

var startGame = function startGame() {
  state.gameStarted = true;
  selectors.start.classList.add('disabled');
  state.loop = setInterval(function () {
    state.totalTime++;
    selectors.moves.innerText = "".concat(state.totalFlips, " moves");
    selectors.timer.innerText = "time: ".concat(state.totalTime, " sec");
  }, 1000);
};

var flipBackCards = function flipBackCards() {
  document.querySelectorAll('.card:not(.matched)').forEach(function (card) {
    card.classList.remove('flipped');
  });
  state.flippedCards = 0;
};

var flipCard = function flipCard(card) {
  state.flippedCards++;
  state.totalFlips++;

  if (!state.gameStarted) {
    startGame();
  }

  if (state.flippedCards <= 2) {
    card.classList.add('flipped');
  }

  if (state.flippedCards === 2) {
    var flippedCards = document.querySelectorAll('.flipped:not(.matched)');

    if (flippedCards[0].innerText === flippedCards[1].innerText) {
      flippedCards[0].classList.add('matched');
      flippedCards[1].classList.add('matched');
    }

    setTimeout(function () {
      flipBackCards();
    }, 1000);
  } // If there are no more cards that we can flip, we won the game


  if (!document.querySelectorAll('.card:not(.flipped)').length) {
    setTimeout(function () {
      selectors.boardContainer.classList.add('flipped');
      selectors.win.innerHTML = "\n                <span class=\"win-text\">\n                    You won!<br />\n                    with <span class=\"highlight\">".concat(state.totalFlips, "</span> moves<br />\n                    under <span class=\"highlight\">").concat(state.totalTime, "</span> seconds\n                </span>\n            ");
      clearInterval(state.loop);
    }, 1000);
  }
};

var attachEventListeners = function attachEventListeners() {
  document.addEventListener('click', function (event) {
    var eventTarget = event.target;
    var eventParent = eventTarget.parentElement;

    if (eventTarget.className.includes('card') && !eventParent.className.includes('flipped')) {
      flipCard(eventParent);
    } else if (eventTarget.nodeName === 'BUTTON' && !eventTarget.className.includes('disabled')) {
      startGame();
    }
  });
};

generateGame();
attachEventListeners();

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/app": 0,
/******/ 			"dist/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmemory_game"] = self["webpackChunkmemory_game"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/app"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/app"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;