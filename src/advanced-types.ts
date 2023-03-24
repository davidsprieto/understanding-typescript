// Typescript Intersection Types & Type Guards:
type Admin = {
  name: string;
  privileges: string[];
}

type Subordinate = {
  name:string;
  startDate: Date;
}

type ElevatedSubordinate = Admin & Subordinate;

const s: ElevatedSubordinate = {
  name: 'David',
  privileges: ['create-server'],
  startDate: new Date()
}

type Combine = string | number;
type Numeric = number | boolean;

type Universal = Combine & Numeric;

// Typescript function overloads:
function adding(a: number, b: number): number;
function adding(a: string, b: string): string;
function adding(a: Combine, b: Combine) {
  // type guard:
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = adding(1, 5);

const concatenate = adding('David', ' Prieto');


// Typescript Optional Chaining:
const fetchedUserData = {
  id: 'user',
  name: 'David',
  job: {title: 'CEO', description: 'Crypto Company'}
};

console.log(fetchedUserData?.job?.title);


// Nullish Coalescing ('??'):
const userData = null;

const storedData = userData ?? 'Default';

console.log(storedData);

type UnknownSubordinate = Subordinate | Admin;

function printSubordinateInformation(sub: UnknownSubordinate) {
  console.log('Name: ' + sub.name);
  // type guards:
  if ('privileges' in sub) {
    console.log('Privileges: ' + sub.privileges);
  }
  if ('startDate' in sub) {
    console.log('Start Date: ' + sub.startDate);
  }
}

printSubordinateInformation(s);

class Sedan {
  drive() {
    console.log('Driving a sedan');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck');
  }

  loadCargo(amount: number) {
    console.log(`Loading ${amount}lbs of cargo`);
  }
}

type Vehicle = Sedan | Truck;

const v1 = new Sedan();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // type guard:
  if ('loadCargo' in vehicle) {
    vehicle.loadCargo(1000);
  }
  // the above type guard can also be written as:
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);


// Typescript Discriminated Unions:
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'Horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "Horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log('Moving at speed: ' + speed);
}

let animal: Animal = {
  type: "bird",
  flyingSpeed: 10
}

moveAnimal(animal);


// Typescript Type Casting:
const userInputElement1 = <HTMLInputElement>document.getElementById('user-input')!;
// or written as:
// Use the exclamation mark if you know the value will not be null
const userInputElement2 = document.getElementById('user-input')! as HTMLInputElement;

userInputElement1.value = "Hello";
userInputElement2.value = "Hello again";

// If you're not sure whether the value is going to be null or not, remove the exclamation mark and the initial type casting then write it below with an if check and then type casted:
const userInputElement3 = document.getElementById('user-input');

if (userInputElement3) {
  (userInputElement3 as HTMLInputElement).value = 'Hello once more';
}


// Index Properties/Types:
// Not sure how many properties will be in the interface nor the names of them, but they will be of type string:
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!'
};
