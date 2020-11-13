export class SolarSystem {
  constructor() {
    this.planets = [];
  }

  addPlanet(planet) {
    this.planets.push(planet);
  }
  // constructor(mercury, venus, mars, jupiter) {
  //   this.mercury = ["Mercury", .24];
  //   this.venus = ["Venus", .62];
  //   this.mars = ["Mars", 1.88];
  //   this.jupiter = ["Jupiter", 11.86];
  // }


  yearFactor(person) {
    let ageArray = [];
    ageArray.push(this.mercury[1] * person.age);
    ageArray.push(this.venus[1] * person.age);
    ageArray.push(this.mars[1] * person.age);
    ageArray.push(this.jupiter[1] * person.age);
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
