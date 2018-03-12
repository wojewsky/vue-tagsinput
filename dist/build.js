!function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";t.a={props:{elementId:String,inputClass:{type:String,default:"tags-input-default-class"},existingTags:{type:Object,default:function(){return{}}},oldTags:{type:[Array,String],default:function(){return[]}},typeahead:{type:Boolean,default:!1},placeholder:{type:String,default:"Add a tag"},limit:{type:Number,default:0},onlyExistingTags:{type:Boolean,default:!1}},data:function(){return{badgeId:0,tagBadges:[],tags:[],input:"",oldInput:"",hiddenInput:"",searchResults:[],searchSelection:0}},created:function(){if(this.oldTags&&this.oldTags.length){var e=Array.isArray(this.oldTags)?this.oldTags:this.oldTags.split(","),t=!0,n=!1,r=void 0;try{for(var s,i=e[Symbol.iterator]();!(t=(s=i.next()).done);t=!0){var a=s.value,o=this.existingTags[a],u=o||a;this.addTag(a,u)}}catch(e){n=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}},watch:{tags:function(){this.hiddenInput=this.tags.join(","),this.$emit("input",this.tags)}},methods:{tagFromInput:function(e){if(this.searchResults.length&&this.searchSelection>=0)this.tagFromSearch(this.searchResults[this.searchSelection]),this.input="";else{var t=this.input.trim();if(!this.onlyExistingTags&&t.length){this.input="";var n=this.makeSlug(t),r=this.existingTags[n];n=r?n:t,t=r||t,this.addTag(n,t)}}},tagFromSearch:function(e){this.searchResults=[],this.input="",this.addTag(e.slug,e.text)},makeSlug:function(e){return e.toLowerCase().replace(/\s/g,"-")},addTag:function(e,t){var n=this;if(this.limit>0&&this.tags.length>=this.limit)return!1;var r=this.makeSlug(e);this.tags.find(function(e){return r==n.makeSlug(e)})||(this.tagBadges.push(t.replace(/\s/g,"&nbsp;")),this.tags.push(e))},removeLastTag:function(e){e.target.value.length||this.removeTag(this.tags.length-1)},removeTag:function(e){this.tags.splice(e,1),this.tagBadges.splice(e,1)},searchTag:function(e){if(!0===this.typeahead&&this.oldInput!=this.input){this.searchResults=[],this.searchSelection=0;var t=this.input.trim();if(t.length){for(var n in this.existingTags){this.existingTags[n].toLowerCase().search(t.toLowerCase())>-1&&this.searchResults.push({slug:n,text:this.existingTags[n]})}this.searchResults.sort(function(e,t){return e.text<t.text?-1:e.text>t.text?1:0})}this.oldInput=this.input}},nextSearchResult:function(){this.searchSelection+1<=this.searchResults.length-1&&this.searchSelection++},prevSearchResult:function(){this.searchSelection>0&&this.searchSelection--},ignoreSearchResults:function(){this.searchResults=[],this.searchSelection=0}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);document.querySelector("#voerro-tags-input-demo-vqk6etkfjrcpsjg5")&&(window.TagsInput=r.a),t.default=r.a},function(e,t,n){"use strict";function r(e){n(3)}var s=n(0),i=n(9),a=n(8),o=r,u=a(s.a,i.a,!1,o,null,null);t.a=u.exports},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(6)("0d504c6e",r,!0,{})},function(e,t,n){t=e.exports=n(5)(!1),t.push([e.i,".tags-input{display:flex;flex-wrap:wrap;align-items:center}.tags-input input{flex:1;background:transparent;border:none}.tags-input span{margin-right:.3rem;margin-bottom:.2rem}.typeahead>span{cursor:pointer;margin-right:.3rem}",""])},function(e,t){function n(e,t){var n=e[1]||"",s=e[3];if(!s)return n;if(t&&"function"==typeof btoa){var i=r(s);return[n].concat(s.sources.map(function(e){return"/*# sourceURL="+s.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},s=0;s<this.length;s++){var i=this[s][0];"number"==typeof i&&(r[i]=!0)}for(s=0;s<e.length;s++){var a=e[s];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=l[n.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](n.parts[s]);for(;s<n.parts.length;s++)r.parts.push(i(n.parts[s]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],s=0;s<n.parts.length;s++)a.push(i(n.parts[s]));l[n.id]={id:n.id,refs:1,parts:a}}}}function s(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,n,r=document.querySelector("style["+m+'~="'+e.id+'"]');if(r){if(f)return g;r.parentNode.removeChild(r)}if(y){var i=h++;r=p||(p=s()),t=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=s(),t=o.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var s=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,s);else{var i=document.createTextNode(s),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function o(e,t){var n=t.css,r=t.media,s=t.sourceMap;if(r&&e.setAttribute("media",r),v.ssrId&&e.setAttribute(m,t.id),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(7),l={},d=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,h=0,f=!1,g=function(){},v=null,m="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,s){f=n,v=s||{};var i=c(e,t);return r(i),function(t){for(var n=[],s=0;s<i.length;s++){var a=i[s],o=l[a.id];o.refs--,n.push(o)}t?(i=c(e,t),r(i)):i=[];for(var s=0;s<n.length;s++){var o=n[s];if(0===o.refs){for(var u=0;u<o.parts.length;u++)o.parts[u]();delete l[o.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},s=0;s<t.length;s++){var i=t[s],a=i[0],o=i[1],u=i[2],c=i[3],l={id:e+":"+s,css:o,media:u,sourceMap:c};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}},function(e,t){e.exports=function(e,t,n,r,s,i){var a,o=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(a=e,o=e.default);var c="function"==typeof o?o.options:o;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),s&&(c._scopeId=s);var l;if(i?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=l):r&&(l=r),l){var d=c.functional,p=d?c.render:c.beforeCreate;d?(c._injectStyles=l,c.render=function(e,t){return l.call(t),p(e,t)}):c.beforeCreate=p?[].concat(p,l):[l]}return{esModule:a,exports:o,options:c}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{class:e.inputClass+" tags-input"},[e._l(e.tagBadges,function(t,r){return n("span",{key:r,staticClass:"badge badge-pill badge-light"},[n("span",{domProps:{innerHTML:e._s(t)}}),e._v(" "),n("i",{staticClass:"tags-input-remove",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.removeTag(r)}}})])}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.input},on:{keypress:[function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;t.preventDefault(),e.tagFromInput(t)},function(t){if(!("button"in t)&&e._k(t.keyCode,"backspace",void 0,t.key))return null;e.removeLastTag(t)},function(t){if(!("button"in t)&&e._k(t.keyCode,"down",40,t.key))return null;e.nextSearchResult(t)},function(t){if(!("button"in t)&&e._k(t.keyCode,"up",38,t.key))return null;e.prevSearchResult(t)},function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27,t.key))return null;e.ignoreSearchResults(t)}],keyup:e.searchTag,value:e.tags,input:function(t){t.target.composing||(e.input=t.target.value)}}}),e._v(" "),e.elementId?n("input",{directives:[{name:"model",rawName:"v-model",value:e.hiddenInput,expression:"hiddenInput"}],attrs:{type:"hidden",name:e.elementId,id:e.elementId},domProps:{value:e.hiddenInput},on:{input:function(t){t.target.composing||(e.hiddenInput=t.target.value)}}}):e._e()],2),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:e.searchResults.length,expression:"searchResults.length"}],staticClass:"typeahead"},e._l(e.searchResults,function(t,r){return n("span",{key:r,staticClass:"badge",class:{"badge-primary":r==e.searchSelection,"badge-dark":r!=e.searchSelection},domProps:{textContent:e._s(t.text)},on:{click:function(n){e.tagFromSearch(t)}}})}))])},s=[],i={render:r,staticRenderFns:s};t.a=i}]);
//# sourceMappingURL=build.js.map