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
// class 'Human' doesn't implement 'outputName' property as it's optional with the '?':
class Human {
    constructor(named) {
        this.named = named;
    }
    greet(phrase) {
    }
}
let sum;
sum = (a, b) => {
    return a + b;
};
let addition;
addition = (a, b) => {
    return a + b;
};
