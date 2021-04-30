(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(645),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,"\n.rainy {\n  line-height: normal;\n\n  /* background-image: url(./img/rainy.jpg); */\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-height: 100vh;\n  background-position: center;\n}\n\n#input {\n  opacity: 0.4;\n  border-radius: 25px;\n}\n\nform > label {\n  font-weight: 800;\n}\n\n#submit {\n  opacity: 0.4;\n  border-radius: 25px;\n}\n\n.temp-div {\n  position: absolute;\n  top: 150px;\n}\n\n.temp-number {\n  font-size: 15rem;\n  font-weight: 900;\n  font-family: 'Nunito', sans-serif;\n}\n\n.div2 {\n  margin-top: 69px;\n  margin-left: 50px;\n}\n",""]);const o=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&i[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:(e,n,t)=>{var r,i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function a(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],i=0;i<e.length;i++){var c=e[i],s=n.base?c[0]+n.base:c[0],d=t[s]||0,l="".concat(s," ").concat(d);t[s]=d+1;var u=a(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:l,updater:h(p,n),references:1}),r.push(l)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var d,l=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function u(e,n,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,i);else{var o=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function p(e,n,t){var r=t.css,i=t.media,o=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,m=0;function h(e,n){var t,r,i;if(n.singleton){var o=m++;t=f||(f=s(n)),r=u.bind(null,t,o,!1),i=u.bind(null,t,o,!0)}else t=s(n),r=p.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var i=a(t[r]);o[i].references--}for(var s=c(e,n),d=0;d<t.length;d++){var l=a(t[d]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}t=s}}}},641:(e,n,t)=>{e.exports=t.p+"f6ec5377e71e0c071ebb.jpg"},848:(e,n,t)=>{e.exports=t.p+"e5684e36b5f5fd62921a.jpg"},313:(e,n,t)=>{e.exports=t.p+"b95f1adf9db05d3f0ad6.jpg"},711:(e,n,t)=>{e.exports=t.p+"3857b3f827a10c0e8e62.jpg"}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),r=t(426);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var i=t(848),o=t(313),a=t(641),c=t(711);const s=document.getElementById("input"),d=document.getElementById("submit"),l=document.getElementById("content"),u=document.getElementById("body");(new Image).src=i,u.style.backgroundImage=`url(${i})`,d.addEventListener("click",(e=>{e.preventDefault();const n=s.value;s.value="",async function(e){const n=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=59fc7f51da5e46f88ae184111212904&q=${e}`,{mode:"cors"});var t;!function(e){!function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(l);const n=document.createElement("h4");n.classList.add("text-light"),n.textContent=e.condition,l.appendChild(n),e.condition.includes("Clear")||e.condition.includes("Sunny")?u.style.backgroundImage=`url(${c})`:e.condition.includes("rain")?u.style.backgroundImage=`url(${i})`:e.condition.includes("snow")?u.style.backgroundImage=`url(${o})`:e.condition.includes("cloudy")&&(u.style.backgroundImage=`url(${a})`);const t=document.createElement("h1");t.classList.add("text-light"),t.textContent=e.location,l.appendChild(t);const r=document.createElement("div");r.classList.add("d-flex"),r.classList.add("temp-div");const s=document.createElement("span");s.classList.add("text-light"),s.classList.add("temp-number"),s.textContent=e.currentTemp.c,r.appendChild(s);const d=document.createElement("div");d.classList.add("div2"),d.innerHTML=`\n  <p class="my-3 text-light">FEELS LIKE: ${e.feelsLike.c}</p>\n  <p class="my-3 text-light">WIND: ${e.wind} MPH</p>\n  <p class="my-3 text-light">HMIDITY: ${e.humidity}%</p>`,r.appendChild(d),l.appendChild(r)}({condition:(t=await n.json()).current.condition.text,feelsLike:{f:Math.round(t.current.feelslike_f),c:Math.round(t.current.feelslike_c)},currentTemp:{f:Math.round(t.current.temp_f),c:Math.round(t.current.temp_c)},wind:Math.round(t.current.wind_mph),humidity:t.current.humidity,location:t.location.name.toUpperCase()})}(n)}))})()})();