// exercise17.js
// Advanced data manipulation with arrays: map, filter, and reduce

const numbers = [1, 2, 3, 4, 5, 6];

// Filtering even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even Numbers:', evenNumbers);

// Mapping to squares
const squares = numbers.map(num => num ** 2);
console.log('Squares:', squares);

// Reducing to sum
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log('Sum of Numbers:', sum);
