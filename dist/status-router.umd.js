(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('express'), require('fs')) :
    typeof define === 'function' && define.amd ? define(['exports', 'express', 'fs'], factory) :
    (factory((global.statusRouter = {}),global.express,global.fs));
}(this, (function (exports,express,fs) { 'use strict';

    var router = express.Router();
    var health = function (_, res) {
        res.json({ message: "OK" });
    };
    var version = function (_, res) {
        var json = JSON.parse(fs.readFileSync("package.json", "utf8"));
        var version = json.version;
        var info = {
            commit: process.env.GIT_COMMIT,
            packageVersion: version,
        };
        res.json(info);
    };
    router.get("/health", health);
    router.get("/version", version);

    exports.health = health;
    exports.version = version;
    exports.default = router;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=status-router.umd.js.map
