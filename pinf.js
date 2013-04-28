
define({
    load: function (name, req, onload, config) {

		return PINF.sandbox(require.toUrl(name) + ".js", config.pinf || {}, onload, onload.error);

    }
});
