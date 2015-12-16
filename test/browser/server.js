
const PATH = require("path");
const EXPRESS = require("express");

const PORT = 8080;


exports.main = function(callback) {

    var app = EXPRESS();

    mountStaticDir(app, /^\/mocha\/(.*)/, PATH.join(__dirname, "../../node_modules/mocha"));
    mountStaticDir(app, /^\/chai\/(.*)/, PATH.join(__dirname, "../../node_modules/chai"));
    mountStaticDir(app, /^\/q\/(.*)/, PATH.join(__dirname, "../../node_modules/q"));
    mountStaticDir(app, /^\/jquery\/(.*)/, PATH.join(__dirname, "../../node_modules/jquery/dist"));
    mountStaticDir(app, /^\/pinf-loader-js\/(.*)/, PATH.join(__dirname, "../../node_modules/pinf-loader-js"));
    mountStaticDir(app, /^\/pinf-for-requirejs\/(.*)/, PATH.join(__dirname, "../.."));

    app.get(/^\/.*/, EXPRESS.static(__dirname));

    var server = app.listen(PORT);

    console.log("Open browser to: http://localhost:" + PORT + "/");

    return callback(null, {
        server: server,
        port: PORT
    });
}

function mountStaticDir(app, route, path) {
    app.get(route, function(req, res, next) {
        var originalUrl = req.url;
        req.url = req.params[0];
        EXPRESS.static(path)(req, res, function() {
            req.url = originalUrl;
            return next.apply(null, arguments);
        });
    });
};


if (require.main === module) {
    exports.main(function(err) {
        if (err) {
            console.error(err.stack);
            process.exit(1);
        }
    });
}
