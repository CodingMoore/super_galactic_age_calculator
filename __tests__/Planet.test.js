import { Planet } from "../src/js/Planet.js";

describe("Planet", () => {

  let mercury;
  let venus;
  let mars;
  let jupiter;

  beforeEach(() => {
  mercury = new Planet("Mercury", .24);
  venus = new Planet("Venus", .62);
  mars = new Planet("Mars", 1.88);
  jupiter = new Planet("Jupiter", 11.86);
  });

  Test("Should correctly create and instance of Planet() with properties 'name' and 'factor'.", () => {
    expect(mercury).toEqual({name: "Mercury", .2})
  });

});