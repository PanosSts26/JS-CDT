// exercise4.js
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

for (let i = 1; i <= 3; i++) {
    console.log(`Iteration ${i}`);
}

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
