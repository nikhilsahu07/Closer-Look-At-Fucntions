'use strict'

// ///////////////////// Default Parameters ////////////////////////

// const bookings = [];

// const listBooking = function (flightNum,
//     numPassengers = 1,
//     price = numPassengers * 8000) {

//     //ES5 of defaulting parameters
//     // numPassengers = numPassengers || 1;
//     // price = price || 8000;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price,
//     }
//     console.log(booking);
//     bookings.push(booking);

// };

// listBooking('LH123');
// listBooking('LH231', 2, 16000);
// listBooking('LH421', 4);

// //skiping parameters
// listBooking('LH123', undefined, 12000);


// /////////////////// How Passing Arguements Works: Values vs Reference //////////////////

// const flight = 'LH234';
// const nikhil = {
//     hisName: 'Nikhil Sahu',
//     gender: 'M',
//     passportNum: 452345823272,
// };

// const checkIN = function (flightNum, passenger) {
//     flightNum = 'LH289';
//     passenger.hisName = `${passenger.gender == 'M' ? 'Mr.' : 'Mrs.'} ${passenger.hisName}`;

//     if (passenger.passportNum === 452345823272) alert('Checked In')
//     else alert('Wrong passport..!')

// };

// // checkIN(flight, nikhil);

// // console.log(flight); //primitive value doesn't change, it just make a copy of that
// // console.log(nikhil); //inside the function we changes the object data struct

// // Is the same as doing
// // const flightNum = flight;
// // const passenger = nikhil;

// const newPassport = function (person) {
//     person.passportNum = Math.trunc(Math.random() * 1000000000);
// }

// newPassport(nikhil);
// checkIN(flight, nikhil)
// console.log(nikhil.passportNum);


// /////////////////////// First-Class Function and High-Order Functions and Callback functions////////////////////

// // // ********* FIRST-CLASS Functions ********* //

// // First-class function: In Javascript functions are treated as First-class citizens, this means that
// //functions can be stored in variable are they are simply values.(*i.e., 1.Functions can be stored in variables,
// //  2.)Functions can be passed as arguements, return from a function as a result,
// // and can be stored in data structures)
// // * Functions are just another "type" of object.

// //1.) Assigning a functions to a Variables or Properties
// const greet = function (hisName) {
//     return (`Hello there... ${hisName}👋`);
// };
// //assigning a function to a property(also returning function as a result)
// const welcome = {
//     name: 'Nikhil',
//     favDish: 'Biryani',
//     sayHello: function (price = 220) {
//         return `${greet(this.name)} And here is your ${this.favDish}.
// ${this.favDish}: ${price}rs`
//     },
// };

// console.log(welcome.sayHello());

// // 2.) Function can be passed as a arguement

// function thankYou(anotherFunction) {
//     return anotherFunction('Chiku')
// }
// console.log(thankYou(greet).replace('Hello there', 'thank you') + `Visit again!`);

// // 3.) Returning a function as a result

// function offerMouthFreshner(numCustomer) {
//     return function (customerName) {
//         console.log('Have some Mouth freshner...'.repeat(numCustomer), customerName);
//     };
// };

// const offeringMouthF = offerMouthFreshner(2);
// offeringMouthF('Nikhil and Riya')

// // Call methods on Functions
// const someOtherObject = {
//     name: 'Love',
//     favDish: 'Butter Chicken Masala'
// }
// const greetWithLove = (welcome.sayHello.bind(someOtherObject));
// console.log(greetWithLove());

// // ********* HIGH-ORDER FUNCTIONS ******** //

// // // A Higher-Order function is a function that receives one or more functions as arguements
// // or returns a new function, or both as a result.
// //This is only possible because of first-class function.
// //* There's no first-class function type thing it's just a concept or a feature that a programming language
// //provides or not. And becuase it has first-class function High-order function exits in language


// // Higher-oder function taking a function as an arguement
// function calculate(num1, num2, operation) {
//     return operation(num1, num2);
// }

// function add(a, b) {
//     return a + b;
// }
// function subtract(a, b) {
//     return a - b
// }
// function divide(a, b) {
//     if (b === 0) {
//         return `Can't divide by zero`;
//     } else {
//         return a / b;
//     }
// }

// console.log(calculate(15, 3, add));
// console.log(calculate(15, 3, subtract));
// console.log(calculate(15, 3, divide));

// // Higher-order function returning a function
// function multiplyBy(num) {
//     return function (x) {
//         return x * num;
//     };
// }

// const multiplyByTwo = multiplyBy(2);
// const multiplyByTwoFive = multiplyByTwo(5);
// console.log(multiplyByTwoFive);

// // // Callback Functions

// //Callback function is a function that is passed as an arguemnent to another function
// // and gets executed at later point in time. It allows asynchronous and event-driven programming in JS


// //////////////////// Functions Accepting Callback Functions /////////////////////////////

// const oneWord = function (str) {
//     return str.replaceAll(' ', '').toLowerCase();
// }

// const firstWordUppercase = function (str) {
//     const [firstWord, ...otherWords] = str.split(' ');
//     return [firstWord.toUpperCase(), ...otherWords].join(' ');
// }

// //Higher-Order functions
// const transformer = function (str, func) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed String: ${func(str)}`);

//     console.log(`Transformed by: ${func.name}`);
// }

// transformer('JavaScript is the best language.', firstWordUppercase);

// transformer('Web DevelopMent is Love', oneWord);

// // JS uses Callbacks all the time
// const high5 = function () {
//     console.log('👋');
// }
// document.body.addEventListener('click', high5);
// ['Nikhil', 'Nicks', 'Chicku'].forEach(high5);


// ///////////////////// Functions Returning Functions ///////////////////

// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting}... ${name}`);
//     };
// }

// const greetHey = greet('Heyy');
// greetHey('Nikhil');
// greetHey('Chiku');
// // Another way of calling a function returning a function
// greet('Hello there')('Nicks')

// // Using arrow functions
// const greetArrow = greeting => name => console.log(`${greeting}... ${name}`);

