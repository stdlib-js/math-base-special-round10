"use strict";var q=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var o=q(function(A,f){
var p=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-assert-is-infinite/dist'),s=require('@stdlib/math-base-special-pow/dist'),c=require('@stdlib/math-base-special-floor/dist'),E=require('@stdlib/math-base-special-ceil/dist'),I=require('@stdlib/math-base-special-log10/dist'),M=require('@stdlib/constants-float64-max-base10-exponent/dist'),N=require('@stdlib/constants-float64-min-base10-exponent-subnormal/dist'),X=1e308,_=1e-323;function d(r){var e,n,i,t,a,u,v;return p(r)||l(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,v=I(r),i=c(v),t=E(v),i===N?e*_:i===M?e*X:(a=s(10,i),u=s(10,t),n=(u-a)/2,a+n>r?e*a:e*u))}f.exports=d
});var g=o();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
