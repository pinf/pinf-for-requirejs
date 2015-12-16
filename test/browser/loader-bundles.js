
define(function() {

	function getFeatures() {
		return [
			// NOTE: DO NOT EDIT THIS LIST! IT IS AUTO-GENERATED ON `make build`.
			// @inject <features>
			'01-HelloWorld',
			'02-ReturnExports',
			'03-SpecifyMain',
			'04-PackageLocalDependencies',
			'05-CrossPackageDependencies',
			'06-JsonModule',
			'07-TextModule',
			'08-ResourceURI',
			'09-LoadBundle',
			'10-Sandbox',
			'11-CrossDomain',
			'12-Environment',
			'13-AssignExports',
			'14-NamedBundle',
			'15-GlobalDependencyFallback',
			'16-MemoizedDynamic',
			'17-LoadPackageDependency'
			// @inject </features>
		];
	}

    describe("loader-bundles", function() {

    	getFeatures().forEach(function(feature) {
	        it(feature, function(done) {
				require([
					"pinf!feature/" + feature
				], function(sandbox) {
	                return Q.when(sandbox.main({
	                    debug: true
	                }), function() {
	                    return done(null);
	                }).fail(done);
		        }, done);
		    });
		});

		it("verify output", function() {
			ASSERT.deepEqual(logBuffer, {
			    "/01-HelloWorld/main.js": "Hello from 01-HelloWorld!",
			    "/02-ReturnExports/main.js": "Hello from 02-ReturnExports!",
			    "/03-SpecifyMain/init.js": "Hello from 03-SpecifyMain!",
			    "/04-PackageLocalDependencies/main.js": "Hello from 04-PackageLocalDependencies!",
			    "/05-CrossPackageDependenciespackageA/logger.js": "Hello from 05-CrossPackageDependencies!",
			    "/06-JsonModule/main.js": "Hello from 06-JsonModule!",
			    "/07-TextModule/main.js": "Hello from 07-TextModule!",
			    "/08-ResourceURI/main.js": "Hello from 08-ResourceURI!",
			    "/09-LoadBundle/main.js": "Hello from 09-LoadBundle!",
			    "/09-LoadBundle/ExtraBundle.js": "Hello from 09-LoadBundle/ExtraBundle!",
			    "/10-Sandbox/main.js": "Hello from 10-Sandbox!",
			    "/10-Sandbox/SandboxedExtraBundle/main.js": "Hello from 10-Sandbox/SandboxedExtraBundle!",
			    "/11-CrossDomain/main.js": "Hello from 11-CrossDomain!",
			    "http://rawgithub.com/pinf/pinf-loader-js/master/features/11-CrossDomain/CrossDomainBundle/main.js": "Hello from 11-CrossDomain/CrossDomainBundle!",
			    "/12-Environment/main.js": "Hello from 12-Environment!",
			    "/13-AssignExports/main.js": "Hello from 13-AssignExports!",
			    "/14-NamedBundle/main.js": "Hello from 14-NamedBundle!",
			    "/15-GlobalDependencyFallbackpackageA/logger.js": "Hello from 15-GlobalDependencyFallback!",
			    "/16-MemoizedDynamic/main.js": "Hello from 16-MemoizedDynamic!",
      			"/16-MemoizedDynamic/Dynamic.js": "Hello from 16-MemoizedDynamic/Dynamic!",
      			"/17-LoadPackageDependency/main.js": "Hello from 17-LoadPackageDependency!",
				"/17-LoadPackageDependencyExtraPackageID/ExtraModule.js": "Hello from 17-LoadPackageDependency/ExtraPackageID/ExtraModule!"
			});
		});

    });

});
