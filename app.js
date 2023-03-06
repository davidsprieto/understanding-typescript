// Typescript 'unknown' type:
var userInput;
var userName;
userInput = 5;
userInput = 'David';
if (typeof userInput === 'string') {
    userName = userInput;
}
// Typescript 'never' type:
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError('An error occurred!', 500);
console.log(result);
