// exercise10.js
function getNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const number = Math.floor(Math.random() * 10);
            resolve(number);
        }, 500);
    });
}

async function displayNumber() {
    try {
        const num = await getNumber();
        console.log(`Async/Await received number: ${num}`);
    } catch (err) {
        console.error(err);
    }
}

displayNumber();
