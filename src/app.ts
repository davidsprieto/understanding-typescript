// TYPESCRIPT INTERFACES:

// could replace the interface with a custom type:
// type Person = {
//   name: string;
//   age: number;
//
//   greet(phrase: string): void;
// }

interface User {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user: User;

user = {
  name: 'David',
  age: 29,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

user.greet("Hello, I am");


// Using interfaces with classes:
interface Greetable {
  name: string;

  greet(phrase: string): void
}

class Person implements Greetable {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }

}

let individual: Greetable;
individual = new Person('David', 29);
individual.greet("Hello, I am");
console.log(individual);
