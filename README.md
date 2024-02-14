<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# round10

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Round a numeric value to the nearest power of 10 on a linear scale.



<section class="usage">

## Usage

```javascript
import round10 from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round10@deno/mod.js';
```

#### round10( x )

Rounds a `numeric` value to the nearest power of 10 on a linear scale.

```javascript
var v = round10( -4.2 );
// returns -1.0

v = round10( -4.5 );
// returns -1.0

v = round10( -4.6 );
// returns -1.0

v = round10( 9.99999 );
// returns 10.0

v = round10( 9.5 );
// returns 10.0

v = round10( 13.0 );
// returns 10.0

v = round10( -13.0 );
// returns -10.0

v = round10( 0.0 );
// returns 0.0

v = round10( -0.0 );
// returns -0.0

v = round10( Infinity );
// returns Infinity

v = round10( -Infinity );
// returns -Infinity

v = round10( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import round10 from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round10@deno/mod.js';

var x;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    v = round10( x );
    console.log( 'Value: %d. Rounded: %d.', x, v );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/ceil10`][@stdlib/math/base/special/ceil10]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of 10 toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math-base/special/floor10`][@stdlib/math/base/special/floor10]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of 10 toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math-base/special/round`][@stdlib/math/base/special/round]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest integer.</span>
-   <span class="package-name">[`@stdlib/math-base/special/round2`][@stdlib/math/base/special/round2]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of two on a linear scale.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-round10.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-round10

[test-image]: https://github.com/stdlib-js/math-base-special-round10/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/math-base-special-round10/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-round10/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-round10?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-round10.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-round10/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-round10/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-round10/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-round10/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-round10/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-round10/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-round10/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-round10/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-round10/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/base/special/ceil10]: https://github.com/stdlib-js/math-base-special-ceil10/tree/deno

[@stdlib/math/base/special/floor10]: https://github.com/stdlib-js/math-base-special-floor10/tree/deno

[@stdlib/math/base/special/round]: https://github.com/stdlib-js/math-base-special-round/tree/deno

[@stdlib/math/base/special/round2]: https://github.com/stdlib-js/math-base-special-round2/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
