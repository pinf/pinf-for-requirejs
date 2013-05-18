
PINF.bundle("", function(require) {
	require.memoize("/main.js", function(require, exports, module) {
		exports.main = function(options) {
			document.body.innerHTML += "<h1>Hello World</h1>";
			console.log("Hello World");
		}
	});
});
