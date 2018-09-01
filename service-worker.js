"use strict";var precacheConfig=[["/index.html","b1cd7dd90ce9d68892665c2653261382"],["/static/js/0.112f094a.chunk.js","f0014dfd020e7fe27b45d959b5a460cd"],["/static/js/1.b3338d54.chunk.js","5829d828e26f0414627b8f782568bcf0"],["/static/js/2.4a5509c4.chunk.js","5f7c16dfe80d4805f0b16fceaf740c35"],["/static/js/3.5f6f1f1c.chunk.js","ccde5c36d1607ac7db53f4612b11dd2f"],["/static/js/4.2f46bd75.chunk.js","51c87de97b4ed6380c5ef07a3e6eac90"],["/static/js/5.84b80874.chunk.js","26deb8c7f68d3c4efa859e6c57c14848"],["/static/js/6.012c846e.chunk.js","aebe5303b5f29bd4ca18ad7104f7d34f"],["/static/js/main.06ce65c2.js","9c3bb8199b95836eb02a12e72e075f32"],["/static/media/hongbao1.12d0dd4f.jpg","12d0dd4f30efcd8498208598c7839158"],["/static/media/hongbao2.96e73e17.png","96e73e171bc888ed39479f9e8529f026"],["/static/media/miniprogram.026608c6.jpg","026608c60e37f9835434d6db48542f23"],["/static/media/wechat.af3fe93a.png","af3fe93a3348a603398c434b76594326"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){var o=new URL(e);return r&&o.pathname.match(r)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),o=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),o]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),e=urlsToCacheKeys.has(n));var o="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(o,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function a(c,i,s){function u(n,e){if(!i[n]){if(!c[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(h)return h(n,!0);var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}var o=i[n]={exports:{}};c[n][0].call(o.exports,function(e){var t=c[n][1][e];return u(t||e)},o,o.exports,a,c,i,s)}return i[n].exports}for(var h="function"==typeof require&&require,e=0;e<s.length;e++)u(s[e]);return u}({1:[function(e,t,n){function s(e,t){((t=t||{}).debug||i.debug)&&console.log("[sw-toolbox] "+e)}function a(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||i.cache.name,caches.open(t)}function r(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var c,i=e("./options"),u=e("./idb-cache-expiration");t.exports={debug:s,fetchAndCache:function(r,o){var t=(o=o||{}).successResponses||i.successResponses;return fetch(r.clone()).then(function(e){return"GET"===r.method&&t.test(e.status)&&a(o).then(function(n){n.put(r,e).then(function(){var e,t=o.cache||i.cache;(t.maxEntries||t.maxAgeSeconds)&&t.name&&(e=function(e,n,t){var r=e.url,o=t.maxAgeSeconds,a=t.maxEntries,c=t.name,i=Date.now();return s("Updating LRU order for "+r+". Max entries is "+a+", max age is "+o),u.getDb(c).then(function(e){return u.setTimestampForUrl(e,r,i)}).then(function(e){return u.expireEntries(e,a,o,i)}).then(function(e){s("Successfully updated IDB.");var t=e.map(function(e){return n.delete(e)});return Promise.all(t).then(function(){s("Done with cache cleanup.")})}).catch(function(e){s(e)})}.bind(null,r,n,t),c=c?c.then(e):e())})}),e.clone()})},openCache:a,renameCache:function(t,e,n){return s("Renaming cache: ["+t+"] to ["+e+"]",n),caches.delete(e).then(function(){return Promise.all([caches.open(t),caches.open(e)]).then(function(e){var n=e[0],r=e[1];return n.keys().then(function(e){return Promise.all(e.map(function(t){return n.match(t).then(function(e){return r.put(t,e)})}))}).then(function(){return caches.delete(t)})})})},cache:function(t,e){return a(e).then(function(e){return e.add(t)})},uncache:function(t,e){return a(e).then(function(e){return e.delete(t)})},precache:function(e){e instanceof Promise||r(e),i.preCacheItems=i.preCacheItems.concat(e)},validatePrecacheInput:r,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var o="sw-toolbox-",a=1,u="store",h="url",f="timestamp",c={};t.exports={getDb:function(e){return e in c||(c[e]=(r=e,new Promise(function(e,t){var n=indexedDB.open(o+r,a);n.onupgradeneeded=function(){n.result.createObjectStore(u,{keyPath:h}).createIndex(f,f,{unique:!1})},n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}}))),c[e];var r},setTimestampForUrl:function(r,o,a){return new Promise(function(e,t){var n=r.transaction(u,"readwrite");n.objectStore(u).put({url:o,timestamp:a}),n.oncomplete=function(){e(r)},n.onabort=function(){t(n.error)}})},expireEntries:function(e,n,t,r){return(c=e,i=t,s=r,i?new Promise(function(e,t){var r=1e3*i,o=[],n=c.transaction(u,"readwrite"),a=n.objectStore(u);a.index(f).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&s-r>t.value[f]){var n=t.value[h];o.push(n),a.delete(n),t.continue()}},n.oncomplete=function(){e(o)},n.onabort=t}):Promise.resolve([])).then(function(t){return(r=e,s=n,s?new Promise(function(e,t){var o=[],n=r.transaction(u,"readwrite"),a=n.objectStore(u),c=a.index(f),i=c.count();c.count().onsuccess=function(){var r=i.result;s<r&&(c.openCursor().onsuccess=function(e){var t=e.target.result;if(t){var n=t.value[h];o.push(n),a.delete(n),r-o.length>s&&t.continue()}})},n.oncomplete=function(){e(o)},n.onabort=t}):Promise.resolve([])).then(function(e){return t.concat(e)});var r,s});var c,i,s}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var o=e("./helpers"),a=e("./router"),c=e("./options");t.exports={fetchListener:function(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))},activateListener:function(e){o.debug("activate event fired");var t=c.cache.name+"$$$inactive$$$";e.waitUntil(o.renameCache(t,c.cache.name))},installListener:function(e){var t=c.cache.name+"$$$inactive$$$";o.debug("install event fired"),o.debug("creating cache ["+t+"]"),e.waitUntil(o.openCache({cache:{name:t}}).then(function(t){return Promise.all(c.preCacheItems).then(r).then(o.validatePrecacheInput).then(function(e){return o.debug("preCache list: "+(e.join(", ")||"(none)")),t.addAll(e)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var o=new URL("./",self.location).pathname,a=e("path-to-regexp"),r=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=a(t,this.keys)),this.method=e,this.options=r,this.handler=n};r.prototype.makeHandler=function(e){var n;if(this.regexp){var r=this.regexp.exec(e);n={},this.keys.forEach(function(e,t){n[e.name]=r[t+1]})}return function(e){return this.handler(e,n,this.options)}.bind(this)},t.exports=r},{"path-to-regexp":15}],6:[function(e,t,n){var u=e("./route"),h=e("./helpers"),i=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){new RegExp(r.value[0]).test(t)&&o.push(r.value[1]),r=n.next()}return o},o=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(r){o.prototype[r]=function(e,t,n){return this.add(r,e,t,n)}}),o.prototype.add=function(e,t,n,r){var o;r=r||{},t instanceof RegExp?o=RegExp:o=(o=r.origin||self.location.origin)instanceof RegExp?o.source:o.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),e=e.toLowerCase();var a=new u(e,t,n,r);this.routes.has(o)||this.routes.set(o,new Map);var c=this.routes.get(o);c.has(e)||c.set(e,new Map);var i=c.get(e),s=a.regexp||a.fullUrlRegExp;i.has(s.source)&&h.debug('"'+t+'" resolves to same regex as existing route.'),i.set(s.source,a)},o.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,i(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},o.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],a=o&&o.get(e.toLowerCase());if(a){var c=i(a,n);if(0<c.length)return c[0].makeHandler(n)}}return null},o.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new o},{"./helpers":1,"./route":5}],7:[function(e,t,n){var a=e("../options"),c=e("../helpers");t.exports=function(r,e,o){return o=o||{},c.debug("Strategy: cache first ["+r.url+"]",o),c.openCache(o).then(function(e){return e.match(r).then(function(e){var t=o.cache||a.cache,n=Date.now();return c.isResponseFresh(e,t.maxAgeSeconds,n)?e:c.fetchAndCache(r,o)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var o=e("../options"),a=e("../helpers");t.exports=function(t,e,r){return r=r||{},a.debug("Strategy: cache only ["+t.url+"]",r),a.openCache(r).then(function(e){return e.match(t).then(function(e){var t=r.cache||o.cache,n=Date.now();if(a.isResponseFresh(e,t.maxAgeSeconds,n))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var u=e("../helpers"),h=e("./cacheOnly");t.exports=function(c,i,s){return u.debug("Strategy: fastest ["+c.url+"]",s),new Promise(function(t,n){var r=!1,o=[],a=function(e){o.push(e.toString()),r?n(new Error('Both cache and network failed: "'+o.join('", "')+'"')):r=!0},e=function(e){e instanceof Response?t(e):a("No result returned")};u.fetchAndCache(c.clone(),s).then(e,a),h(c,i,s).then(e,a)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var h=e("../options"),f=e("../helpers");t.exports=function(c,e,i){var s=(i=i||{}).successResponses||h.successResponses,u=i.networkTimeoutSeconds||h.networkTimeoutSeconds;return f.debug("Strategy: network first ["+c.url+"]",i),f.openCache(i).then(function(e){var t,n,r=[];if(u){var o=new Promise(function(o){t=setTimeout(function(){e.match(c).then(function(e){var t=i.cache||h.cache,n=Date.now(),r=t.maxAgeSeconds;f.isResponseFresh(e,r,n)&&o(e)})},1e3*u)});r.push(o)}var a=f.fetchAndCache(c,i).then(function(e){if(t&&clearTimeout(t),s.test(e.status))return e;throw f.debug("Response was an HTTP error: "+e.statusText,i),n=e,new Error("Bad response")}).catch(function(t){return f.debug("Network or response error, fallback to cache ["+c.url+"]",i),e.match(c).then(function(e){if(e)return e;if(n)return n;throw t})});return r.push(a),Promise.race(r)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),o=e("./router"),a=e("./helpers"),c=e("./strategies"),i=e("./listeners");a.debug("Service Worker Toolbox is loading"),self.addEventListener("install",i.installListener),self.addEventListener("activate",i.activateListener),self.addEventListener("fetch",i.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:a.cache,uncache:a.uncache,precache:a.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function a(e,t){for(var n,r=[],o=0,a=0,c="",i=t&&t.delimiter||"/";null!=(n=C.exec(e));){var s=n[0],u=n[1],h=n.index;if(c+=e.slice(a,h),a=h+s.length,u)c+=u[1];else{var f=e[a],l=n[2],p=n[3],d=n[4],m=n[5],g=n[6],v=n[7];c&&(r.push(c),c="");var w=null!=l&&null!=f&&f!==l,x="+"===g||"*"===g,y="?"===g||"*"===g,b=n[2]||i,R=d||m;r.push({name:p||o++,prefix:l||"",delimiter:b,optional:y,repeat:x,partial:w,asterisk:!!v,pattern:R?(E=R,E.replace(/([=!:$\/()])/g,"\\$1")):v?".*":"[^"+k(b)+"]+?"})}}var E;return a<e.length&&(c+=e.substr(a)),c&&r.push(c),r}function l(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function r(h){for(var f=new Array(h.length),e=0;e<h.length;e++)"object"==typeof h[e]&&(f[e]=new RegExp("^(?:"+h[e].pattern+")$"));return function(e,t){for(var n="",r=e||{},o=(t||{}).pretty?l:encodeURIComponent,a=0;a<h.length;a++){var c=h[a];if("string"!=typeof c){var i,s=r[c.name];if(null==s){if(c.optional){c.partial&&(n+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(m(s)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(s)+"`");if(0===s.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var u=0;u<s.length;u++){if(i=o(s[u]),!f[a].test(i))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(i)+"`");n+=(0===u?c.prefix:c.delimiter)+i}}else{if(i=c.asterisk?encodeURI(s).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):o(s),!f[a].test(i))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+i+'"');n+=c.prefix+i}}else n+=c}return n}}function k(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function p(e,t){return e.keys=t,e}function d(e){return e.sensitive?"":"i"}function c(e,t,n){m(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,a="",c=0;c<e.length;c++){var i=e[c];if("string"==typeof i)a+=k(i);else{var s=k(i.prefix),u="(?:"+i.pattern+")";t.push(i),i.repeat&&(u+="(?:"+s+u+")*"),a+=u=i.optional?i.partial?s+"("+u+")?":"(?:"+s+"("+u+"))?":s+"("+u+")"}}var h=k(n.delimiter||"/"),f=a.slice(-h.length)===h;return r||(a=(f?a.slice(0,-h.length):a)+"(?:"+h+"(?=$))?"),a+=o?"$":r&&f?"":"(?="+h+"|$)",p(new RegExp("^"+a,d(n)),t)}function i(e,t,n){return m(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return p(e,t)}(e,t):m(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(i(e[o],t,n).source);return p(new RegExp("(?:"+r.join("|")+")",d(n)),t)}(e,t,n):(r=t,c(a(e,o=n),r,o));var r,o}var m=e("isarray");t.exports=i,t.exports.parse=a,t.exports.compile=function(e,t){return r(a(e,t))},t.exports.tokensToFunction=r,t.exports.tokensToRegExp=c;var C=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&46<=r||"Chrome"===n&&50<=r)||(Cache.prototype.addAll=function(n){function r(e){this.name="NetworkError",this.code=19,this.message=e}var o=this;return r.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return n=n.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(n.map(function(e){"string"==typeof e&&(e=new Request(e));var t=new URL(e.url).protocol;if("http:"!==t&&"https:"!==t)throw new r("Invalid scheme");return fetch(e.clone())}))}).then(function(e){if(e.some(function(e){return!e.ok}))throw new r("Incorrect response status");return Promise.all(e.map(function(e,t){return o.put(n[t],e)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get(/cdn|thirdqq\.qlogo\.cn|githubusercontent/,toolbox.cacheFirst,{});