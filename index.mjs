// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log10@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-base10-exponent@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-min-base10-exponent-subnormal@esm/index.mjs";var a=s,o=t,l=e,j=i,p=m,h=n,b=r,c=d;var f=function(s){var t,e,i,m,n,r;return a(s)||o(s)||0===s?s:(s<0?(s=-s,t=-1):t=1,r=h(s),e=j(r),i=p(r),e===c?1e-323*t:e===b?1e308*t:(m=l(10,e))+((n=l(10,i))-m)/2>s?t*m:t*n)};export{f as default};
//# sourceMappingURL=index.mjs.map
