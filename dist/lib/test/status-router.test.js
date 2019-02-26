"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var status_router_1 = require("../src/status-router");
describe("status-router", function () {
    it("health function returns success", function () {
        var jsonMock = jest.fn();
        var res = {
            json: jsonMock,
        };
        status_router_1.health(null, res);
        expect(jsonMock).toBeCalledWith({ message: "OK" });
    });
    it("health function returns success", function () {
        var jsonMock = jest.fn();
        var res = {
            json: jsonMock,
        };
        status_router_1.version(null, res);
        expect(jsonMock).toBeCalled();
    });
});
//# sourceMappingURL=status-router.test.js.map