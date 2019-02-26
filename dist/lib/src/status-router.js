"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var fs = require("fs");
var router = express.Router();
exports.health = function (_, res) {
    res.json({ message: "OK" });
};
exports.version = function (_, res) {
    var json = JSON.parse(fs.readFileSync("package.json", "utf8"));
    var version = json.version;
    var info = {
        commit: process.env.GIT_COMMIT,
        packageVersion: version,
    };
    res.json(info);
};
router.get("/health", exports.health);
router.get("/version", exports.version);
exports.default = router;
//# sourceMappingURL=status-router.js.map