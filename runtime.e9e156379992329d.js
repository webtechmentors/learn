(()=>{"use strict";var e,g={},v={};function r(e){var d=v[e];if(void 0!==d)return d.exports;var t=v[e]={exports:{}};return g[e](t,t.exports,r),t.exports}r.m=g,e=[],r.O=(d,t,f,i)=>{if(!t){var a=1/0;for(n=0;n<e.length;n++){for(var[t,f,i]=e[n],u=!0,o=0;o<t.length;o++)(!1&i||a>=i)&&Object.keys(r.O).every(p=>r.O[p](t[o]))?t.splice(o--,1):(u=!1,i<a&&(a=i));if(u){e.splice(n--,1);var b=f();void 0!==b&&(d=b)}}return d}i=i||0;for(var n=e.length;n>0&&e[n-1][2]>i;n--)e[n]=e[n-1];e[n]=[t,f,i]},(()=>{var d,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,f){if(1&f&&(t=this(t)),8&f||"object"==typeof t&&t&&(4&f&&t.__esModule||16&f&&"function"==typeof t.then))return t;var i=Object.create(null);r.r(i);var n={};d=d||[null,e({}),e([]),e(e)];for(var a=2&f&&t;"object"==typeof a&&!~d.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(u=>n[u]=()=>t[u]);return n.default=()=>t,r.d(i,n),i}})(),r.d=(e,d)=>{for(var t in d)r.o(d,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:d[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((d,t)=>(r.f[t](e,d),d),[])),r.u=e=>e+"."+{24:"3a2c01fad1a9a523",39:"4879d1de96878c18",44:"07ce489b23b9acdb",81:"5af340e2daf71cd8",89:"069da650db04b0c7",94:"7697690604de0770",106:"11b6a28d62df3305",112:"6b0284cfa97cfd3c",129:"769551e69d25d0a4",142:"d2195117087df0d9",226:"18d8859864e21d52",256:"5f0161f1e2e938cf",267:"97e1fc1ea952146c",284:"78534cbf648c4778",327:"edff50251cdf2ffb",356:"d89c16fb7411e9e9",393:"ed095c8e9148b287",403:"0ddaf0b8d1f0c5a6",447:"b4937fd9c441570a",466:"20be23d8af97b945",535:"deb3c86cfec4cd66",596:"3ce90ac42072bdec",605:"57ea4a0a3c893bfe",652:"b18cd800f0b61dbb",700:"e81023ecde872ec0",731:"0eb9ce084c6e2a02",732:"f33fc5fd770301bc",752:"14ba1301ebfc5696",785:"90ecd257d6b49d25",840:"2782dae4d004deed",859:"33bb62734d520f3b",911:"0a590904a7027864",921:"787d8a17afd1cdb6",949:"da21c3d0d068df68"}[e]+".js",r.miniCssF=e=>{},r.o=(e,d)=>Object.prototype.hasOwnProperty.call(e,d),(()=>{var e={},d="web-building:";r.l=(t,f,i,n)=>{if(e[t])e[t].push(f);else{var a,u;if(void 0!==i)for(var o=document.getElementsByTagName("script"),b=0;b<o.length;b++){var c=o[b];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==d+i){a=c;break}}a||(u=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",d+i),a.src=r.tu(t)),e[t]=[f];var l=(m,p)=>{a.onerror=a.onload=null,clearTimeout(s);var _=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),_&&_.forEach(y=>y(p)),m)return m(p)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),u&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:d=>d},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(f,i)=>{var n=r.o(e,f)?e[f]:void 0;if(0!==n)if(n)i.push(n[2]);else if(666!=f){var a=new Promise((c,l)=>n=e[f]=[c,l]);i.push(n[2]=a);var u=r.p+r.u(f),o=new Error;r.l(u,c=>{if(r.o(e,f)&&(0!==(n=e[f])&&(e[f]=void 0),n)){var l=c&&("load"===c.type?"missing":c.type),s=c&&c.target&&c.target.src;o.message="Loading chunk "+f+" failed.\n("+l+": "+s+")",o.name="ChunkLoadError",o.type=l,o.request=s,n[1](o)}},"chunk-"+f,f)}else e[f]=0},r.O.j=f=>0===e[f];var d=(f,i)=>{var o,b,[n,a,u]=i,c=0;if(n.some(s=>0!==e[s])){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(u)var l=u(r)}for(f&&f(i);c<n.length;c++)r.o(e,b=n[c])&&e[b]&&e[b][0](),e[b]=0;return r.O(l)},t=self.webpackChunkweb_building=self.webpackChunkweb_building||[];t.forEach(d.bind(null,0)),t.push=d.bind(null,t.push.bind(t))})()})();