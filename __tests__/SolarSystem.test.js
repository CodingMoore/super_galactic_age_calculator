import { SolarSystem } from '../src/js/SolarSystem.js';

describe('SolarSystem', () => {
  
  let solarSystem;

  beforeEach(() => {
    solarSystem = new SolarSystem();
  });

  // test('Should correctly create a an instance of SolarSystem', () => {
  //   console.log(solarSystem)
  //   expect(solarSystem).toEqual({mercury: "Mercury", venus: "Venus", mars: "Mars", jupiter: "Jupiter"});
  // });

  test('Should correctly create an instance of SolarSystem with array properties.', () => {
    console.log(solarSystem)
    expect(solarSystem).toEqual({mercury: ["Mercury", .24], venus: ["Venus", .62], mars: ["Mars", 1.88], jupiter: ["Jupiter", 11.86]});
  });

});