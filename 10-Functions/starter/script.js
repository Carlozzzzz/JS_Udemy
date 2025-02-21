'use strict';
  
const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
  
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  
  const booking = {
    flightNum,
    numPassengers,
    price
  }
  
  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', undefined, 1000);

// Passing Arguments Works:  value vs. Reference

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schemedtman',
  passport: 2342342342
};

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  
  if(passenger.passport === 2342342342) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
}

// checkIn(flight, jonas);

console.log(flight)
console.log(jonas)

// First Class and Higher-Order Function
const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' '); // using rest operator and destructuring
}

const transformer = function (str, fn) {
  console.log(`Orriginal string: ${str}`)
  console.log(`Transformed string: ${fn(str)}`)
  console.log(`Transformed by: ${fn.name}`)
}

transformer('This is my transformer string.', oneWord)
console.log('='.repeat(20))
transformer('This is my second transformer string.', upperFirstWord);

let emojiCounter = 1;

const displayEmoji = function() {
  console.log('🎍'.repeat(emojiCounter));
}
document.body.addEventListener('click', () => {
  displayEmoji();
  emojiCounter++;
});