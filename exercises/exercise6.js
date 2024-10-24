// exercise6.js
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    start: function() {
        console.log("Car started");
    }
};

const colors = ["Red", "Green", "Blue"];

console.log("Car Keys:", Object.keys(car));
colors.push("Yellow");
console.log("Colors Array:", colors);

let lastColor = colors.pop();
console.log("Popped Color:", lastColor);

const upperCaseColors = colors.map(color => color.toUpperCase());
console.log("Uppercase Colors:", upperCaseColors);

const longColors = colors.filter(color => color.length > 3);
console.log("Long Colors:", longColors);
