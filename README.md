# **super_galactic_age_calculator**
Updated: 2020-11-16
## **Project Description**
This project will calculate the relative age and years left to live of a person, on different planets in the solar system.  These calculations use user defined variables for age and life expectancy on earth.

## **Required for Use**
A browser that can run HTML5 is required.
## **Installation Instructions**
**Option 1** (direct download)
1) Copy and paste the following GitHub project link into your web browser's url bar and hit enter/return. https://github.com/RMGit-it/super_galactic_age_calculator
2) Download a .zip copy the repository by clicking on the large green "Code" button near the upper right corner of the screen.
3) Right click the .zip file and extract(unzip) it's contents.
4) Open the unzipped folder and launch the file named "index.html".  If the file does not automatically launch using your default web browser, you can right click on the file and choose which application you would like to open the index.html file with.

**Option 2** (via git console/terminal)
1) Open your Git enabled terminal/console and navigate to a directory that you wish to download this project to.
2) Type the following line of code into your terminal/console to automatically download the project to your current direcory and hit return/enter

<code>git clone https://github.com/RMGit-it/super_galactic_age_calculator</code>
3) Once the project has finished downloading, navigate to the root directory of the project in the terminal/console, and type <code>code .</code> and then hit return/enter.

The project should automatically launch using your default application(s).
## **Usage / Examples**
Name: Pat<br>
Age: 50<br>
Life Expectancy: 100

Pat on Earth, you are 50 years old.

* On Mercury, you would be 208 years old. Given your life expectancy of 100 Earth years, you have about 208 Mercury-years left to life there.

* On Venus, you would be 80 years old. Given your life expectancy of 100 Earth years, you have about 81 Venus-years left to life there.

* On Mars, you would be 26 years old. Given your life expectancy of 100 Earth years, you have about 27 Mars-years left to life there.

* On Jupiter, you would be 4 years old. Given your life expectancy of 100 Earth years, you have about 4 Jupiter-years left to life there.
## **Planned Features**
No new features are planned at this time.
## **Specs**
<br>

__SolarSystem()__

| Test | Input | Output |
| :-- | :--| :-- |
| Should correctly create a an instance of SolarSystem. | solarSystem | {mercury: "Mercury", venus: "Venus", mars: "Mars", jupiter: "Jupiter"} |
| Should correctly create an instance of SolarSystem with array properties. | solarSystem | {mercury: ["Mercury", .24], venus: ["Venus", .62], mars: ["Mars", 1.88], jupiter: ["Jupiter", 11.86]}  |
| Should correctly create a an instance of SolarSystem(). | solarSystem.planets | [] |
| Should correctly multiply a persons age by each planet's yearFactor. | person | [12, 31, 94, 593] |
| Should correctly add an instance of Planet() to SolarSystem() | solarSystem.planets[0].name, solarSystem.planets[0].factor | "Mercury", .24 |


<br>

__Planet()__
| Test | Input | Output |
| :-- | :--| :-- |
| Should correctly create and instance of Planet() with properties 'name' and 'factor'. | planet | {name: "Mercury", factor: .24} |

<br>

__Person()__
| Test | Input | Output |
| :-- | :--| :-- |
| Should correctly create an instance of Person(). | person | {name: "Bob", age: 50, lifeExpect: 100} |

<br>

<br>

__Description: SolarSystem()__

Test: Should correctly create a an instance of SolarSystem().
Code: solarSystem = new SolarSystem()
Input: solarSystem
Output: {mercury: "Mercury", venus: "Venus", mars: "Mars", jupiter: "Jupiter"}

Test: Should correctly create an instance of SolarSystem() with array properties.
Code: solarSystem = new SolarSystem()
Input: solarSystem
Output: {mercury: ["Mercury", .24], venus: ["Venus", .62], mars: ["Mars", 1.88], jupiter: ["Jupiter", 11.86]} 

Test: Should correctly create a an instance of SolarSystem().
Code: solarSystem = new SolarSystem()
Input: solarSystem.planets
Output: []

Test: Should correctly multiply a persons age by each planet's yearFactor.
Code: solarSystem = new SolarSystem()
Code: person = new Person("Bob", 50, 100)
Input: solarSystem.checkAge(person)
Output: [208, 80, 26, 4]

Test: Should correctly add an instance of Planet() to SolarSystem()
Code: addPlanet(mercury)
Input: solarSystem.planets[0].name
Input: solarSystem.planets[0].factor
Output: "Mercury"
Output: .24

Test: Should correctly determine a persons life expectancy in planet-years.
Code: person = new Person("Bob, 50, 100)
Input: solarSystem.checkLifeExpect(person)
Output: [416, 161, 53, 8]

Test: Should correctly determine the expect remaining planet-years of life.
Input: ageArray - lifeExpectArray
Output: [208, 81, 27, 4]

<br>

__Description: Planet()__

Test: Should correctly create and instance of Planet() with properties 'name' and 'factor'.
Code: mercury = new Planet("Mercury", .24)
Input: planet
Output: {name: "Mercury", factor: .24}

<br>

__Description: Person()__

Test: Should correctly create an instance of Person().
Code: person = new Person("Bob", 50, 100)
Input: person
Output: {name: "Bob", age: 50, lifeExpect: 100}

## **Known Bugs**
There are no known bugs
## **Technology Used**
* HTML
* JavaScript
* Bootstrap
* jQuery
* CSS
* webpack
* Jest

## **Authors and Contributors**
Authored by: Randel Moore
Initial Start Date: 2020-11-13
## **Contact**
RMGit.it@gmail.com
## **License**

GPLv3

Copyright © 2020 Randel Moore
