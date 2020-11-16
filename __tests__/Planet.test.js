import { Planet } from "../src/js/Planet.js";

describe("Planet", () => {

  let mercury;

  beforeEach(() => {
  mercury = new Planet("Mercury", .24);
  });

  test("Should correctly create and instance of Planet() with properties 'name' and 'factor'.", () => {
    expect(mercury).toEqual({name: "Mercury", factor: .24});
  });

});