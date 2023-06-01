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

