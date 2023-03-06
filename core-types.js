// Typescript string, number, & boolean types:
function add(n1, n2, showResult, phrase) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //   throw new Error('Incorrect input type');
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5; // 5.0
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
// Typescript object type:
// You can do this with typescript:
var person = {
    name: "David",
    age: 30
};
// However, it is better to allow typescript to infer the data type by writing it like this:
var person2 = {
    name: "Steven",
    age: 30
};
console.log(person.name);
console.log(person2.name);
// Typescript array type:
var person3 = {
    name: "Steven",
    age: 30,
    hobbies: ['Sports', 'Cooking']
};
var favoriteActivities;
favoriteActivities = ['Sports'];
for (var _i = 0, _a = person3.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
// Typescript tuple (an array with a fixed length) type:
var person4 = {
    name: "Steven",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
// person4.role.push('admin');
// person4.role[1] = 10;
person4.role = [0, 'admin'];
// Typescript enum type (custom):
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person5 = {
    name: "Steven",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
if (person5.role === Role.ADMIN) {
    console.log('is admin');
}
