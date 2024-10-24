// exercise11.js
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

console.log(getUserAge("25"));
console.log(getUserAge("-5"));
console.log(getUserAge("abc"));
