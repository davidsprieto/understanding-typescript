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

function adding(a: Combine, b: Combine) {
  // type guard:
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

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
