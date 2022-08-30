const { generatorDiv } = require("./dom");

require("./jsdom-config");

describe("DOM test", () => {
  test("test dom operator", () => {
    generatorDiv();
    expect(document.getElementsByClassName("c1").length).toBe(1);
  });
});
