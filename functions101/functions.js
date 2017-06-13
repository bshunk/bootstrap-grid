// // console.log("Howdy")

// var name = "Darby";

// function sayHello(name) {
// 	console.log(`Hello, ${name}`);   // << Name is passed into the function << //
// }
// // ^^^ Just a function definition, doesn't display anything ^^^ //

// sayHello("Freddie");    //<<<Displays the function<<<//


// var confusion = "hoisting is weird";   //LET VARIABLES DO NOT GET HOISTED//
// console.log("confusion", confusion);


// var myArr = ["green", 2, true]; //<<<Arrays can hold anything, strings, numbers, boolean- doesn't matter<<<//

// printBackwardsArray();

// function printBackwardsArray() {
// 	let hidden = "Try to read this";
// 	console.log("backward", myArr.reverse());
// }

// function sayHi() {
// 	console.log("Hi");
// }

// sayHi()



function addStuff(num1, num2) {
	let sum = num1+num2;
	return sum;
}

function divideStuff(num1, num2) {
	let quotient = num1 / num2;
	return quotient;
}

function doMath(numnum1, numnum2, func) {
	var result = func(numnum1, numnum2);
	return result;
}

function doMoreMath(nums, func) {
	let result = func(nums[0], nums[1])
	return result
}

let numberUno = 4;
let numberDos = 5;


let number1 = 6;
let number2 = 3;


// let myCalc = doMath(number1, number2, divideStuff);

let myCalc = doMoreMath([3,4,6,10,456], divideStuff);

console.log(myCalc);






// Passing an object to a function //
 
function makeString(song) {
	return `${song.title} is my totes fave track by ${song.artist}`
}

let myFaveSong = {
	title: "24k Magic",
	artist: "Bruno Mars"
}

let songString = makeString(myFaveSong)
console.log("Not true", songString)





let songBuilder = {
	makeString: function() {
		return "I made a song!"
	}
}

function createSong(title, artist) {
	let newSong = Object.create(songBuilder);
	newSong.title = title;
	newSong.artist = artist;
	return newSong
}

let myNewSong = createSong("Don't Stop Believing", "Journey");
console.log("Overplayed song", myNewSong);






























