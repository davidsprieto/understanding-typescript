// Typescript 'class', 'constructor', and 'this' keyword && 'private', 'public', and 'readonly' access modifiers:
class Department {
  private id: number;
  private readonly name: string;
  private employees: string[] = [];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  describe() {
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
    // validation here
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department(1,"Accounting");
console.log(accounting);

accounting.addEmployee("David");
accounting.addEmployee("Kelly");

accounting.describe();
accounting.printEmployeeInformation();

const product = new Department(2, "Product");
console.log(product);

product.addEmployee("Tim");
product.addEmployee("Lisa");

product.describe();
product.printEmployeeInformation();


// SELF PRACTICE SESSION FROM WHAT I'VE LEARNED:
class Employee {
  private employee: {name: string, job: string} = {
    name: "",
    job: ""
  };

  constructor(name: string, job: string) {
    this.employee = {name: name, job: job};
  }

  printEmployeeInformation() {
    console.log('Employee Name: ' + this.employee.name + '\nEmployee Job: ' + this.employee.job);
  }
}

class Company {
  private readonly id: number;
  private readonly name: string;
  private employees: Employee[] = [];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  addEmployeeToList(employee: Employee) {
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
