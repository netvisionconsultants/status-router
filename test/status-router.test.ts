import { health, version } from "../src/status-router";

describe("status-router", () => {
  it("health function returns success", () => {
    const jsonMock = jest.fn();
    const res: any = {
      json: jsonMock,
    };
    health(null, res);
    expect(jsonMock).toBeCalledWith({ message: "OK" });
  });

  it("health function returns success", () => {
    const jsonMock = jest.fn();
    const res: any = {
      json: jsonMock,
    };
    version(null, res);
    expect(jsonMock).toBeCalled();
  });
});
