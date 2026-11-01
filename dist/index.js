"use strict";var q=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var o=q(function(A,f){
var p=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-assert-is-infinite/dist'),s=require('@stdlib/math-base-special-pow/dist'),c=require('@stdlib/math-base-special-floor/dist'),E=require('@stdlib/math-base-special-ceil/dist'),I=require('@stdlib/math-base-special-log10/dist'),M=require('@stdlib/constants-float64-max-base10-exponent/dist'),N=require('@stdlib/constants-float64-min-base10-exponent-subnormal/dist'),X=1e308,_=1e-323;function d(e){var r,i,a,t,u,v,n;return p(e)||l(e)||e===0?e:(e<0?(e=-e,r=-1):r=1,n=I(e),a=c(n),t=E(n),a===N?r*_:a===M?r*X:(u=s(10,a),v=s(10,t),i=(v-u)/2,u+i>e?r*u:r*v))}f.exports=d
});var g=o();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
