<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# isSafeCast

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Determine whether an array [data type][@stdlib/array/dtypes] can be safely cast to another array [data type][@stdlib/array/dtypes].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/array-base-assert-is-safe-data-type-cast
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var isSafeCast = require( '@stdlib/array-base-assert-is-safe-data-type-cast' );
```

#### isSafeCast( from, to )

Returns a `boolean` indicating whether an array [data type][@stdlib/array/dtypes] can be safely cast to another array [data type][@stdlib/array/dtypes].

```javascript
var bool = isSafeCast( 'float32', 'float64' );
// returns true

bool = isSafeCast( 'float64', 'int32' );
// returns false
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var cartesianSquare = require( '@stdlib/array-cartesian-square' );
var dtypes = require( '@stdlib/array-dtypes' );
var isSafeCast = require( '@stdlib/array-base-assert-is-safe-data-type-cast' );

// Generate a list of dtype pairs:
var dt = cartesianSquare( dtypes() );

// For each data type pair, determine whether one can safely cast from one data type to another...
var i;
for ( i = 0; i < dt.length; i++ ) {
    console.log( '%s. Safe? %s.', dt[i].join( ' => ' ), isSafeCast.apply( null, dt[i] ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-assert-is-safe-data-type-cast.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-assert-is-safe-data-type-cast

[test-image]: https://github.com/stdlib-js/array-base-assert-is-safe-data-type-cast/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-base-assert-is-safe-data-type-cast/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-assert-is-safe-data-type-cast/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-assert-is-safe-data-type-cast?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-assert-is-safe-data-type-cast.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-assert-is-safe-data-type-cast/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-assert-is-safe-data-type-cast/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-base-assert-is-safe-data-type-cast/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-base-assert-is-safe-data-type-cast/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-base-assert-is-safe-data-type-cast/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-base-assert-is-safe-data-type-cast/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-base-assert-is-safe-data-type-cast/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-base-assert-is-safe-data-type-cast/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-assert-is-safe-data-type-cast/main/LICENSE

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array-dtypes

</section>

<!-- /.links -->
