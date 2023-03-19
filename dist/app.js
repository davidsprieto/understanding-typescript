"use strict";
const s = {
    name: 'David',
    privileges: ['create-server'],
    startDate: new Date()
};
function adding(a, b) {
    // type guard:
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printSubordinateInformation(sub) {
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
    loadCargo(amount) {
        console.log(`Loading ${amount}lbs of cargo`);
    }
}
const v1 = new Sedan();
const v2 = new Truck();
function useVehicle(vehicle) {
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
function moveAnimal(animal) {
    let speed;
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
let animal = {
    type: "bird",
    flyingSpeed: 10
};
moveAnimal(animal);
// Typescript Type Casting:
const userInputElement1 = document.getElementById('user-input');
// or written as:
// Use the exclamation mark if you know the value will not be null
const userInputElement2 = document.getElementById('user-input');
userInputElement1.value = "Hello";
userInputElement2.value = "Hello again";
// If you're not sure whether the value is going to be null or not, remove the exclamation mark and the initial type casting then write it below with an if check and then type casted:
const userInputElement3 = document.getElementById('user-input');
if (userInputElement3) {
    userInputElement3.value = 'Hello once more';
}
