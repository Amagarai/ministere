parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"siy4":[function(require,module,exports) {
var global = arguments[3];
var n=arguments[3];!function(n,r,t){r[n]=t()}("WPTB_IconManager",self||n,function(){return(self||n).wptb_admin_object?new function(n){if(!n)throw new Error("no icon list is defined for WPTB_IconManager instance");var r=n,t={},e=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=document.createElement("div");return r&&t.classList.add(r),t.innerHTML=n,t};this.getIconList=function(){return r},this.getIcon=function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise(function(c,u){var a=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t[n]?o?t[n]:e(t[n],r):null}(n,o,i);return a?c(a):r[n]?fetch(r[n]).then(function(r){if(r.ok)return r.text();throw new Error("an error occurred while fetching icon [".concat(n,"]"))}).then(function(r){if(r.error)throw new Error("an error occurred while fetching icon [".concat(n,"]"));return function(n,r){t[n]=r}(n,r),c(i?r:e(r,o))}).catch(function(n){return u(new Error(n))}):u(new Error("no icon found with the given name of [".concat(n,"]")))})},this.getIconUrl=function(n){var t=null;return r[n]&&(t=r[n]),t}}(wptb_admin_object.iconManager):null});
},{}]},{},["siy4"], null)