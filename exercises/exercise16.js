// exercise16.js
// Fetching data from a public API (e.g., random user API)

fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        const user = data.results[0];
        console.log('User Data:', user);
        console.log(`Name: ${user.name.first} ${user.name.last}`);
        console.log(`Email: ${user.email}`);
    })
    .catch(error => {
        console.error('Error fetching API data:', error);
    });
