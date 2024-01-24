// Import the 'os' module
const os = require('os');

// Display the information about the operating system
console.log('OS Platform:', os.platform());
console.log('OS Architecture:', os.arch());
console.log('OS CPU Cores:', os.cpus().length);
console.log('Total Memory (bytes):', os.totalmem());
console.log('Free Memory (bytes):', os.freemem());