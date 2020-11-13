export class SolarSystem {
  constructor() {
    this.planets = [];
  }

  addPlanet(planet) {
    this.planets.push(planet);
  }

  yearFactor(person) {
    let ageArray = [];
    this.planets.forEach(function(element) {
      ageArray.push(this.planets.factor * person.age);
    });
  }

  // yearFactor(person) {
  //   let ageArray = [];
  //   ageArray.push(this.mercury[1] * person.age);
  //   ageArray.push(this.venus[1] * person.age);
  //   ageArray.push(this.mars[1] * person.age);
  //   ageArray.push(this.jupiter[1] * person.age);
  //   return ageArray;
  // }
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
