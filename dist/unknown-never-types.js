"use strict";
// Typescript 'unknown' (not sure what data type will be saved as the variable's value) type:
let userInput;
let userName;
userInput = 5;
userInput = 'David';
if (typeof userInput === 'string') {
    userName = userInput;
}
// Typescript 'never' (never returns anything) type:
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
