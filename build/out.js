!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.r(t);var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.$calculatorDOMElement=document.querySelector(t),this.firstNumberArray=[],this.secondNumberArray=[],this.resultNumberArray=[0,0,0,0,0,0,0,0,0],this.initEvents()}var t,r,o;return t=e,(r=[{key:"add",value:function(e,t){return console.error("Powinieneśzaimplementować tę metodę w klasie dziedziczącej."),[0,0,0,0,0,0,0,0]}},{key:"changeNumber",value:function(e){console.error("Powinieneś zaimplementować tę metodę w klasie dziedziczącej. ")}},{key:"updateResult",value:function(){var e=this.$calculatorDOMElement.querySelectorAll(".result-bit span");this.resultNumberArray.reverse().forEach((function(t,r){e[r].innerText=t}))}},{key:"checkNumber",value:function(){for(var e=this.$calculatorDOMElement,t=e.querySelectorAll(".group-number label:first-child"),r=e.querySelectorAll(".group-number label:nth-child(2)"),n=e.querySelectorAll(".group-number .result-bit"),o=t.length-1,i=0;o>=0;o--,i++)this.firstNumberArray[o]=parseInt(t[i].firstElementChild.innerText),this.secondNumberArray[o]=parseInt(r[i].firstElementChild.innerText),this.resultNumberArray[o]=parseInt(n[i].firstElementChild.innerText);this.resultNumberArray=this.add(this.firstNumberArray,this.secondNumberArray)}},{key:"initEvents",value:function(){var e=this;this.$calculatorDOMElement.addEventListener("click",(function(t){if(t.target.parentElement.classList.contains("display-number")){var r=t.target.parentElement;e.changeNumber(r)}}))}}])&&n(t.prototype,r),o&&n(t,o),e}();function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}function f(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(i,e);var t,r,n,o=a(i);function i(){return u(this,i),o.apply(this,arguments)}return t=i,(r=[{key:"add",value:function(e,t){for(var r=[0,0,0,0,0,0,0,0,0],n=e.length-1;n>=0;n--){var o=e[n]+t[n]+r[n];2===o?(r[n]=0,r[n-1]=1):3===o?(r[n]=1,r[n-1]=1):r[n]=o}return r}},{key:"changeNumber",value:function(e){var t=e.firstElementChild;t.innerText=0==+t.innerText?1:0,this.checkNumber(),this.updateResult()}}])&&c(t.prototype,r),n&&c(t,n),i}(o);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t,r){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=w(e);if(t){var o=w(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return O(this,r)}}function O(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(i,e);var t,r,n,o=E(i);function i(){return h(this,i),o.apply(this,arguments)}return t=i,(r=[{key:"changeNumber",value:function(e){e.firstElementChild.setAttribute("contenteditable","true"),e.firstElementChild.classList.add("active"),e.firstElementChild.focus()}},{key:"add",value:function(e,t){for(var r=[0,0,0,0,0,0,0,0,0],n=e.length-1;n>=0;n--){var o=e[n]+t[n]+r[n];o>9?(r[n]=o-10,r[n-1]=1):r[n]=o}return r}},{key:"initEvents",value:function(){var e=this;v(w(i.prototype),"initEvents",this).call(this);var t=this.$calculatorDOMElement.querySelectorAll(".display-number"),r=this.$calculatorDOMElement.querySelector(".popover");r.lastElementChild.innerText="Naciśnij aby dodać wartości",b(t).forEach((function(e){e.addEventListener("click",(function(){r.classList.add("show")}))})),b(t).forEach((function(e){e.addEventListener("keyup",(function(e){e.target.innerText.length>1&&(e.target.innerText=e.target.innerText.substr(0,1))}))})),b(t).forEach((function(e){e.addEventListener("focusout",(function(e){[0,1,2,3,4,5,6,7,8,9].includes(+e.target.innerText)?(r.lastElementChild.innerText="Naciśnij aby dodać wartości",r.style.backgroundColor="",e.target.style.color="",r.previousElementSibling.style.visibility=""):(r.lastElementChild.innerText="Wartości muszą być cyframi (0-9)",r.style.backgroundColor="#ffe6e6",e.target.style.color="#450000",e.target.focus(),r.previousElementSibling.style.visibility="hidden")}))})),this.$calculatorDOMElement.querySelector(".operator-bar span").addEventListener("click",(function(){e.checkNumber(),e.updateResult()}))}}])&&m(t.prototype,r),n&&m(t,n),i}(o);document.addEventListener("DOMContentLoaded",(function(){new y(".binary-calculator"),new j(".dec-calculator")}))}]);