(()=>{"use strict";var e,a,t,f,c,r={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var t=d[e]={exports:{}};return r[e].call(t.exports,t,t.exports,b),t.exports}b.m=r,e=[],b.O=(a,t,f,c)=>{if(!t){var r=1/0;for(i=0;i<e.length;i++){t=e[i][0],f=e[i][1],c=e[i][2];for(var d=!0,o=0;o<t.length;o++)(!1&c||r>=c)&&Object.keys(b.O).every((e=>b.O[e](t[o])))?t.splice(o--,1):(d=!1,c<r&&(r=c));if(d){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[t,f,c]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var c=Object.create(null);b.r(c);var r={};a=a||[null,t({}),t([]),t(t)];for(var d=2&f&&e;"object"==typeof d&&!~a.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,b.d(c,r),c},b.d=(e,a)=>{for(var t in a)b.o(a,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,t)=>(b.f[t](e,a),a)),[])),b.u=e=>"assets/js/"+({596:"8f7dc6cf",867:"33fc5bb8",1235:"a7456010",1351:"e4274a58",1903:"acecf23e",1946:"8ca3339c",1972:"73664a40",2711:"9e4087bc",2814:"72e14192",3249:"ccc49370",3402:"58b2f691",3555:"b666990b",3637:"f4f34a3a",3656:"d62347f9",3694:"8717b14a",4054:"283fb6d0",4134:"393be207",4212:"621db11d",4583:"1df93b7f",4610:"02938ded",4813:"6875c492",5493:"d0d50371",5545:"054bf8fe",5557:"d9f32620",5679:"844de8be",5742:"aba21aa0",5844:"5a95ca47",5899:"a09c2993",6061:"1f391b9e",6128:"1b442d79",6844:"b10c2597",7098:"a7bd4aaa",7236:"d05660ff",7472:"814f3328",7643:"a6aa9e1f",8184:"43cd4838",8199:"a9f750d8",8209:"01a85c17",8313:"8ceae5a6",8401:"17896441",8559:"65df3d35",8609:"925b3f96",8737:"7661071f",8907:"8fcf0d6c",9048:"a94703ab",9325:"59362658",9328:"e273c56f",9347:"a4b27f8d",9647:"5e95c892",9796:"bf2e2ff2",9807:"13d4da8e",9811:"c90c4da0",9858:"36994c47",9862:"33bdb42e"}[e]||e)+"."+{596:"efa67ba0",867:"811fcf7a",1235:"906bbb8c",1351:"6407631d",1538:"e5a7b9a8",1903:"ae9c8360",1946:"f5749bf5",1972:"337707d9",2237:"a00b78e9",2711:"3a2ba661",2814:"499fde6a",3249:"89089d43",3347:"fcfe09a4",3402:"4d8c5f1e",3555:"15acb15a",3637:"211ba3cb",3656:"df52e842",3694:"1bda9ed3",4054:"adf664ed",4134:"34349182",4212:"04329e40",4583:"5779a0a1",4610:"8927ca12",4813:"0270563a",5493:"1f852f08",5545:"54d36939",5557:"49d2269e",5679:"87d01dd4",5742:"6d99f58b",5844:"5be00768",5899:"d55d52e3",6061:"ca2c1bab",6128:"390b781c",6844:"5b76226b",7098:"fa53fc48",7236:"07f56d66",7472:"cd80d550",7643:"db4cf073",8184:"2189fdf3",8199:"06e86559",8209:"bcde094b",8313:"b4eb1af3",8401:"9d52cb87",8559:"98b46940",8609:"dc8fa8c9",8737:"b8b9cf73",8907:"786bbc7f",9048:"a145dfae",9325:"a9585ad4",9328:"0c51b8f4",9347:"efa3f99f",9647:"2a6395ad",9796:"146adc17",9807:"baa25888",9811:"a172f9af",9858:"19ac637e",9862:"8851dff5"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},c="applitools-playwright-docs:",b.l=(e,a,t,r)=>{if(f[e])f[e].push(a);else{var d,o;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==c+t){d=l;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",c+t),d.src=e),f[e]=[a];var u=(a,t)=>{d.onerror=d.onload=null,clearTimeout(s);var c=f[e];if(delete f[e],d.parentNode&&d.parentNode.removeChild(d),c&&c.forEach((e=>e(t))),a)return a(t)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/applitools-playwright-docs/",b.gca=function(e){return e={17896441:"8401",59362658:"9325","8f7dc6cf":"596","33fc5bb8":"867",a7456010:"1235",e4274a58:"1351",acecf23e:"1903","8ca3339c":"1946","73664a40":"1972","9e4087bc":"2711","72e14192":"2814",ccc49370:"3249","58b2f691":"3402",b666990b:"3555",f4f34a3a:"3637",d62347f9:"3656","8717b14a":"3694","283fb6d0":"4054","393be207":"4134","621db11d":"4212","1df93b7f":"4583","02938ded":"4610","6875c492":"4813",d0d50371:"5493","054bf8fe":"5545",d9f32620:"5557","844de8be":"5679",aba21aa0:"5742","5a95ca47":"5844",a09c2993:"5899","1f391b9e":"6061","1b442d79":"6128",b10c2597:"6844",a7bd4aaa:"7098",d05660ff:"7236","814f3328":"7472",a6aa9e1f:"7643","43cd4838":"8184",a9f750d8:"8199","01a85c17":"8209","8ceae5a6":"8313","65df3d35":"8559","925b3f96":"8609","7661071f":"8737","8fcf0d6c":"8907",a94703ab:"9048",e273c56f:"9328",a4b27f8d:"9347","5e95c892":"9647",bf2e2ff2:"9796","13d4da8e":"9807",c90c4da0:"9811","36994c47":"9858","33bdb42e":"9862"}[e]||e,b.p+b.u(e)},(()=>{var e={5354:0,1869:0};b.f.j=(a,t)=>{var f=b.o(e,a)?e[a]:void 0;if(0!==f)if(f)t.push(f[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var c=new Promise(((t,c)=>f=e[a]=[t,c]));t.push(f[2]=c);var r=b.p+b.u(a),d=new Error;b.l(r,(t=>{if(b.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var c=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+a+" failed.\n("+c+": "+r+")",d.name="ChunkLoadError",d.type=c,d.request=r,f[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,t)=>{var f,c,r=t[0],d=t[1],o=t[2],n=0;if(r.some((a=>0!==e[a]))){for(f in d)b.o(d,f)&&(b.m[f]=d[f]);if(o)var i=o(b)}for(a&&a(t);n<r.length;n++)c=r[n],b.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return b.O(i)},t=self.webpackChunkapplitools_playwright_docs=self.webpackChunkapplitools_playwright_docs||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();