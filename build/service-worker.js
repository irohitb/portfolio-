"use strict";var precacheConfig=[["/index.html","cb1f2ecb5c6a1debda68025461e75427"],["/static/css/main.74a545cf.css","a18253a28d8f9cb8830e63d16bbc2291"],["/static/js/main.787d109d.js","e933300086bc0e436ed876f31f32f49b"],["/static/media/1234.441996bd.png","441996bd27819352c4955257fb40b834"],["/static/media/MainImage.4422e7e5.jpeg","4422e7e52e1263b5237b684fa3566769"],["/static/media/car-banner.41083284.jpg","41083284999689f36f66d071ae863dd5"],["/static/media/car-wash.fd5d09a1.png","fd5d09a13335816e2d4ce7b505ccedd1"],["/static/media/cworking.c6f3bad7.jpg","c6f3bad7cbf52e27e9cbd2e1955a1f5e"],["/static/media/dPrinting1.a1b04868.jpg","a1b048685c412efa24d4cd4bcf05461f"],["/static/media/ex-car-wash.7948d227.png","7948d227f801788226af74a0dcff31bc"],["/static/media/home.b9803a1c.jpg","b9803a1c196df60376fd1596ca4bf5fa"],["/static/media/image-try.c4a6ed54.jpg","c4a6ed5494ab7428079bc658ed3d95e0"],["/static/media/interiror-car.5fce34d6.jpg","5fce34d6f13c314c24765fc07c4743ae"],["/static/media/manpower.6f0d172c.png","6f0d172c1bccbf41064fc91df3cb5dbb"],["/static/media/manpowere.ab3b3008.jpeg","ab3b300895f5fc31d5f3f756ea81b44b"],["/static/media/p-banner.b2a693fe.jpg","b2a693fea0f4b2bffb0c17356abee7d3"],["/static/media/printing.f0150b66.jpg","f0150b663a30b680bfb62c591b91731b"],["/static/media/printingn.75b008d1.jpeg","75b008d1996cc073bd5b46a3e0c965c3"],["/static/media/qatar.7b37bb2f.jpg","7b37bb2ffc8eec53ce1151b81a4b2a8c"],["/static/media/s-h.fe0b3e1a.jpg","fe0b3e1a04541d7b1f2e2fbf4a374594"],["/static/media/skilledworker.f5d8c9da.jpg","f5d8c9da8ee97c0a37aa7d900882fa35"],["/static/media/website-plumbing-repair.826eb34c.jpg","826eb34c3b977c459a9c4ba71357a843"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});