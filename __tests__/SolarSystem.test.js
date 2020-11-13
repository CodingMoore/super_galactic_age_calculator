import { SolarSystem } from '../src/js/SolarSystem.js';

describe('SolarSystem', () => {
  
  let solarSystem;

  beforeEach(() => {
    solarSystem = new SolarSystem();
  });

  test('Should correctly create a an instance of SolarSystem', () => {
    console.log(solarSystem)
    expect(solarSystem).toEqual({mercury: "mercury", venus: "venus", mars: "mars", jupiter: "jupite"});
  });
});