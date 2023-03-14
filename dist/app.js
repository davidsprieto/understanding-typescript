"use strict";
// Typescript 'class', 'constructor', and 'this' keyword && 'private', 'public', and 'readonly' access modifiers:
class Department {
    constructor(id, name) {
        this.employees = [];
        this.id = id;
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
const department = new Department(1, "Accounting");
console.log(department);
department.addEmployee("David");
department.addEmployee("Kelly");
department.describe();
department.printEmployeeInformation();
const product = new Department(2, "Product");
console.log(product);
product.addEmployee("Tim");
product.addEmployee("Lisa");
product.describe();
product.printEmployeeInformation();
// Typescript inheritance:
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
const IT = new ITDepartment(1, ['David', 'Tom', 'Carl', 'Jake']);
console.log(IT);
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addReport(data) {
        this.reports.push(data);
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting = new AccountingDepartment(1, ['Q1 data', 'Q2 data', 'Crypto Assets']);
const quarterThreeData = 'Q3 data';
accounting.addReport(quarterThreeData);
accounting.printReports();
// SELF PRACTICE SESSION FROM WHAT I'VE LEARNED:
class Employee {
    constructor(name, job) {
        this.employee = {
            name: "",
            job: ""
        };
        this.employee = { name: name, job: job };
    }
    printEmployeeInformation() {
        console.log('Employee Name: ' + this.employee.name + '\nEmployee Job: ' + this.employee.job);
    }
}
class Company {
    constructor(id, name) {
        this.employees = [];
        this.id = id;
        this.name = name;
    }
    addEmployeeToList(employee) {
        this.employees.push(employee);
    }
    describeCompany() {
        console.log('Department id: ' + this.id + '\nDepartment name: ' + this.name + '\nEmployees: ' + this.employees);
    }
}
const supplements = new Company(1, 'Swole Supplements');
console.log(supplements);
const jim = new Employee('Jim', 'Supervisor');
jim.printEmployeeInformation();
console.log(jim);
supplements.addEmployeeToList(jim);
const bob = new Employee('Bob', 'Manager');
bob.printEmployeeInformation();
console.log(bob);
supplements.addEmployeeToList(bob);
supplements.describeCompany();
