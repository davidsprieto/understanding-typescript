"use strict";
// Typescript string, number, & boolean types:
function add(n1, n2, showResult, phrase) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //   throw new Error('Incorrect input type');
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
const number1 = 5; // 5.0
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
// Typescript object type:
// You can do this with typescript:
const person = {
    name: "David",
    age: 30
};
// However, it is better to allow typescript to infer the data type by writing it like this:
const person2 = {
    name: "Steven",
    age: 30
};
console.log(person.name);
console.log(person2.name);
// Typescript array type:
const person3 = {
    name: "Steven",
    age: 30,
    hobbies: ['Sports', 'Cooking']
};
let favoriteActivities;
favoriteActivities = ['Sports'];
for (const hobby of person3.hobbies) {
    console.log(hobby.toUpperCase());
}
// Typescript tuple (an array with a fixed length) type:
const person4 = {
    name: "Steven",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
// person4.role.push('admin');
// person4.role[1] = 10;
person4.role = [0, 'admin'];
// Typescript enum (custom type - automatically enumerated global constant identifiers) type:
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person5 = {
    name: "Steven",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
if (person5.role === Role.ADMIN) {
    console.log('is admin');
}
// Typescript 'any' (flexible - but avoid it if possible. Typescript is used to write better js and be more specific/strict - using 'any' negates that.) type:
let favoriteActivities2;
favoriteActivities2 = ['Sports', 5];
