// exercise9.js
const multiplyES6 = (a, b = 2) => a * b;

const userES5 = {
    name: "Bob",
    age: 30
};

const { name, age } = userES5;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(multiplyES6(5));
console.log(greeting);
