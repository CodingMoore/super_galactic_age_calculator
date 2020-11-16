export class SolarSystem {
  constructor() {
    this.planets = [];
    this.planetAge = [];
    this.planetLifeExpect = [];
    this.planetYearsLeft = [];
  }

  addPlanet(planet) {
    this.planets.push(planet);
  }

  yearFactor(person) {
    for (let i = 0; i < this.planets.length; i++) {
      this.planetAge.push(Math.floor(person.age / this.planets[i].factor));
    } 
    return this.planetAge;
  }

  ageExpectFactor(person) {
    for (let i = 0; i < this.planets.length; i++) {
      this.planetLifeExpect.push(Math.floor(person.lifeExpect / this.planets[i].factor));
    } 
    return this.planetLifeExpect;
  }

  lifeExpectancy(person) {
    for (let i = 0; i < this.planets.length; i++) {
      this.planetYearsLeft.push(Math.floor(person.lifeExpect / this.planets[i].factor) - Math.floor(person.age / this.planets[i].factor));
    } 
    return this.planetYearsLeft;
  } 
}