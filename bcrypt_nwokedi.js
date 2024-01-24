// Import the 'bcrypt' module
const bcrypt = require('bcrypt');

// Plain password
const plainPassword = 'zack2012$$';

// To generate a salt
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

// Hash the password
const hashedPassword = bcrypt.hashSync(plainPassword, salt);

// Show the original password and the hashed password
console.log('Original Password:', plainPassword);
console.log('Hashed Password:', hashedPassword);

// Compare an attempted password with the hashed password
const passwordAttempt = 'mySecurePassword';
const isMatch = bcrypt.compareSync(passwordAttempt, hashedPassword);

// To show us the results of the password comparison
console.log('Password Match:', isMatch);