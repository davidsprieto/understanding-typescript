"use strict";
// TYPESCRIPT INTERFACES:
let user;
user = {
    name: 'David',
    age: 29,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user.greet("Hello, I am");
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let individual;
individual = new Person('David', 29);
individual.greet("Hello, I am");
console.log(individual);
