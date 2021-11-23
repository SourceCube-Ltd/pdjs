var PagerDuty;(()=>{var e={818:(e,t)=>{"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n="undefined"!=typeof window&&void 0!==window.document,o="undefined"!=typeof process&&null!=process.versions&&null!=process.versions.node,i="object"===("undefined"==typeof self?"undefined":r(self))&&self.constructor&&"DedicatedWorkerGlobalScope"===self.constructor.name,s="undefined"!=typeof window&&"nodejs"===window.name||"undefined"!=typeof navigator&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),a="undefined"!=typeof Deno&&void 0!==Deno.core;t.jU=n,t.n2=i,t.UG=o,t.f7=s,t.co=a},98:function(e,t){var r="undefined"!=typeof self?self:this,n=function(){function e(){this.fetch=!1,this.DOMException=r.DOMException}return e.prototype=r,new e}();!function(e){!function(t){var r="URLSearchParams"in e,n="Symbol"in e&&"iterator"in Symbol,o="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),i="FormData"in e,s="ArrayBuffer"in e;if(s)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=ArrayBuffer.isView||function(e){return e&&a.indexOf(Object.prototype.toString.call(e))>-1};function c(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function f(e){return"string"!=typeof e&&(e=String(e)),e}function p(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return n&&(t[Symbol.iterator]=function(){return t}),t}function l(e){this.map={},e instanceof l?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function y(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function d(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function h(e){var t=new FileReader,r=d(t);return t.readAsArrayBuffer(e),r}function b(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function v(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:o&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:i&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():s&&o&&(t=e)&&DataView.prototype.isPrototypeOf(t)?(this._bodyArrayBuffer=b(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(e)||u(e))?this._bodyArrayBuffer=b(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var e=y(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?y(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var e,t,r,n=y(this);if(n)return n;if(this._bodyBlob)return e=this._bodyBlob,r=d(t=new FileReader),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(O)}),this.json=function(){return this.text().then(JSON.parse)},this}l.prototype.append=function(e,t){e=c(e),t=f(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},l.prototype.delete=function(e){delete this.map[c(e)]},l.prototype.get=function(e){return e=c(e),this.has(e)?this.map[e]:null},l.prototype.has=function(e){return this.map.hasOwnProperty(c(e))},l.prototype.set=function(e,t){this.map[c(e)]=f(t)},l.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},l.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),p(e)},l.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),p(e)},l.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),p(e)},n&&(l.prototype[Symbol.iterator]=l.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function g(e,t){var r,n,o=(t=t||{}).body;if(e instanceof g){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new l(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new l(t.headers)),this.method=(n=(r=t.method||this.method||"GET").toUpperCase(),m.indexOf(n)>-1?n:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function O(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}})),t}function w(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new l(t.headers),this.url=t.url||"",this._initBody(e)}g.prototype.clone=function(){return new g(this,{body:this._bodyInit})},v.call(g.prototype),v.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},w.error=function(){var e=new w(null,{status:0,statusText:""});return e.type="error",e};var j=[301,302,303,307,308];w.redirect=function(e,t){if(-1===j.indexOf(t))throw new RangeError("Invalid status code");return new w(null,{status:t,headers:{location:e}})},t.DOMException=e.DOMException;try{new t.DOMException}catch(e){t.DOMException=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function P(e,r){return new Promise((function(n,i){var s=new g(e,r);if(s.signal&&s.signal.aborted)return i(new t.DOMException("Aborted","AbortError"));var a=new XMLHttpRequest;function u(){a.abort()}a.onload=function(){var e,t,r={status:a.status,statusText:a.statusText,headers:(e=a.getAllResponseHeaders()||"",t=new l,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}})),t)};r.url="responseURL"in a?a.responseURL:r.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;n(new w(o,r))},a.onerror=function(){i(new TypeError("Network request failed"))},a.ontimeout=function(){i(new TypeError("Network request failed"))},a.onabort=function(){i(new t.DOMException("Aborted","AbortError"))},a.open(s.method,s.url,!0),"include"===s.credentials?a.withCredentials=!0:"omit"===s.credentials&&(a.withCredentials=!1),"responseType"in a&&o&&(a.responseType="blob"),s.headers.forEach((function(e,t){a.setRequestHeader(t,e)})),s.signal&&(s.signal.addEventListener("abort",u),a.onreadystatechange=function(){4===a.readyState&&s.signal.removeEventListener("abort",u)}),a.send(void 0===s._bodyInit?null:s._bodyInit)}))}P.polyfill=!0,e.fetch||(e.fetch=P,e.Headers=l,e.Request=g,e.Response=w),t.Headers=l,t.Request=g,t.Response=w,t.fetch=P,Object.defineProperty(t,"__esModule",{value:!0})}({})}(n),n.fetch.ponyfill=!0,delete n.fetch.polyfill;var o=n;(t=o.fetch).default=o.fetch,t.fetch=o.fetch,t.Headers=o.Headers,t.Request=o.Request,t.Response=o.Response,e.exports=t}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n),r.d(n,{acknowledge:()=>B,api:()=>P,change:()=>k,event:()=>_,resolve:()=>R,trigger:()=>U});var e=r(98),t=r.n(e),o=r(818);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u="2.0.0";function c(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r,o=n.queryParameters,i=n.requestTimeout,a=void 0===i?3e4:i;return t=y(t=new URL(t.toString()),o),r=d(r,a),f(t.toString(),3,s(s({},r),{},{headers:new e.Headers(s(s({"Content-Type":"application/json; charset=utf-8"},l()),r.headers))}))}function f(e,r,n){return new Promise((function(o,i){t()(e,n).then((function(t){if(0===r)return o(t);if(429===t.status){var s=n.retryTimeout;p(void 0===s?2e4:s).then((function(){f(e,r-1,n).then(o).catch(i)}))}else clearTimeout(n.requestTimer),o(t)})).catch(i)}))}var p=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function l(){return o.UG?{"User-Agent":"pdjs/".concat(u," (").concat(process.version,"/").concat(process.platform,")")}:o.n2?{"User-Agent":"pdjs/".concat(u," (WebWorker)")}:o.f7?{"User-Agent":"pdjs/".concat(u," (JsDom)")}:o.co?{"User-Agent":"pdjs/".concat(u," (Deno)")}:o.jU?{"User-Agent":"pdjs/".concat(u," (").concat(window.navigator.userAgent,")")}:{}}function y(e,t){if(!t)return e;for(var r=e.searchParams,n=function(){var e=i[o],n=t[e];Array.isArray(n)?n.forEach((function(t){r.append(e,t)})):r.append(e,n)},o=0,i=Object.keys(t);o<i.length;o++)n();return e.search=r.toString(),e}function d(e,t){if(!t)return e;var r=setTimeout((function(){}),t);return s(s({},e),{},{requestTimer:r})}var h=["endpoint","server","token","tokenType","url","version","data"];function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(){v=function(e,t){return new r(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function r(e,n,o){var i=new RegExp(e,n);return t.set(i,o||t.get(e)),g(i,r.prototype)}function n(e,r){var n=t.get(r);return Object.keys(n).reduce((function(t,r){return t[r]=e[n[r]],t}),Object.create(null))}return m(r,RegExp),r.prototype.exec=function(t){var r=e.exec.call(this,t);return r&&(r.groups=n(r,this)),r},r.prototype[Symbol.replace]=function(r,o){if("string"==typeof o){var i=t.get(this);return e[Symbol.replace].call(this,r,o.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+i[t]})))}if("function"==typeof o){var s=this;return e[Symbol.replace].call(this,r,(function(){var e=arguments;return"object"!==b(e[e.length-1])&&(e=[].slice.call(e)).push(n(e,s)),o.apply(this,e)}))}return e[Symbol.replace].call(this,r,o)},v.apply(this,arguments)}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e){if(!e.endpoint&&!e.url)return function(e){var t=e,r=function(e){return P(w(w({},t),e))},n=function(e){return function(r,n){return P(w(w({endpoint:r,method:e},t),n))}};return r.get=n("get"),r.post=n("post"),r.put=n("put"),r.patch=n("patch"),r.delete=n("delete"),r.all=function(e,r){function n(e){var t=e[e.length-1];return t.next?t.next().then((function(t){return n(e.concat([t]))})):Promise.resolve(e)}return P(w(w({endpoint:e,method:"get"},t),r)).then((function(e){return n([e])})).then((function(e){return function(e){var t=e.shift();return t.data=[t.data],e.forEach((function(e){t.data=t.data.concat(e.data),t.resource=t.resource.concat(e.resource)})),Promise.resolve(t)}(e)}))},r}(e);var t,r,n,o=e.endpoint,i=e.server,s=void 0===i?"api.pagerduty.com":i,a=e.token,u=e.tokenType,c=void 0===u?e.tokenType||"token":u,f=e.url,p=e.version,l=void 0===p?2:p,y=e.data,d=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,h),b=w(w({method:"GET"},d),{},{headers:w({Accept:"application/vnd.pagerduty+json;version=".concat(l),Authorization:"".concat({bearer:"Bearer ",token:"Token token="}[c]).concat(a)},d.headers)});return r=b.method,!["PUT","POST","DELETE","PATCH"].includes(null!==(n=r.toUpperCase())&&void 0!==n?n:"GET")&&y?b.queryParameters=null!==(t=b.queryParameters)&&void 0!==t?t:y:b.body=JSON.stringify(y),E(null!=f?f:"https://".concat(s,"/").concat(o.replace(/^\/+/,"")),b)}function E(e,t){return c(e,t).then((function(r){var n=r;return n.response=r,204===r.status?Promise.resolve(n):r.json().then((function(r){var o=function(e,t){var r=e.match(v(/.+.com\/([0-9A-Z_a-z]+)/,{resource:1}));if(r){var n=r[1];return t&&"get"===t.toLowerCase()?n:n.endsWith("ies")?n.slice(0,-3)+"y":n.endsWith("s")?n.slice(0,-1):n}return null}(e,t.method);return n.next=function(e,t,r){if(function(e){return void 0!==e.offset}(r)){if(null!=r&&r.more&&void 0!==b(r.offset)&&r.limit)return function(){return E(e,w(w({},t),{},{queryParameters:w(w({},t.queryParameters),{},{limit:r.limit.toString(),offset:(r.limit+r.offset).toString()})}))}}else if(function(e){return void 0!==e.cursor}(r)&&null!=r&&r.cursor)return function(){return E(e,w(w({},t),{},{queryParameters:w(w({},t.queryParameters),{},{cursor:r.cursor,limit:r.limit.toString()})}))}}(e,t,r),n.data=r,n.resource=o?r[o]:null,n})).catch((function(){return Promise.reject(n)}))}))}var S=["server","type","data"];function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){A(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e){var t=e.server,r=void 0===t?"events.pagerduty.com":t,n=e.type,o=void 0===n?"event":n,i=e.data,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,S),a="https://".concat(r,"/v2/enqueue");return"change"===o&&(a="https://".concat(r,"/v2/change/enqueue")),function(e,t){return c(e,t).then((function(e){var t=e;return e.json().then((function(r){return t.data=r,t.response=e,t}))}))}(a,T({method:"POST",body:JSON.stringify(i)},s))}var D=function(e){return function(t){return _(T(T({},t),{},{data:T(T({},t.data),{},A({},"event_action",e))}))}},U=D("trigger"),B=D("acknowledge"),R=D("resolve"),k=function(e){return _(T(T({},e),{},{type:"change"}))}})(),PagerDuty=n})();
//# sourceMappingURL=pdjs-legacy.js.map