// exercise8.js
const myButton = document.getElementById('myButton');
const interactiveBtn = document.getElementById('interactiveBtn');

myButton.addEventListener('click', () => {
    alert('Button was clicked!');
});

interactiveBtn.addEventListener('click', () => {
    alert('Interactive Button Clicked!');
});

interactiveBtn.addEventListener('mouseover', () => {
    interactiveBtn.style.backgroundColor = 'lightblue';
});

interactiveBtn.addEventListener('mouseout', () => {
    interactiveBtn.style.backgroundColor = '';
});
