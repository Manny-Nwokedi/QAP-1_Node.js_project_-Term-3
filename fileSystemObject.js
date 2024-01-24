// Import the 'fs' module
const fs = require('fs');

// Sample file path
const filePath = 'sample_disney.txt';

// Writing a file
fs.writeFileSync(filePath, 'Hello, i cannot wait to go to disney world.');

// Reading from the file
const fileContent = fs.readFileSync(filePath, 'utf-8');

// To display the file content
console.log('File Content:', fileContent);

// Delete the file
fs.unlinkSync(filePath);