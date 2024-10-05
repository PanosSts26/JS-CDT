// app.js

// Exercise 2: Hello World Example
console.log('Hello, JavaScript!');

// Exercise 3: Declaring Variables and Identifying Data Types

// Declare a string variable
let city = "New York";

// Declare a number variable
const temperature = 75;

// Declare a boolean variable
var isSunny = true;

// Log the variables and their types
console.log(typeof city); // "string"
console.log(typeof temperature); // "number"
console.log(typeof isSunny); // "boolean"

// Exercise 4: Using Different Operators

// Arithmetic Operators
let x = 10;
let y = 5;
let z = x + y; // 15
console.log(`x + y = ${z}`); // "x + y = 15"

// Assignment Operators
let a = 8;
a += 2; // a = a + 2 => 10
console.log(`a += 2 => a = ${a}`); // "a += 2 => a = 10"

// Comparison Operators
let isEqual = (a === y); // false
console.log(`a === y: ${isEqual}`); // "a === y: false"

// Logical Operators
let isAdult = true;
let hasLicense = false;
let canDrive = isAdult && hasLicense; // false
console.log(`Can drive: ${canDrive}`); // "Can drive: false"

// Exercise 5: Control Structures

// If-Else Example
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

// For Loop Example
for (let i = 1; i <= 3; i++) {
    console.log(`Iteration ${i}`);
}

// Switch Statement Example
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the work week.");
        break;
    case "Friday":
        console.log("End of the work week.");
        break;
    default:
        console.log("Midweek day.");
}

// Exercise 6: Functions

// Function Declaration
function add(a, b) {
    return a + b;
}

// Function Expression
const multiply = function(a, b) {
    return a * b;
};

// Arrow Function
const subtract = (a, b) => a - b;

// Testing the functions
console.log(`2 + 3 = ${add(2, 3)}`); // "2 + 3 = 5"
console.log(`2 * 3 = ${multiply(2, 3)}`); // "2 * 3 = 6"
console.log(`5 - 2 = ${subtract(5, 2)}`); // "5 - 2 = 3"

// Exercise 7: Objects and Arrays

// Creating an object
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    start: function() {
        console.log("Car started");
    }
};

// Creating an array
const colors = ["Red", "Green", "Blue"];

// Using Object.keys()
console.log("Car Keys:", Object.keys(car)); // ["make", "model", "year", "start"]

// Using Array.push()
colors.push("Yellow");
console.log("Colors Array:", colors); // ["Red", "Green", "Blue", "Yellow"]

// Using Array.pop()
let lastColor = colors.pop();
console.log("Popped Color:", lastColor); // "Yellow"
console.log("Colors Array after pop:", colors); // ["Red", "Green", "Blue"]

// Using Array.map()
const upperCaseColors = colors.map(color => color.toUpperCase());
console.log("Uppercase Colors:", upperCaseColors); // ["RED", "GREEN", "BLUE"]

// Using Array.filter()
const longColors = colors.filter(color => color.length > 3);
console.log("Long Colors:", longColors); // ["Green", "Blue"]

// Exercise 8: DOM Manipulation

const header = document.getElementById('header');
const changeBtn = document.getElementById('changeBtn');

changeBtn.addEventListener('click', () => {
    header.textContent = "Header Changed!";
    header.style.color = "green";
});

// Exercise 9: Events

const myButton = document.getElementById('myButton');
const interactiveBtn = document.getElementById('interactiveBtn');

// Click Event
myButton.addEventListener('click', () => {
    alert('Button was clicked!');
});

// Multiple Events on interactiveBtn
interactiveBtn.addEventListener('click', () => {
    alert('Interactive Button Clicked!');
});

interactiveBtn.addEventListener('mouseover', () => {
    interactiveBtn.style.backgroundColor = 'lightblue';
});

interactiveBtn.addEventListener('mouseout', () => {
    interactiveBtn.style.backgroundColor = '';
});

// Exercise 10: ES6 Features

// ES5 Function
function multiplyES5(a, b) {
    return a * b;
}

// ES6 Arrow Function with Default Parameter
const multiplyES6 = (a, b = 2) => a * b;

// ES5 Object
var userES5 = {
    name: "Bob",
    age: 30
};

// ES6 Destructuring
const { name, age } = userES5;

// Template Literals
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(multiplyES5(5, 3)); // 15
console.log(multiplyES6(5)); // 10
console.log(greeting); // "Hello, my name is Bob and I am 30 years old."

// Exercise 11: Asynchronous JavaScript

// Using Promises
function getNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const number = Math.floor(Math.random() * 10);
            resolve(number);
        }, 500);
    });
}

getNumber()
    .then(num => console.log(`Promise resolved with number: ${num}`))
    .catch(err => console.error(err));

// Using Async/Await
async function displayNumber() {
    try {
        const num = await getNumber();
        console.log(`Async/Await received number: ${num}`);
    } catch (err) {
        console.error(err);
    }
}

displayNumber();

// Exercise 12: Error Handling

function getUserAge(input) {
    try {
        const age = parseInt(input);
        if (isNaN(age)) {
            throw new Error("Input is not a number");
        }
        if (age < 0) {
            throw new Error("Age cannot be negative");
        }
        return age;
    } catch (error) {
        console.error("Error:", error.message);
    }
}

console.log(getUserAge("25")); // 25
console.log(getUserAge("-5")); // Error: Age cannot be negative
console.log(getUserAge("abc")); // Error: Input is not a number

// Exercise 13: Best Practices

// Messy Code
var a=10; var b=20; function add(){return a+b;}
console.log(add());

// Refactored Code
const num1 = 10;
const num2 = 20;

function addNumbers() {
    return num1 + num2;
}

console.log(addNumbers());

// Exercise 16: Loading External Files using Fetch API

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const output = document.getElementById('output');
        output.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Error:', error));

// Exercise 15: JavaScript in Industrial Control Systems (ICS)

// Mock ICS API Endpoint
const configBrowser = {
    apiEndpoint: 'https://api.mockics.com/data',
    chartData: {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [{
            label: 'Production',
            data: [65, 59, 80, 81],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    chartOptions: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Function to update dashboard (Mock)
function updateDashboard(data) {
    console.log("Updating dashboard with data:", data);
    // Here you would update your UI elements based on the data
}

// Mock Fetch Call (since we don't have a real API)
function mockFetchICSData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ production: 100, downtime: 5 });
        }, 1000);
    });
}

mockFetchICSData()
    .then(data => {
        updateDashboard(data);
    })
    .catch(error => console.error(error));

// Visualize data using Chart.js
// Assuming Chart.js is included in index.html via CDN

const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: configBrowser.chartData,
    options: configBrowser.chartOptions
});

// Exercise 17: Working with YAML in JavaScript

// Browser Environment Example
// Parsing YAML from a string
const yamlText = `
name: Alice
age: 25
city: New York
`;
const dataYAML = jsyaml.load(yamlText);
console.log("Parsed YAML Data:", dataYAML);

// Exercise 18: Integrating ICS, File Loading, and YAML in JavaScript Projects

// Fetch data and update dashboard
fetchICSData()
    .then(data => {
        updateDashboard(data);
    })
    .catch(error => console.error(error));

// Example project structure already shown in index.html and app.js
