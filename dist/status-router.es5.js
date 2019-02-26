import { Router } from 'express';
import { readFileSync } from 'fs';

var router = Router();
var health = function (_, res) {
    res.json({ message: "OK" });
};
var version = function (_, res) {
    var json = JSON.parse(readFileSync("package.json", "utf8"));
    var version = json.version;
    var info = {
        commit: process.env.GIT_COMMIT,
        packageVersion: version,
    };
    res.json(info);
};
router.get("/health", health);
router.get("/version", version);

export default router;
export { health, version };
//# sourceMappingURL=status-router.es5.js.map
