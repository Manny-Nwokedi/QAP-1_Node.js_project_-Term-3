// Import the 'url' module
const url = require('url');

// Sample URL string
const urlString = 'https://www.nba.com/path?query=123#fragment';

// Parse URL
const parsedUrl = new URL(urlString);

// Different components of the URL
console.log('URL Protocol:', parsedUrl.protocol);
console.log('URL Host:', parsedUrl.host);
console.log('URL Path:', parsedUrl.pathname);
console.log('URL Query Parameters:', parsedUrl.searchParams.toString());
console.log('URL Fragment:', parsedUrl.hash);