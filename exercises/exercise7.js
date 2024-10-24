// exercise7.js
const header = document.getElementById('header');
const changeBtn = document.getElementById('changeBtn');

changeBtn.addEventListener('click', () => {
    header.textContent = "Header Changed!";
    header.style.color = "green";
});
