//This first function is to check the validity of the username. It cannot contain special characters and must be at least 6 characters long. It must also include numbers.
function isIdValid(a) {return (!a.includes("!") && !a.includes("$") && !a.includes("#")) && a.length > 5 && digit(a);};
//This function is to determine that there is a 0-9 digit in the user name and also the password validation functions
function digit(b) {return /\d/.test(b);};
//This function is to determine if the string has all lowercase or uppercase letters. We want to use this function to notice a change from upper to lowercase as the password will need at least one uppercase letter.n All capital letters will also work.
function checkCase(c) {return c.toLowerCase() !=c && c.toUpperCase() !=c; };
//This function is to check the validity of the password. Password must contain at least one special character (!,$,#), be at least 6 characters long, contain at least 1 number. It cannot be password or the password with a special character.
function validPassword(d) {return (d.includes("!") || d.includes("#") || d.includes("&")) && (!d.includes("password") && !d.includes("PASSWORD") && !d.includes("password!") && !d.includes("password#") && !d.includes("password$")) && checkCase(d) && digit(d) && d.length > 5;} ;
//This function checks both the validity of the user name and pasword based on the earlier functions.
function checkBoth(e,f){return isIdValid(e) && validPassword(f);};

//This will bring up the window prompt via the browser when entered into the console (dev tools > console - in Chrome) and then alert the user if their user name and password is valid or not via true or false
g = prompt("Enter your User ID. Must contain at least 6 characters and must have at least one number. Your User ID cannot contain any special characters: ");
f = prompt("Please enter your password. Password must be at least 6 characters, include one special character of !,#, or $ and at least one number. Password must also include at least one uppercase letter: ");
alert ("User ID and password are valid: " + checkBoth(g, f));
