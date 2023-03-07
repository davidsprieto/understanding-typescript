"use strict";
// Typescript 'union' types - (ex: input1: number | string):
function combine(input1, input2) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges = combine(30, 26);
console.log(combinedAges);
const combinedNames = combine('Max', 'Anna');
console.log(combinedNames);
// Typescript 'literal' types - (ex: resultConversion: 'as-number' | 'as-text'):
function combine2(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges2 = combine2(30, 26, 'as-number');
console.log(combinedAges2);
const combinedStringAges = combine2('30', '26', 'as-number');
console.log(combinedStringAges);
const combinedNames2 = combine2('Max', 'Anna', 'as-text');
console.log(combinedNames2);
function combine3(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
