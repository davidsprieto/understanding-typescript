"use strict";
// Function return types & void:
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
// Assigning callback function return type with typescript:
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
let combineValues;
combineValues = add;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
// Another example of assigning callback function return type with typescript:
function sendRequest(data, cb) {
    // ... sending a request with "data"
    return cb({ data: data });
}
sendRequest('Send this!', (response) => {
    console.log(response);
    return true;
});
