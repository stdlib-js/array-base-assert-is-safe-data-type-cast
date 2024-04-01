// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return Object.keys(Object(t))}var n=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function u(t,n){return null!=t&&o.call(t,n)}var a="function"==typeof Symbol?Symbol:void 0,c="function"==typeof a?a.toStringTag:"";var l=r()?function(t){var n,e,r;if(null==t)return i.call(t);e=t[c],n=u(t,c);try{t[c]=void 0}catch(n){return i.call(t)}return r=i.call(t),n?t[c]=e:delete t[c],r}:function(t){return i.call(t)};function f(t){return"[object Arguments]"===l(t)}var p=function(){return f(arguments)}(),s="function"==typeof Object.defineProperty?Object.defineProperty:null;var g=Object.defineProperty;function y(t){return"number"==typeof t}function b(t){var n,e="";for(n=0;n<t;n++)e+="0";return e}function d(t,n,e){var r=!1,i=n-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(r=!0,t=t.substr(1)),t=e?t+b(i):b(i)+t,r&&(t="-"+t)),t}var m=String.prototype.toLowerCase,h=String.prototype.toUpperCase;function v(t){var n,e,r;switch(t.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=t.arg,r=parseInt(e,10),!isFinite(r)){if(!y(e))throw new Error("invalid integer. Value: "+e);r=0}return r<0&&("u"===t.specifier||10!==n)&&(r=4294967295+r+1),r<0?(e=(-r).toString(n),t.precision&&(e=d(e,t.precision,t.padRight)),e="-"+e):(e=r.toString(n),r||t.precision?t.precision&&(e=d(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===n&&(t.alternate&&(e="0x"+e),e=t.specifier===h.call(t.specifier)?h.call(e):m.call(e)),8===n&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var w=Math.abs,x=String.prototype.toLowerCase,j=String.prototype.toUpperCase,_=String.prototype.replace,O=/e\+(\d)$/,S=/e-(\d)$/,E=/^(\d+)$/,T=/^(\d+)e/,k=/\.0$/,I=/\.0*e/,P=/(\..*[^0])0*e/;function V(t){var n,e,r=parseFloat(t.arg);if(!isFinite(r)){if(!y(t.arg))throw new Error("invalid floating-point number. Value: "+e);r=t.arg}switch(t.specifier){case"e":case"E":e=r.toExponential(t.precision);break;case"f":case"F":e=r.toFixed(t.precision);break;case"g":case"G":w(r)<1e-4?((n=t.precision)>0&&(n-=1),e=r.toExponential(n)):e=r.toPrecision(t.precision),t.alternate||(e=_.call(e,P,"$1e"),e=_.call(e,I,"e"),e=_.call(e,k,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=_.call(e,O,"e+0$1"),e=_.call(e,S,"e-0$1"),t.alternate&&(e=_.call(e,E,"$1."),e=_.call(e,T,"$1.e")),r>=0&&t.sign&&(e=t.sign+e),e=t.specifier===j.call(t.specifier)?j.call(e):x.call(e)}function A(t){var n,e="";for(n=0;n<t;n++)e+=" ";return e}var F=String.fromCharCode,N=isNaN,$=Array.isArray;function C(t){var n={};return n.specifier=t.specifier,n.precision=void 0===t.precision?1:t.precision,n.width=t.width,n.flags=t.flags||"",n.mapping=t.mapping,n}function B(t){var n,e,r,i,o,u,a,c,l,f,p,s,g;if(!$(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",a=1,c=0;c<t.length;c++)if(r=t[c],"string"==typeof r)u+=r;else{if(n=void 0!==r.precision,!(r=C(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+r+"`.");for(r.mapping&&(a=r.mapping),e=r.flags,l=0;l<e.length;l++)switch(i=e.charAt(l)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=e.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===r.width){if(r.width=parseInt(arguments[a],10),a+=1,N(r.width))throw new TypeError("the argument for * width at position "+a+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(n&&"*"===r.precision){if(r.precision=parseInt(arguments[a],10),a+=1,N(r.precision))throw new TypeError("the argument for * precision at position "+a+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,n=!1)}switch(r.arg=arguments[a],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(r.padZeros=!1),r.arg=v(r);break;case"s":r.maxWidth=n?r.precision:-1;break;case"c":if(!N(r.arg)){if((o=parseInt(r.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=N(o)?String(r.arg):F(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(r.precision=6),r.arg=V(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=d(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=(f=r.arg,p=r.width,s=r.padRight,g=void 0,(g=p-f.length)<0?f:f=s?f+A(g):A(g)+f)),u+=r.arg||"",a+=1}return u}var L=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(t){var n={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(n.precision="1"),n}function G(t){var n,e,r,i;for(e=[],i=0,r=L.exec(t);r;)(n=t.slice(i,L.lastIndex-r[0].length)).length&&e.push(n),e.push(R(r)),i=L.lastIndex,r=L.exec(t);return(n=t.slice(i)).length&&e.push(n),e}function W(t){var n,e;if("string"!=typeof t)throw new TypeError(W("invalid argument. First argument must be a string. Value: `%s`.",t));for(n=[G(t)],e=1;e<arguments.length;e++)n.push(arguments[e]);return B.apply(null,n)}var X,Z=Object.prototype,M=Z.toString,Y=Z.__defineGetter__,U=Z.__defineSetter__,H=Z.__lookupGetter__,z=Z.__lookupSetter__;X=function(){try{return s({},"x",{}),!0}catch(t){return!1}}()?g:function(t,n,e){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===M.call(t))throw new TypeError(W("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===M.call(e))throw new TypeError(W("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(H.call(t,n)||z.call(t,n)?(r=t.__proto__,t.__proto__=Z,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),o="get"in e,u="set"in e,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Y&&Y.call(t,n,e.get),u&&U&&U.call(t,n,e.set),t};var D=X;function q(t,n,e){D(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function J(t){return"string"==typeof t}var K=String.prototype.valueOf;var Q=r();function tt(t){return"object"==typeof t&&(t instanceof String||(Q?function(t){try{return K.call(t),!0}catch(t){return!1}}(t):"[object String]"===l(t)))}function nt(t){return J(t)||tt(t)}function et(t){return"number"==typeof t}q(nt,"isPrimitive",J),q(nt,"isObject",tt);var rt=Number,it=rt.prototype.toString;var ot=r();function ut(t){return"object"==typeof t&&(t instanceof rt||(ot?function(t){try{return it.call(t),!0}catch(t){return!1}}(t):"[object Number]"===l(t)))}function at(t){return et(t)||ut(t)}function ct(t){return t!=t}function lt(t){return et(t)&&ct(t)}function ft(t){return ut(t)&&ct(t.valueOf())}function pt(t){return lt(t)||ft(t)}q(at,"isPrimitive",et),q(at,"isObject",ut),q(pt,"isPrimitive",lt),q(pt,"isObject",ft);var st=Number.POSITIVE_INFINITY,gt=rt.NEGATIVE_INFINITY,yt=Math.floor;function bt(t){return yt(t)===t}function dt(t){return t<st&&t>gt&&bt(t)}function mt(t){return et(t)&&dt(t)}function ht(t){return ut(t)&&dt(t.valueOf())}function vt(t){return mt(t)||ht(t)}q(vt,"isPrimitive",mt),q(vt,"isObject",ht);var wt=Object.prototype.propertyIsEnumerable;var xt=!wt.call("beep","0");function jt(t,n){var e;return null!=t&&(!(e=wt.call(t,n))&&xt&&nt(t)?!lt(n=+n)&&mt(n)&&n>=0&&n<t.length:e)}var _t=Array.isArray?Array.isArray:function(t){return"[object Array]"===l(t)};var Ot=p?f:function(t){return null!==t&&"object"==typeof t&&!_t(t)&&"number"==typeof t.length&&bt(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!jt(t,"callee")},St=Array.prototype.slice;function Et(t){return null!==t&&"object"==typeof t}q(Et,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(W("invalid argument. Must provide a function. Value: `%s`.",t));return function(n){var e,r;if(!_t(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(Et));var Tt=jt((function(){}),"prototype"),kt=!jt({toString:null},"toString"),It=9007199254740991;function Pt(t,n,e){var r,i,o;if(!(o=t,"object"==typeof o&&null!==o&&"number"==typeof o.length&&bt(o.length)&&o.length>=0&&o.length<=It||J(t)))throw new TypeError(W("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(r=t.length))return-1;if(3===arguments.length){if(!mt(e))throw new TypeError(W("invalid argument. Third argument must be an integer. Value: `%s`.",e));if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(pt(n)){for(;i<r;i++)if(pt(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}var Vt=/./;function At(t){return"boolean"==typeof t}var Ft=Boolean,Nt=Boolean.prototype.toString;var $t=r();function Ct(t){return"object"==typeof t&&(t instanceof Ft||($t?function(t){try{return Nt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===l(t)))}function Bt(t){return At(t)||Ct(t)}q(Bt,"isPrimitive",At),q(Bt,"isObject",Ct);var Lt="object"==typeof self?self:null,Rt="object"==typeof window?window:null,Gt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Wt="object"==typeof Gt?Gt:null,Xt="object"==typeof globalThis?globalThis:null;var Zt=function(t){if(arguments.length){if(!At(t))throw new TypeError(W("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(Xt)return Xt;if(Lt)return Lt;if(Rt)return Rt;if(Wt)return Wt;throw new Error("unexpected error. Unable to resolve global object.")}(),Mt=Zt.document&&Zt.document.childNodes,Yt=Int8Array;function Ut(){return/^\s*function\s*([^(]*)/i}var Ht=/^\s*function\s*([^(]*)/i;function zt(t){var n,e,r,i;if(("Object"===(e=l(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=Ht.exec(r.toString()))return n[1]}return Et(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}q(Ut,"REGEXP",Ht);var Dt="function"==typeof Vt||"object"==typeof Yt||"function"==typeof Mt?function(t){return zt(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?zt(t).toLowerCase():n};function qt(t){return t.constructor&&t.constructor.prototype===t}var Jt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Kt="undefined"==typeof window?void 0:window;var Qt=function(){var t;if("undefined"===Dt(Kt))return!1;for(t in Kt)try{-1===Pt(Jt,t)&&u(Kt,t)&&null!==Kt[t]&&"object"===Dt(Kt[t])&&qt(Kt[t])}catch(t){return!0}return!1}(),tn="undefined"!=typeof window;var nn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var en=n?function(){return 2!==(t(arguments)||"").length}(1,2)?function(n){return Ot(n)?t(St.call(n)):t(n)}:t:function(t){var n,e,r,i,o,a,c;if(i=[],Ot(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!Et(t))return i;e=Tt&&r}for(o in t)e&&"prototype"===o||!u(t,o)||i.push(String(o));if(kt)for(n=function(t){if(!1===tn&&!Qt)return qt(t);try{return qt(t)}catch(t){return!1}}(t),c=0;c<nn.length;c++)a=nn[c],n&&"constructor"===a||!u(t,a)||i.push(String(a));return i};function rn(t){return"function"===Dt(t)}var on,un=Object,an=Object.getPrototypeOf;on=rn(Object.getPrototypeOf)?an:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===l(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var cn=on;var ln=Object.prototype;function fn(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!_t(t)}(t)&&(n=function(t){return null==t?null:(t=un(t),cn(t))}(t),!n||!u(t,"constructor")&&u(n,"constructor")&&rn(n.constructor)&&"[object Function]"===l(n.constructor)&&u(n,"isPrototypeOf")&&rn(n.isPrototypeOf)&&(n===ln||function(t){var n;for(n in t)if(!u(t,n))return!1;return!0}(t)))}var pn=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function sn(){return pn.slice()}var gn={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function yn(){var t;return 0===arguments.length?gn.all.slice():(t=gn[arguments[0]])?t.slice():[]}function bn(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function dn(t,n,e){D(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}q(yn,"enum",bn),function(t,n){var e,r,i;for(e=en(n),i=0;i<e.length;i++)dn(t,r=e[i],n[r])}(yn,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var mn={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function hn(){return{bool:mn.bool,int8:mn.int8,uint8:mn.uint8,uint8c:mn.uint8c,int16:mn.int16,uint16:mn.uint16,int32:mn.int32,uint32:mn.uint32,int64:mn.int64,uint64:mn.uint64,float32:mn.float32,float64:mn.float64,complex64:mn.complex64,complex128:mn.complex128,binary:mn.binary,generic:mn.generic,notype:mn.notype,userdefined_type:mn.userdefined_type}}q(sn,"enum",hn),function(t,n){var e,r,i;for(e=en(n),i=0;i<e.length;i++)dn(t,r=e[i],n[r])}(sn,hn());var vn=function(t,n){var e,r,i,o,a,c,l,f=!0;if(!Et(t))throw new TypeError(W("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!fn(n))throw new TypeError(W("invalid argument. Options argument must be an object. Value: `%s`.",n));if(u(n,"duplicates")&&!At(f=n.duplicates))throw new TypeError(W("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",f))}if(r=(e=en(t)).length,a={},f)for(l=0;l<r;l++)u(a,o=t[i=e[l]])?(c=a[o],_t(c)?a[o].push(i):a[o]=[c,i]):a[o]=i;else for(l=0;l<r;l++)a[t[i=e[l]]]=i;return a}(hn(),{duplicates:!1});var wn=hn();function xn(t){var n=typeof t;return"string"===n?function(t){var n=wn[t];return"number"==typeof n?n:null}(t)?t:null:"number"===n?function(t){var n=vn[t];return"string"==typeof n?n:null}(t):null}var jn,_n={float64:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:1},int32:{float64:1,float32:0,int32:1,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:0,uint8c:0,complex128:1,complex64:1,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,generic:1},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:1},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,generic:1}};var On=function(t){return 0===arguments.length?function(){var t,n,e,r,i,o,u,a,c;for(e={},n=(t=en(_n)).length,c=0;c<n;c++){for(i=t[c],u=_n[i],r={},a=0;a<n;a++)r[o=t[a]]=u[o];e[i]=r}return e}():(void 0===jn&&(jn=function(){var t,n,e,r,i,o,u,a,c;for(e={},n=(t=en(_n)).length,c=0;c<n;c++){for(i=t[c],u=_n[i],r=[],a=0;a<n;a++)1===u[o=t[a]]&&r.push(o);e[i]=r}return e}()),t=xn(t),u(jn,t)?jn[t].slice():null)}();function Sn(t,n){return t===n||On[t][n]>0}export{Sn as default};
//# sourceMappingURL=mod.js.map
