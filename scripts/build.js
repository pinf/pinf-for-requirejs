
const PATH = require("path");
const FS = require("fs-extra");

const ROOT_PATH = PATH.dirname(__dirname);


exports.build = function(callback) {

	console.log("Building files ...");

	return injectLoader(function(err) {
		if (err) return callback(err);

		return injectFeatureList(function(err) {
			if (err) return callback(err);

			console.log("... Built files successfully!");

			return callback(null);
		});
	});
}

function injectLoader(callback) {

	var path = PATH.join(ROOT_PATH, "pinf.js");

	var code = FS.readFileSync(path).toString();


//console.log("pluginCode", code);


	return callback(null);	
}

function injectFeatureList(callback) {

	var path = PATH.join(ROOT_PATH, "test/browser/loader-bundles.js");

	var code = FS.readFileSync(path).toString();

	var features = FS.readdirSync(PATH.join(ROOT_PATH, "node_modules/pinf-loader-js/features")).filter(function(filename) {
		return /^\d*-.*?\.js$/.test(filename);
	}).map(function(filename) {
		return filename.replace(/\.js$/, "");
	});

	code = code.replace(/(\/\/ @inject <features>)\n[\s\S]*?(\n\s+)(\/\/ @inject <\/features>\n)/, "$1$2'" + features.join("',$2'") + "'$2$3");

	FS.writeFileSync(path, code);

	return callback(null);	
}


if (require.main === module) {
    exports.build(function(err) {
    	if (err) {
    		console.error(err.stack);
    		process.exit(1);
    	}
    	process.exit(0);
    });
}
