console.log("Hello World");

//The following are class notes from lecture videos

// Three ways to create variables

let color = "blue";
var size = "medium";
const language = "JavaScript";

//Var is not recommended because it can cause issues with scope
//let is a more modern way to create variables
//const is used for final values that can't be changed

let quantity = 5;
let distance = 4.5;

let text = "Hello World";
let message = 'Hi Programmers';

console.log('There are ' + quantity + ' programmers');

let todayTemp = 75;

console.log("Today's temperature is " + todayTemp + " degrees Fahrenheit");

let tempC = (todayTemp - 32) * 5 / 9;
console.log("Today's temperature is " + tempC.toFixed(2) + " degrees Celsius");
