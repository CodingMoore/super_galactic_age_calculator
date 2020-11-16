import { SolarSystem } from '../src/js/SolarSystem.js';
import { Person } from '../src/js/Person.js';
import { Planet } from '../src/js/Planet.js';

describe('SolarSystem', () => {
  
  let solarSystem;
  let person;
  let mercury;
  let venus;
  let mars;
  let jupiter;

  beforeEach(() => {
    solarSystem = new SolarSystem();
    mercury = new Planet("Mercury", .24);
    venus = new Planet("Venus", .62);
    mars = new Planet("Mars", 1.88);
    jupiter = new Planet("Jupiter", 11.86);
    person = new Person("Bob", 50, 100);
    solarSystem.addPlanet(mercury);
    solarSystem.addPlanet(venus);
    solarSystem.addPlanet(mars);
    solarSystem.addPlanet(jupiter);
  });

  // test('Should correctly create a an instance of SolarSystem', () => {
  //   expect(solarSystem).toEqual({mercury: "Mercury", venus: "Venus", mars: "Mars", jupiter: "Jupiter"});
  // });

  // test('Should correctly create an instance of SolarSystem with array properties.', () => {
  //   expect(solarSystem).toEqual({mercury: ["Mercury", .24], venus: ["Venus", .62], mars: ["Mars", 1.88], jupiter: ["Jupiter", 11.86]});
  // });

  // test("Should correctly multiply a persons age by each planet's yearFactor (solarsystem.planet[1])", () => {
  //   expect(solarSystem.yearFactor(person)).toEqual([12, 31, 94, 593]);
  // });

  // test("Should correctly create an instance of SolarSystem()", () => {
  //   expect(solarSystem.planets).toEqual([]);
  // });

  test("Should correctly add an instance of Planet() to SolarSystem()", () => {
    expect(solarSystem.planets[0].name).toEqual("Mercury");
    expect(solarSystem.planets[0].factor).toEqual(.24);
  });

  test("Should correctly multiply a persons age by each planet's yearFactor", () => {
    expect(solarSystem.yearFactor(person)).toEqual([208, 80, 26, 4]);
  });

  test("Should correctly determine a persons life expectancy in planet-years.", () => {
    expect(solarSystem.ageExpectFactor(person)).toEqual([416, 161, 53, 7]);
  });
  
});