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
// can add 'readonly' access modifier in interfaces:
interface Greetable {
  name: string;
  readonly age: number;

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


// Using 'extends' with an interface:
interface Named {
  readonly named: string;
}

interface Greeting extends Named {
  greet(phrase: string): void;
}

class Human implements Greeting {
  readonly named: string;

  constructor(named: string) {
    this.named = named;
  }

  greet(phrase: string): void {
  }

}


// Custom function type refresher:
type SumFn = (a: number, b: number) => number;

let sum: SumFn;

sum = (a: number, b: number) => {
  return a + b;
}

// Interfaces as function types:
interface AddFn {
  (a: number, b: number): number;
}

let addition: AddFn;

addition = (a: number, b: number) => {
  return a + b;
}
