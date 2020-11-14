import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Person } from "../src/js/Person.js";
import { Planet } from "../src/js/Planet.js";
import { SolarSystem } from "../src/js/SolarSystem.js";

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
  // ageArray = solarSystem.yearFactor(person);
  console.log(solarSystem.yearFactor(person));
  let yearsLeft = lifeExpect - ageArray[0];
  $("#outputText").text(name + ", on Mercury, you would be " + ageArray[0] + " years old.  You have about " + yearsLeft + " to live.");
});


