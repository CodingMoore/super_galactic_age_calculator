import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Person } from "../src/js/Person.js";
import { Planet } from "../src/js/Planet.js";
import { SolarSystem } from "../src/js/SolarSystem.js";
  
function outputText() {
    for (let i = 0; i < solarSystem.planets.length; i++) {
      "<li>" + "On "  + solarSystem.planets[i].name + ", you would be " + solarSystem.planetAge[i] + " years old.  Given your life expectancy, of " + lifeExpect + " Earth years, you have about " + solarSystem.planetYearsLeft[i] + "-" + solarSystem.planets[i] + " left to life there." + "</li>"
    }
  }

$("#submit").click(function(event) {
  event.preventDefault();
  let ageArray = [];
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
  $("#outputText1").text(name + "on Earth, you are " + age + " years old.");
  $("#outputText2").text(outputText());
});

