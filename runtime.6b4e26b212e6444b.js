(()=>{"use strict";var e,g={},v={};function r(e){var i=v[e];if(void 0!==i)return i.exports;var t=v[e]={exports:{}};return g[e](t,t.exports,r),t.exports}r.m=g,e=[],r.O=(i,t,f,o)=>{if(!t){var a=1/0;for(n=0;n<e.length;n++){for(var[t,f,o]=e[n],u=!0,d=0;d<t.length;d++)(!1&o||a>=o)&&Object.keys(r.O).every(p=>r.O[p](t[d]))?t.splice(d--,1):(u=!1,o<a&&(a=o));if(u){e.splice(n--,1);var b=f();void 0!==b&&(i=b)}}return i}o=o||0;for(var n=e.length;n>0&&e[n-1][2]>o;n--)e[n]=e[n-1];e[n]=[t,f,o]},(()=>{var i,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,f){if(1&f&&(t=this(t)),8&f||"object"==typeof t&&t&&(4&f&&t.__esModule||16&f&&"function"==typeof t.then))return t;var o=Object.create(null);r.r(o);var n={};i=i||[null,e({}),e([]),e(e)];for(var a=2&f&&t;"object"==typeof a&&!~i.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(u=>n[u]=()=>t[u]);return n.default=()=>t,r.d(o,n),o}})(),r.d=(e,i)=>{for(var t in i)r.o(i,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:i[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((i,t)=>(r.f[t](e,i),i),[])),r.u=e=>e+"."+{39:"4879d1de96878c18",112:"6b0284cfa97cfd3c",142:"d2195117087df0d9",168:"70230d934b9107d8",256:"5f0161f1e2e938cf",306:"2d536ff29d4ba66a",392:"1d78b966316286c9",403:"0ddaf0b8d1f0c5a6",535:"deb3c86cfec4cd66",581:"6657a791ed64452f",596:"3ce90ac42072bdec",605:"b6d880a118881af9",649:"353ee080db6dff76",859:"33bb62734d520f3b",899:"686f4f80c375d772",925:"d8ab6e010c49bd67"}[e]+".js",r.miniCssF=e=>{},r.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),(()=>{var e={},i="web-building:";r.l=(t,f,o,n)=>{if(e[t])e[t].push(f);else{var a,u;if(void 0!==o)for(var d=document.getElementsByTagName("script"),b=0;b<d.length;b++){var c=d[b];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==i+o){a=c;break}}a||(u=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",i+o),a.src=r.tu(t)),e[t]=[f];var l=(m,p)=>{a.onerror=a.onload=null,clearTimeout(s);var _=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),_&&_.forEach(y=>y(p)),m)return m(p)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),u&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:i=>i},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(f,o)=>{var n=r.o(e,f)?e[f]:void 0;if(0!==n)if(n)o.push(n[2]);else if(666!=f){var a=new Promise((c,l)=>n=e[f]=[c,l]);o.push(n[2]=a);var u=r.p+r.u(f),d=new Error;r.l(u,c=>{if(r.o(e,f)&&(0!==(n=e[f])&&(e[f]=void 0),n)){var l=c&&("load"===c.type?"missing":c.type),s=c&&c.target&&c.target.src;d.message="Loading chunk "+f+" failed.\n("+l+": "+s+")",d.name="ChunkLoadError",d.type=l,d.request=s,n[1](d)}},"chunk-"+f,f)}else e[f]=0},r.O.j=f=>0===e[f];var i=(f,o)=>{var d,b,[n,a,u]=o,c=0;if(n.some(s=>0!==e[s])){for(d in a)r.o(a,d)&&(r.m[d]=a[d]);if(u)var l=u(r)}for(f&&f(o);c<n.length;c++)r.o(e,b=n[c])&&e[b]&&e[b][0](),e[b]=0;return r.O(l)},t=self.webpackChunkweb_building=self.webpackChunkweb_building||[];t.forEach(i.bind(null,0)),t.push=i.bind(null,t.push.bind(t))})()})();