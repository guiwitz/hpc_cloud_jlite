(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[3830],{39106:(o,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>A});var e=t(94015),i=t.n(e),n=t(23645),c=t.n(n)()(i());c.push([o.id,".cm-s-liquibyte.CodeMirror {\n\tbackground-color: #000;\n\tcolor: #fff;\n\tline-height: 1.2em;\n\tfont-size: 1em;\n}\n.cm-s-liquibyte .CodeMirror-focused .cm-matchhighlight {\n\ttext-decoration: underline;\n\ttext-decoration-color: #0f0;\n\ttext-decoration-style: wavy;\n}\n.cm-s-liquibyte .cm-trailingspace {\n\ttext-decoration: line-through;\n\ttext-decoration-color: #f00;\n\ttext-decoration-style: dotted;\n}\n.cm-s-liquibyte .cm-tab {\n\ttext-decoration: line-through;\n\ttext-decoration-color: #404040;\n\ttext-decoration-style: dotted;\n}\n.cm-s-liquibyte .CodeMirror-gutters { background-color: #262626; border-right: 1px solid #505050; padding-right: 0.8em; }\n.cm-s-liquibyte .CodeMirror-gutter-elt div { font-size: 1.2em; }\n.cm-s-liquibyte .CodeMirror-guttermarker {  }\n.cm-s-liquibyte .CodeMirror-guttermarker-subtle {  }\n.cm-s-liquibyte .CodeMirror-linenumber { color: #606060; padding-left: 0; }\n.cm-s-liquibyte .CodeMirror-cursor { border-left: 1px solid #eee; }\n\n.cm-s-liquibyte span.cm-comment     { color: #008000; }\n.cm-s-liquibyte span.cm-def         { color: #ffaf40; font-weight: bold; }\n.cm-s-liquibyte span.cm-keyword     { color: #c080ff; font-weight: bold; }\n.cm-s-liquibyte span.cm-builtin     { color: #ffaf40; font-weight: bold; }\n.cm-s-liquibyte span.cm-variable    { color: #5967ff; font-weight: bold; }\n.cm-s-liquibyte span.cm-string      { color: #ff8000; }\n.cm-s-liquibyte span.cm-number      { color: #0f0; font-weight: bold; }\n.cm-s-liquibyte span.cm-atom        { color: #bf3030; font-weight: bold; }\n\n.cm-s-liquibyte span.cm-variable-2  { color: #007f7f; font-weight: bold; }\n.cm-s-liquibyte span.cm-variable-3, .cm-s-liquibyte span.cm-type { color: #c080ff; font-weight: bold; }\n.cm-s-liquibyte span.cm-property    { color: #999; font-weight: bold; }\n.cm-s-liquibyte span.cm-operator    { color: #fff; }\n\n.cm-s-liquibyte span.cm-meta        { color: #0f0; }\n.cm-s-liquibyte span.cm-qualifier   { color: #fff700; font-weight: bold; }\n.cm-s-liquibyte span.cm-bracket     { color: #cc7; }\n.cm-s-liquibyte span.cm-tag         { color: #ff0; font-weight: bold; }\n.cm-s-liquibyte span.cm-attribute   { color: #c080ff; font-weight: bold; }\n.cm-s-liquibyte span.cm-error       { color: #f00; }\n\n.cm-s-liquibyte div.CodeMirror-selected { background-color: rgba(255, 0, 0, 0.25); }\n\n.cm-s-liquibyte span.cm-compilation { background-color: rgba(255, 255, 255, 0.12); }\n\n.cm-s-liquibyte .CodeMirror-activeline-background { background-color: rgba(0, 255, 0, 0.15); }\n\n/* Default styles for common addons */\n.cm-s-liquibyte .CodeMirror span.CodeMirror-matchingbracket { color: #0f0; font-weight: bold; }\n.cm-s-liquibyte .CodeMirror span.CodeMirror-nonmatchingbracket { color: #f00; font-weight: bold; }\n.CodeMirror-matchingtag { background-color: rgba(150, 255, 0, .3); }\n/* Scrollbars */\n/* Simple */\n.cm-s-liquibyte div.CodeMirror-simplescroll-horizontal div:hover, .cm-s-liquibyte div.CodeMirror-simplescroll-vertical div:hover {\n\tbackground-color: rgba(80, 80, 80, .7);\n}\n.cm-s-liquibyte div.CodeMirror-simplescroll-horizontal div, .cm-s-liquibyte div.CodeMirror-simplescroll-vertical div {\n\tbackground-color: rgba(80, 80, 80, .3);\n\tborder: 1px solid #404040;\n\tborder-radius: 5px;\n}\n.cm-s-liquibyte div.CodeMirror-simplescroll-vertical div {\n\tborder-top: 1px solid #404040;\n\tborder-bottom: 1px solid #404040;\n}\n.cm-s-liquibyte div.CodeMirror-simplescroll-horizontal div {\n\tborder-left: 1px solid #404040;\n\tborder-right: 1px solid #404040;\n}\n.cm-s-liquibyte div.CodeMirror-simplescroll-vertical {\n\tbackground-color: #262626;\n}\n.cm-s-liquibyte div.CodeMirror-simplescroll-horizontal {\n\tbackground-color: #262626;\n\tborder-top: 1px solid #404040;\n}\n/* Overlay */\n.cm-s-liquibyte div.CodeMirror-overlayscroll-horizontal div, div.CodeMirror-overlayscroll-vertical div {\n\tbackground-color: #404040;\n\tborder-radius: 5px;\n}\n.cm-s-liquibyte div.CodeMirror-overlayscroll-vertical div {\n\tborder: 1px solid #404040;\n}\n.cm-s-liquibyte div.CodeMirror-overlayscroll-horizontal div {\n\tborder: 1px solid #404040;\n}\n","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/liquibyte.css"],names:[],mappings:"AAAA;CACC,sBAAsB;CACtB,WAAW;CACX,kBAAkB;CAClB,cAAc;AACf;AACA;CACC,0BAA0B;CAC1B,2BAA2B;CAC3B,2BAA2B;AAC5B;AACA;CACC,6BAA6B;CAC7B,2BAA2B;CAC3B,6BAA6B;AAC9B;AACA;CACC,6BAA6B;CAC7B,8BAA8B;CAC9B,6BAA6B;AAC9B;AACA,sCAAsC,yBAAyB,EAAE,+BAA+B,EAAE,oBAAoB,EAAE;AACxH,6CAA6C,gBAAgB,EAAE;AAC/D,4CAA4C;AAC5C,mDAAmD;AACnD,yCAAyC,cAAc,EAAE,eAAe,EAAE;AAC1E,qCAAqC,2BAA2B,EAAE;;AAElE,sCAAsC,cAAc,EAAE;AACtD,sCAAsC,cAAc,EAAE,iBAAiB,EAAE;AACzE,sCAAsC,cAAc,EAAE,iBAAiB,EAAE;AACzE,sCAAsC,cAAc,EAAE,iBAAiB,EAAE;AACzE,sCAAsC,cAAc,EAAE,iBAAiB,EAAE;AACzE,sCAAsC,cAAc,EAAE;AACtD,sCAAsC,WAAW,EAAE,iBAAiB,EAAE;AACtE,sCAAsC,cAAc,EAAE,iBAAiB,EAAE;;AAEzE,sCAAsC,cAAc,EAAE,iBAAiB,EAAE;AACzE,mEAAmE,cAAc,EAAE,iBAAiB,EAAE;AACtG,sCAAsC,WAAW,EAAE,iBAAiB,EAAE;AACtE,sCAAsC,WAAW,EAAE;;AAEnD,sCAAsC,WAAW,EAAE;AACnD,sCAAsC,cAAc,EAAE,iBAAiB,EAAE;AACzE,sCAAsC,WAAW,EAAE;AACnD,sCAAsC,WAAW,EAAE,iBAAiB,EAAE;AACtE,sCAAsC,cAAc,EAAE,iBAAiB,EAAE;AACzE,sCAAsC,WAAW,EAAE;;AAEnD,0CAA0C,uCAAuC,EAAE;;AAEnF,sCAAsC,2CAA2C,EAAE;;AAEnF,oDAAoD,uCAAuC,EAAE;;AAE7F,qCAAqC;AACrC,8DAA8D,WAAW,EAAE,iBAAiB,EAAE;AAC9F,iEAAiE,WAAW,EAAE,iBAAiB,EAAE;AACjG,0BAA0B,uCAAuC,EAAE;AACnE,eAAe;AACf,WAAW;AACX;CACC,sCAAsC;AACvC;AACA;CACC,sCAAsC;CACtC,yBAAyB;CACzB,kBAAkB;AACnB;AACA;CACC,6BAA6B;CAC7B,gCAAgC;AACjC;AACA;CACC,8BAA8B;CAC9B,+BAA+B;AAChC;AACA;CACC,yBAAyB;AAC1B;AACA;CACC,yBAAyB;CACzB,6BAA6B;AAC9B;AACA,YAAY;AACZ;CACC,yBAAyB;CACzB,kBAAkB;AACnB;AACA;CACC,yBAAyB;AAC1B;AACA;CACC,yBAAyB;AAC1B",sourcesContent:[".cm-s-liquibyte.CodeMirror {\n\tbackground-color: #000;\n\tcolor: #fff;\n\tline-height: 1.2em;\n\tfont-size: 1em;\n}\n.cm-s-liquibyte .CodeMirror-focused .cm-matchhighlight {\n\ttext-decoration: underline;\n\ttext-decoration-color: #0f0;\n\ttext-decoration-style: wavy;\n}\n.cm-s-liquibyte .cm-trailingspace {\n\ttext-decoration: line-through;\n\ttext-decoration-color: #f00;\n\ttext-decoration-style: dotted;\n}\n.cm-s-liquibyte .cm-tab {\n\ttext-decoration: line-through;\n\ttext-decoration-color: #404040;\n\ttext-decoration-style: dotted;\n}\n.cm-s-liquibyte .CodeMirror-gutters { background-color: #262626; border-right: 1px solid #505050; padding-right: 0.8em; }\n.cm-s-liquibyte .CodeMirror-gutter-elt div { font-size: 1.2em; }\n.cm-s-liquibyte .CodeMirror-guttermarker {  }\n.cm-s-liquibyte .CodeMirror-guttermarker-subtle {  }\n.cm-s-liquibyte .CodeMirror-linenumber { color: #606060; padding-left: 0; }\n.cm-s-liquibyte .CodeMirror-cursor { border-left: 1px solid #eee; }\n\n.cm-s-liquibyte span.cm-comment     { color: #008000; }\n.cm-s-liquibyte span.cm-def         { color: #ffaf40; font-weight: bold; }\n.cm-s-liquibyte span.cm-keyword     { color: #c080ff; font-weight: bold; }\n.cm-s-liquibyte span.cm-builtin     { color: #ffaf40; font-weight: bold; }\n.cm-s-liquibyte span.cm-variable    { color: #5967ff; font-weight: bold; }\n.cm-s-liquibyte span.cm-string      { color: #ff8000; }\n.cm-s-liquibyte span.cm-number      { color: #0f0; font-weight: bold; }\n.cm-s-liquibyte span.cm-atom        { color: #bf3030; font-weight: bold; }\n\n.cm-s-liquibyte span.cm-variable-2  { color: #007f7f; font-weight: bold; }\n.cm-s-liquibyte span.cm-variable-3, .cm-s-liquibyte span.cm-type { color: #c080ff; font-weight: bold; }\n.cm-s-liquibyte span.cm-property    { color: #999; font-weight: bold; }\n.cm-s-liquibyte span.cm-operator    { color: #fff; }\n\n.cm-s-liquibyte span.cm-meta        { color: #0f0; }\n.cm-s-liquibyte span.cm-qualifier   { color: #fff700; font-weight: bold; }\n.cm-s-liquibyte span.cm-bracket     { color: #cc7; }\n.cm-s-liquibyte span.cm-tag         { color: #ff0; font-weight: bold; }\n.cm-s-liquibyte span.cm-attribute   { color: #c080ff; font-weight: bold; }\n.cm-s-liquibyte span.cm-error       { color: #f00; }\n\n.cm-s-liquibyte div.CodeMirror-selected { background-color: rgba(255, 0, 0, 0.25); }\n\n.cm-s-liquibyte span.cm-compilation { background-color: rgba(255, 255, 255, 0.12); }\n\n.cm-s-liquibyte .CodeMirror-activeline-background { background-color: rgba(0, 255, 0, 0.15); }\n\n/* Default styles for common addons */\n.cm-s-liquibyte .CodeMirror span.CodeMirror-matchingbracket { color: #0f0; font-weight: bold; }\n.cm-s-liquibyte .CodeMirror span.CodeMirror-nonmatchingbracket { color: #f00; font-weight: bold; }\n.CodeMirror-matchingtag { background-color: rgba(150, 255, 0, .3); }\n/* Scrollbars */\n/* Simple */\n.cm-s-liquibyte div.CodeMirror-simplescroll-horizontal div:hover, .cm-s-liquibyte div.CodeMirror-simplescroll-vertical div:hover {\n\tbackground-color: rgba(80, 80, 80, .7);\n}\n.cm-s-liquibyte div.CodeMirror-simplescroll-horizontal div, .cm-s-liquibyte div.CodeMirror-simplescroll-vertical div {\n\tbackground-color: rgba(80, 80, 80, .3);\n\tborder: 1px solid #404040;\n\tborder-radius: 5px;\n}\n.cm-s-liquibyte div.CodeMirror-simplescroll-vertical div {\n\tborder-top: 1px solid #404040;\n\tborder-bottom: 1px solid #404040;\n}\n.cm-s-liquibyte div.CodeMirror-simplescroll-horizontal div {\n\tborder-left: 1px solid #404040;\n\tborder-right: 1px solid #404040;\n}\n.cm-s-liquibyte div.CodeMirror-simplescroll-vertical {\n\tbackground-color: #262626;\n}\n.cm-s-liquibyte div.CodeMirror-simplescroll-horizontal {\n\tbackground-color: #262626;\n\tborder-top: 1px solid #404040;\n}\n/* Overlay */\n.cm-s-liquibyte div.CodeMirror-overlayscroll-horizontal div, div.CodeMirror-overlayscroll-vertical div {\n\tbackground-color: #404040;\n\tborder-radius: 5px;\n}\n.cm-s-liquibyte div.CodeMirror-overlayscroll-vertical div {\n\tborder: 1px solid #404040;\n}\n.cm-s-liquibyte div.CodeMirror-overlayscroll-horizontal div {\n\tborder: 1px solid #404040;\n}\n"],sourceRoot:""}]);const A=c},23645:o=>{"use strict";o.exports=function(o){var r=[];return r.toString=function(){return this.map((function(r){var t=o(r);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(o,t,e){"string"==typeof o&&(o=[[null,o,""]]);var i={};if(e)for(var n=0;n<this.length;n++){var c=this[n][0];null!=c&&(i[c]=!0)}for(var A=0;A<o.length;A++){var l=[].concat(o[A]);e&&i[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),r.push(l))}},r}},94015:o=>{"use strict";function r(o,r){(null==r||r>o.length)&&(r=o.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=o[t];return e}o.exports=function(o){var t,e,i=(e=4,function(o){if(Array.isArray(o))return o}(t=o)||function(o,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(o)){var t=[],e=!0,i=!1,n=void 0;try{for(var c,A=o[Symbol.iterator]();!(e=(c=A.next()).done)&&(t.push(c.value),!r||t.length!==r);e=!0);}catch(o){i=!0,n=o}finally{try{e||null==A.return||A.return()}finally{if(i)throw n}}return t}}(t,e)||function(o,t){if(o){if("string"==typeof o)return r(o,t);var e=Object.prototype.toString.call(o).slice(8,-1);return"Object"===e&&o.constructor&&(e=o.constructor.name),"Map"===e||"Set"===e?Array.from(o):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(o,t):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=i[1],c=i[3];if("function"==typeof btoa){var A=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),s="/*# ".concat(l," */"),a=c.sources.map((function(o){return"/*# sourceURL=".concat(c.sourceRoot||"").concat(o," */")}));return[n].concat(a).concat([s]).join("\n")}return[n].join("\n")}},13830:(o,r,t)=>{var e=t(39106);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[o.id,e,""]]);t(93379)(e,{insert:"head",singleton:!1}),e.locals&&(o.exports=e.locals)},93379:(o,r,t)=>{"use strict";var e,i={},n=function(){var o={};return function(r){if(void 0===o[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(o){t=null}o[r]=t}return o[r]}}();function c(o,r){for(var t=[],e={},i=0;i<o.length;i++){var n=o[i],c=r.base?n[0]+r.base:n[0],A={css:n[1],media:n[2],sourceMap:n[3]};e[c]?e[c].parts.push(A):t.push(e[c]={id:c,parts:[A]})}return t}function A(o,r){for(var t=0;t<o.length;t++){var e=o[t],n=i[e.id],c=0;if(n){for(n.refs++;c<n.parts.length;c++)n.parts[c](e.parts[c]);for(;c<e.parts.length;c++)n.parts.push(m(e.parts[c],r))}else{for(var A=[];c<e.parts.length;c++)A.push(m(e.parts[c],r));i[e.id]={id:e.id,refs:1,parts:A}}}}function l(o){var r=document.createElement("style");if(void 0===o.attributes.nonce){var e=t.nc;e&&(o.attributes.nonce=e)}if(Object.keys(o.attributes).forEach((function(t){r.setAttribute(t,o.attributes[t])})),"function"==typeof o.insert)o.insert(r);else{var i=n(o.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}return r}var s,a=(s=[],function(o,r){return s[o]=r,s.filter(Boolean).join("\n")});function d(o,r,t,e){var i=t?"":e.css;if(o.styleSheet)o.styleSheet.cssText=a(r,i);else{var n=document.createTextNode(i),c=o.childNodes;c[r]&&o.removeChild(c[r]),c.length?o.insertBefore(n,c[r]):o.appendChild(n)}}function u(o,r,t){var e=t.css,i=t.media,n=t.sourceMap;if(i&&o.setAttribute("media",i),n&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),o.styleSheet)o.styleSheet.cssText=e;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(e))}}var C=null,b=0;function m(o,r){var t,e,i;if(r.singleton){var n=b++;t=C||(C=l(r)),e=d.bind(null,t,n,!1),i=d.bind(null,t,n,!0)}else t=l(r),e=u.bind(null,t,r),i=function(){!function(o){if(null===o.parentNode)return!1;o.parentNode.removeChild(o)}(t)};return e(o),function(r){if(r){if(r.css===o.css&&r.media===o.media&&r.sourceMap===o.sourceMap)return;e(o=r)}else i()}}o.exports=function(o,r){(r=r||{}).attributes="object"==typeof r.attributes?r.attributes:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e));var t=c(o,r);return A(t,r),function(o){for(var e=[],n=0;n<t.length;n++){var l=t[n],s=i[l.id];s&&(s.refs--,e.push(s))}o&&A(c(o,r),r);for(var a=0;a<e.length;a++){var d=e[a];if(0===d.refs){for(var u=0;u<d.parts.length;u++)d.parts[u]();delete i[d.id]}}}}}}]);
//# sourceMappingURL=3830.abef759dc4ddb50db697.js.map