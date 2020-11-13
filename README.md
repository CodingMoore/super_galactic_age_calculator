# **PROJECT NAME HERE**
Updated: 2020-11-13
## **Project Description**
This project allows the user to input a number into the input field.  Upon clicking the submit button, the program will read back every whole number from 0 to the input value specified by the user.

The output will also convert every number that contains any of the digits "1","2","3" into a short word or phrase.
## **Required for Use**
A browser that can run HTML5 is required.
## **Installation Instructions**
**Option 1** (live webpage)
1) Follow the link below to access the live version of this webpage.
https://rmgit-it.github.io/mr_robogers_neighborhood/
**Option 2** (direct download)
1) Copy and paste the following GitHub project link into your web browser's url bar and hit enter/return. https://github.com/RMGit-it/mr_robogers_neighborhood
2) Download a .zip copy the repository by clicking on the large green "Code" button near the upper right corner of the screen.
3) Right click the .zip file and extract(unzip) it's contents.
4) Open the unzipped folder and launch the file named "index.html".  If the file does not automatically launch using your default web browser, you can right click on the file and choose which application you would like to open the index.html file with.

**Option 3** (via git console/terminal)
1) Open your Git enabled terminal/console and navigate to a directory that you wish to download this project to.
2) Type the following line of code into your terminal/console to automatically download the project to your current direcory and hit return/enter

<code>git clone https://github.com/RMGit-it/mr_robogers_neighborhood</code>
3) Once the project has finished downloading, navigate to the root directory of the project in the terminal/console, and type <code>code .</code> and then hit return/enter.

The project should automatically launch using your default application(s).
## **Usage / Examples**
Input: 14

Output: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?, Beep!"
## **Planned Features**
No new features are planned at this time.
## **Specs**
| Test | Input | Output |
| :-- | :--| :-- |
SolarSystem()
| Should correctly create a an instance of SolarSystem. | solarSystem | {mercury: "Mercury", venus: "Venus", mars: "Mars", jupiter: "Jupiter"} |
| Should correctly create an instance of SolarSystem with array properties. | solarSystem | {mercury: ["Mercury", .24], venus: ["Venus", .62], mars: ["Mars", 1.88], jupiter: ["Jupiter", 11.86]}  |
| Should correctly multiply a persons age by each planet's yearFactor (solarsystem.planet[1]). | person | [12, 31, 94, 593] |
| Should correctly add an instance of Planet() to SolarSystem() | solarSystem.planets[0].name, solarSystem.planets[0].factor | "Mercury", .24 |
|  |  |  |
|  |  |  |
|  |  |  |
Planet()
| Should correctly create and instance of Planet() with properties 'name' and 'factor'. | planet | {name: "Mercury", factor: .24} |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
Person()
| Should correctlycreate an instance of Person(). | person | {name: "Bob", age: 50, lifeExpect: 100} |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |


Description: SolarSystem()

Test: Should correctly create a an instance of SolarSystem().
Code: solarSystem = new SolarSystem()
Input: solarSystem
Output: {mercury: "Mercury", venus: "Venus", mars: "Mars", jupiter: "Jupiter"}

Test: Should correctly create an instance of SolarSystem() with array properties.
Code: solarSystem = new SolarSystem()
Input: solarSystem
Output: {mercury: ["Mercury", .24], venus: ["Venus", .62], mars: ["Mars", 1.88], jupiter: ["Jupiter", 11.86]} 

Test: Should correctly multiply a persons age by each planet's yearFactor (solarsystem.planet[1]).
Code: solarSystem = new SolarSystem()
Code: person = new Person("Bob", 50, 100)
Input: solarSystem.checkAge(person)
Output: [12, 31, 94, 593]

Test: Should correctly add an instance of Planet() to SolarSystem()
Code: addPlanet(mercury)
Input: solarSystem.planets[0].name
Input: solarSystem.planets[0].factor
Output: "Mercury"
Output: .24

Description: Planet()

Test: Should correctly create and instance of Planet() with properties 'name' and 'factor'.
Code: mercury = new Planet("Mercury", .24)
Input: planet
Output: {name: "Mercury", factor: .24}

Description: Person()

Test: Should correctly create an instance of Person().
Code: person = new Person("Bob", 50, 100)
Input: person
Output: {name: "Bob", age: 50, lifeExpect: 100}

Test:
Code:
Input:
Output:

## **Known Bugs**
There are no known bugs
## **Technology Used**
* HTML
* JavaScript
* Bootstrap
* jQuery
* CSS
## **Authors and Contributors**
Authored by: Randel Moore
Initial Start Date: 2020-11-13
## **Contact**
RMGit.it@gmail.com
## **License**

GPLv3

Copyright © 2020 Randel Moore

## **Project Status**
