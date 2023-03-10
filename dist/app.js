"use strict";
// Typescript 'class', 'constructor', and 'this' keyword && 'private' and 'public' access modifiers:
class Department {
    constructor(name) {
        this.employees = [];
        this.name = name;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
        // validation here
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department("Accounting");
console.log(accounting);
accounting.addEmployee("David");
accounting.addEmployee("Kelly");
accounting.describe();
accounting.printEmployeeInformation();
