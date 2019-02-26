import * as express from "express";
import { Response } from "express";
import * as fs from "fs";

const router = express.Router();

export const health = (_: any, res: Response) => {
    res.json({ message: "OK" });
};

export const version = (_: any, res: Response) => {
    const json = JSON.parse(fs.readFileSync("package.json", "utf8"));
    const version = json.version;
    const info = {
        commit: process.env.GIT_COMMIT,
        packageVersion: version,
    };
    res.json(info);
};

router.get("/health", health);
router.get("/version", version);

export default router;

