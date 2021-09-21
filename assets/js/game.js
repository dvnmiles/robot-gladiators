
/*
// example 1: 
window.alert("This is an alert! JavaScript is running!")

// This is a String data type; it must be wrapped in double quotes (" ") or single quotes (' ').
var stringDataType = "This is a string, which is a fancy way to say text";

// This is a Number data type; it can be an integer (whole number) or have decimals (floated numbers).
var numberIntegerDataType = 10;
var numberFloatDataType = 10.4;

// This is a Boolean data type, which can only be given a value of true or false.
var booleanDataType = true;\
*/

//prompt 
var playerName = window.prompt("What is your robot's name?");
// What is this?
console.log(playerName);

console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
console.log(10 + 10);
// what is this?
console.log("Our robot's name is " + playerName);

var playerName = "Tony the Robot";

// Tony the Robot is ready for battle!
console.log("Tony the Robot" + " is ready for battle!");

// "Tony the Robot is ready for battle!"
console.log(playerName + " is ready for battle!");

// "Your robot, Tony the Robot, has won!
console.log("Your robot, " + playerName + ", has won!");

var name = "your name";
console.log(name);

//this creats a function named "fight"

//step 1-declare a function:
function fight() {
    window.alert("The fight has begun!");
}
//step 2-call the function:
//fight();
