
define(function(require, exports, module)
{
    var MAIN = require("./main.js");

    exports.init = function()
    {
        module.log(MAIN.getExtraModuleGreeting());
    }
});
