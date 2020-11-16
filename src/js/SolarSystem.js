export class SolarSystem {
  constructor() {
    this.planets = [];
  }

  addPlanet(planet) {
    this.planets.push(planet);
  }

  yearFactor(person) {
    let ageArray = [];
    for (let i = 0; i < this.planets.length; i++) {
      ageArray.push(Math.floor(person.age / this.planets[i].factor));
    } 
    return ageArray;
  }

  ageExpectFactor(person) {
    let ageExpectArray = [];
    for (let i = 0; i < this.planets.length; i++) {
      ageExpectArray.push(Math.floor(person.lifeExpect / this.planets[i].factor));
    } 
    return ageExpectArray;
  }
}

//pseudo code

//input age
//input life expectancy

//class (
// planet1
// planet2
// planet3)

//constructor person(
// age
// life expectancy


//use template literals for output statements (strings).
