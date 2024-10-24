// exercise14.js
// Reading text file content using JavaScript

document.getElementById('fileInput').addEventListener('change', function (e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function () {
        const fileContent = reader.result;
        document.getElementById('output').textContent = fileContent;
        console.log('File content loaded:', fileContent);
    };
    
    reader.readAsText(file);
});
