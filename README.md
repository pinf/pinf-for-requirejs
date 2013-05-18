*Status: DEV*

PINF JavaScript Loader for RequireJS
====================================

A [RequireJS](http://requirejs.org/) [plugin](http://requirejs.org/docs/plugins.html) for
loading [PINF JavaScript Bundles](https://github.com/pinf/pinf-loader-js).

Any portable bundle may be loaded. Modules and packages written for RequireJS may also
be [bundled](https://github.com/pinf-it/pinf-it-bundler) and loaded via the
[PINF JavaScript Bundle Loader](https://github.com/pinf/pinf-loader-js) eliminating
the need for RequireJS, [RequireJS Optimizer](http://requirejs.org/docs/optimization.html)
and [almond](https://github.com/jrburke/almond).


Install
-------

    npm install pinf-for-requirejs


Usage
-----

`http://localhost/index.html`

    <script src="require.js"></script>
    <script>
        requirejs.config({
            paths: {
                pinf: "pinf.require"
            }
        });
        require([
            "pinf!bundle"
        ], function(sandbox) {
            sandbox.main();
        });
    </script>

`http://localhost/bundle.js`

    PINF.bundle("", function(require) {
        require.memoize("/main.js", function(require, exports, module) {
            exports.main = function(options) {
                console.log("HelloWorld!");
            }
        });
    });


Test & Development
==================

Requirements:

  * [NodeJS](http://nodejs.org/)

Run tests:

    make test

Launch development workspace:

    make run-dev
    open http://localhost:8080/

Build
-----

    make build


License
=======

[UNLICENSE](http://unlicense.org/)
