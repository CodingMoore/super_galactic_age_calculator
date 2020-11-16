import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Person } from "../src/js/Person.js";
import { Planet } from "../src/js/Planet.js";
import { SolarSystem } from "../src/js/SolarSystem.js";
  

$("#submit").click(function(event) {
  event.preventDefault();
  let solarSystem;
  let mercury;
  let venus;
  let mars;
  let jupiter;
  solarSystem = new SolarSystem();
  mercury = new Planet("Mercury", .24);
  venus = new Planet("Venus", .62);
  mars = new Planet("Mars", 1.88);
  jupiter = new Planet("Jupiter", 11.86);
  solarSystem.addPlanet(mercury);
  solarSystem.addPlanet(venus);
  solarSystem.addPlanet(mars);
  solarSystem.addPlanet(jupiter);
  let name = $("#name").val();
  let age = $("#age").val();
  let lifeExpect = $("#lifeExpect").val();
  let person = new Person(name, age, lifeExpect);
  solarSystem.yearFactor(person);
  solarSystem.ageExpectFactor(person);
  solarSystem.lifeExpectancy(person);
  $("#outputText2").empty();

  function outputText() {
    for (let i = 0; i < solarSystem.planets.length; i++) {
      let planetName = solarSystem.planets[i].name;
      let planetAge = solarSystem.planetAge[i];
      let planetYearsLeft = solarSystem.planetYearsLeft[i];
      let planetOutlived = (-solarSystem.planetYearsLeft[i]);
      if (`${planetAge}` <= `${planetYearsLeft}`) {
        $("#outputText2").append(`<li> On ${planetName}, you would be ${planetAge} years old.  Given your life expectancy of ${lifeExpect} Earth years, you have about ${planetYearsLeft} ${planetName}-years left to life there.</li><br>`);
      } else {
        $("#outputText2").append(`<li>On ${planetName}, you would be ${planetAge} years old.  Given your life expectancy of ${lifeExpect} Earth years, you have outlived your life expectancy by about ${planetOutlived} ${planetName}-years.</li><br>`);
      }
    }
  }
  $("#outputText1").text(name + " on Earth, you are " + age + " years old.");
  outputText();
});

