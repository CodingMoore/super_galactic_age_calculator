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
