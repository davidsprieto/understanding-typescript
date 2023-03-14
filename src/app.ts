// Typescript 'class', 'constructor', and 'this' keyword && 'private', 'public', protected, and 'readonly' access modifiers:
class Department {
  private id: number;
  private readonly name: string;
  // 'protected' allows access to the 'protected' variable from within classes that extend the base class
  protected employees: string[] = [];

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

const department = new Department(1,"Accounting");
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
  admins: string[]; // can be written as 'public admins: string[]' - default access modifier is 'public';

  constructor(id: number, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

}

const IT = new ITDepartment(1, ['David', 'Tom', 'Carl', 'Jake']);

console.log(IT);


class AccountingDepartment extends Department {
  private lastReport: string;

  // getter method has to return a value:
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No Report Found.')
  }

  // setter method has to take in an argument/parameter:
  set mostRecentReport(data: string) {
    if (!data) {
      throw new Error('Please pass in a valid input');
    }
    this.addReport(data);
  }

  constructor(id: number, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[this.reports.length - 1];
  }

  // can override base class methods with a different method if necessary
  addEmployee(name: string) {
    if (name === 'David') {
      return;
    }
    this.employees.push(name);
  }

  addReport(data: string) {
    this.reports.push(data);
    this.lastReport = data;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment(1, ['Q1 data', 'Q2 data', 'Crypto Assets']);

// accessing the getter method:
console.log(accounting.mostRecentReport);

const quarterThreeData = 'Q3 data';
accounting.addReport(quarterThreeData);

// accessing the setter method:
accounting.mostRecentReport = 'Q4 data';

accounting.printReports();

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
