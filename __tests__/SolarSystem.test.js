import { SolarSystem } from '../src/js/SolarSystem.js';
import { Person } from '../src/js/Person.js';

describe('SolarSystem', () => {
  
  let solarSystem;
  let person;

  beforeEach(() => {
    solarSystem = new SolarSystem();
    person = new Person("Bob", 50, 100);
  });

  // test('Should correctly create a an instance of SolarSystem', () => {
  //   expect(solarSystem).toEqual({mercury: "Mercury", venus: "Venus", mars: "Mars", jupiter: "Jupiter"});
  // });

  test('Should correctly create an instance of SolarSystem with array properties.', () => {
    expect(solarSystem).toEqual({mercury: ["Mercury", .24], venus: ["Venus", .62], mars: ["Mars", 1.88], jupiter: ["Jupiter", 11.86]});
  });

  test("Should correctly multiply a persons age by each planet's yearFactor (solarsystem.planet[1])", () => {
    expect(solarSystem.yearFactor(person)).toEqual([12, 31, 94, 594]);
  });

});