/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var SMALLEST_SUBNORMAL = require( '@stdlib/constants-float64-smallest-subnormal' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var isNegativeZero = require( '@stdlib/math-base-assert-is-negative-zero' );
var isPositiveZero = require( '@stdlib/math-base-assert-is-positive-zero' );
var round10 = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof round10, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `+0` if provided `+0`', function test( t ) {
	var v;

	v = round10( 0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	v = round10( +0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-0` if provided `-0`', function test( t ) {
	var v = round10( -0.0 );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var v = round10( NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+infinity` if provided `+infinity`', function test( t ) {
	var v = round10( PINF );
	t.strictEqual( v, PINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-infinity` if provided `-infinity`', function test( t ) {
	var v = round10( NINF );
	t.strictEqual( v, NINF, 'returns expected value' );
	t.end();
});

tape( 'the function does not overflow', function test( t ) {
	var x;
	var v;

	x = 1.7976931348623157e+308;
	v = round10( x );
	t.strictEqual( v, 1.0e308, 'returns expected value' );

	x = -1.7976931348623157e+308;
	v = round10( x );
	t.strictEqual( v, -1.0e308, 'returns expected value' );

	t.end();
});

tape( 'the function supports rounding subnormal values', function test( t ) {
	var x;
	var v;

	x = 1.5e-318;
	v = round10( x );
	t.strictEqual( v, 1.0e-318, 'returns expected value' );

	x = 9.99e-318;
	v = round10( x );
	t.strictEqual( v, 1.0e-317, 'returns expected value' );

	x = -1.5e-318;
	v = round10( x );
	t.strictEqual( v, -1.0e-318, 'returns expected value' );

	x = -9.99e-318;
	v = round10( x );
	t.strictEqual( v, -1.0e-317, 'returns expected value' );

	x = SMALLEST_SUBNORMAL;
	v = round10( x );
	t.strictEqual( v, 1.0e-323, 'returns expected value' );

	x = -SMALLEST_SUBNORMAL;
	v = round10( x );
	t.strictEqual( v, -1.0e-323, 'returns expected value' );

	t.end();
});

tape( 'the function rounds a numeric value to the nearest power of 10 on a linear scale', function test( t ) {
	t.strictEqual( round10( -4.2 ), -1.0, 'returns expected value' );
	t.strictEqual( round10( -4.5 ), -1.0, 'returns expected value' );
	t.strictEqual( round10( -4.8 ), -1.0, 'returns expected value' );
	t.strictEqual( round10( 4.2 ), 1.0, 'returns expected value' );
	t.strictEqual( round10( 9.99999 ), 10.0, 'returns expected value' );
	t.strictEqual( round10( 9.5 ), 10.0, 'returns expected value' );
	t.strictEqual( round10( 9.4 ), 10.0, 'returns expected value' );
	t.strictEqual( round10( 12.0 ), 10.0, 'returns expected value' );
	t.strictEqual( round10( -12.0 ), -10.0, 'returns expected value' );
	t.strictEqual( round10( 13.0 ), 10.0, 'returns expected value' );
	t.strictEqual( round10( -13.0 ), -10.0, 'returns expected value' );
	t.strictEqual( round10( 23.0 ), 10.0, 'returns expected value' );
	t.strictEqual( round10( -23.0 ), -10.0, 'returns expected value' );
	t.strictEqual( round10( 0.0 ), 0.0, 'returns expected value' );
	t.strictEqual( round10( 27.0 ), 10.0, 'returns expected value' );
	t.strictEqual( round10( -27.0 ), -10.0, 'returns expected value' );
	t.strictEqual( round10( 48.1 ), 10.0, 'returns expected value' );
	t.strictEqual( round10( -48.1 ), -10.0, 'returns expected value' );
	t.strictEqual( round10( 60.1 ), 100.0, 'returns expected value' );
	t.strictEqual( round10( -60.1 ), -100.0, 'returns expected value' );
	t.strictEqual( round10( 0.3 ), 0.1, 'returns expected value' );
	t.strictEqual( round10( -0.3 ), -0.1, 'returns expected value' );
	t.strictEqual( round10( 0.45 ), 0.1, 'returns expected value' );
	t.strictEqual( round10( -0.45 ), -0.1, 'returns expected value' );
	t.strictEqual( round10( 0.61 ), 1.0, 'returns expected value' );
	t.strictEqual( round10( -0.61 ), -1.0, 'returns expected value' );
	t.end();
});
