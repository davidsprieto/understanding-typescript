// Typescript 'unknown' (not sure what data type will be saved as the variable's value) type:
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'David';
if (typeof userInput === 'string') {
  userName = userInput;
}


// Typescript 'never' (never returns anything) type:
function generateError(message: string, code: number): never {
  throw {message: message, errorCode: code};
}

generateError('An error occurred!', 500);
