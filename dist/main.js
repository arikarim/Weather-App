(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"\n.rainy {\n  line-height: normal;\n  overflow-x: hidden;\n\n  /* background-image: url(./img/rainy.jpg); */\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-height: 100vh;\n  background-position: center;\n}\n\n#input {\n  opacity: 0.4;\n  border-radius: 25px;\n}\n\nform > label {\n  font-weight: 800;\n}\n\n#submit {\n  opacity: 0.4;\n  border-radius: 25px;\n}\n\n.temp-div {\n  position: absolute;\n  top: 150px;\n}\n\n.temp-number {\n  font-size: 15rem;\n  font-weight: 900;\n  font-family: 'Nunito', sans-serif;\n}\n\n.div2 {\n  margin-top: 69px;\n  margin-left: 50px;\n}\n\n.change-temp {\n  opacity: 0.4;\n  border-radius: 25px;\n}\n",""]);const o=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:(e,t,n)=>{var r,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function a(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],i=0;i<e.length;i++){var c=e[i],s=t.base?c[0]+t.base:c[0],d=n[s]||0,l="".concat(s," ").concat(d);n[s]=d+1;var u=a(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:l,updater:h(p,t),references:1}),r.push(l)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,m=0;function h(e,t){var n,r,i;if(t.singleton){var o=m++;n=f||(f=s(t)),r=u.bind(null,n,o,!1),i=u.bind(null,n,o,!0)}else n=s(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=a(n[r]);o[i].references--}for(var s=c(e,t),d=0;d<n.length;d++){var l=a(n[d]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}n=s}}}},641:(e,t,n)=>{e.exports=n.p+"f6ec5377e71e0c071ebb.jpg"},848:(e,t,n)=>{e.exports=n.p+"e5684e36b5f5fd62921a.jpg"},313:(e,t,n)=>{e.exports=n.p+"b95f1adf9db05d3f0ad6.jpg"},711:(e,t,n)=>{e.exports=n.p+"3857b3f827a10c0e8e62.jpg"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{const e=document.getElementById("content");function t(e){for(;e.firstChild;)e.removeChild(e.firstChild)}var r=n(379),i=n.n(r),o=n(426);i()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var a=n(848),c=n(313),s=n(641),d=n(711);const l=document.getElementById("input"),u=document.getElementById("submit"),p=document.getElementById("content"),f=document.getElementById("body");(new Image).src=a,f.style.backgroundImage=`url(${a})`,u.addEventListener("click",(n=>{n.preventDefault();const r=l.value;l.value="",async function(n){try{const e=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=59fc7f51da5e46f88ae184111212904&q=${n}`,{mode:"cors"});!function(e){t(p);const n=document.createElement("h4");n.classList.add("text-light"),n.textContent=e.condition,p.appendChild(n),e.condition.includes("Clear")||e.condition.includes("Sunny")?f.style.backgroundImage=`url(${d})`:e.condition.includes("rain")?f.style.backgroundImage=`url(${a})`:e.condition.includes("snow")?f.style.backgroundImage=`url(${c})`:e.condition.includes("cloudy")&&(f.style.backgroundImage=`url(${s})`);const r=document.createElement("h1");r.classList.add("text-light"),r.textContent=e.location,p.appendChild(r);const i=document.createElement("div");i.classList.add("d-md-flex"),i.classList.add("temp-div");const o=document.createElement("span");o.classList.add("text-light"),o.classList.add("temp-number"),o.textContent=e.currentTemp.c,i.appendChild(o);const l=document.createElement("div");l.classList.add("div2"),l.innerHTML=`\n  <div class='d-flex'>\n    <p id='feels-like' class="my-3 text-light">FEELS LIKE: ${e.feelsLike.c} C</p>\n    <button id='change-temp' class="my-3 change-temp">Change</button>\n  </div>\n  <p class="my-3 text-light">WIND: ${e.wind} MPH</p>\n  <p class="my-3 text-light">HMIDITY: ${e.humidity}%</p>\n  `,i.appendChild(l),p.appendChild(i);const u=document.getElementById("feels-like");document.getElementById("change-temp").addEventListener("click",(t=>{t.preventDefault(),o.textContent==e.currentTemp.c?(o.textContent=e.currentTemp.f,u.innerHTML=`FEELS LIKE: ${e.feelsLike.f} F`):(u.innerHTML=`FEELS LIKE: ${e.feelsLike.c} C`,o.textContent=e.currentTemp.c)}))}({condition:(r=await e.json()).current.condition.text,feelsLike:{f:Math.round(r.current.feelslike_f),c:Math.round(r.current.feelslike_c)},currentTemp:{f:Math.round(r.current.temp_f),c:Math.round(r.current.temp_c)},wind:Math.round(r.current.wind_mph),humidity:r.current.humidity,location:r.location.name.toUpperCase()})}catch{!function(){t(e);const n=document.createElement("div");n.classList.add("text-light"),n.classList.add("fs-4"),n.textContent="Sorry we could not find your city",e.appendChild(n)}()}var r}(r)}))})()})();