// TYPESCRIPT CLASSES:
abstract class Department {
  static fiscalYear = 2023;
  protected id: number;
  private readonly name: string;
  // 'protected' allows access to the 'protected' variable from within classes that extend the base class
  protected employees: string[] = [];

  protected constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  static createEmployee(name: string) {
    return {name: name};
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // validation here
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

/*
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
 */


// Typescript inheritance:
class ITDepartment extends Department {
  admins: string[]; // can be written as 'public admins: string[]' - default access modifier is 'public';

  constructor(id: number, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }

}

const IT = new ITDepartment(1, ['David', 'Tom', 'Carl', 'Jake']);

console.log(IT);


// Singleton Pattern (only one instance of a class can be created with the singleton pattern - private constructor, an instance of the class is created by
// calling a method from within the class which checks for an instance of it, if one doesn't exist then one is created):
class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  private constructor(id: number, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[this.reports.length - 1];
  }

  static getInstance() {
    // can also be written as (AccountingDepartment.instance):
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment(1, ['Q1 data', 'Q2 data', 'Crypto Assets']);
    return this.instance;
  }

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

  // can override base class methods with a different method if desired - such as with the 'addEmployee' method below:
  addEmployee(name: string) {
    if (name === 'David') {
      return;
    }
    this.employees.push(name);
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  }

  addReport(data: string) {
    this.reports.push(data);
    this.lastReport = data;
  }

  printReports() {
    console.log(this.reports);
  }
}

// Accessing static a method and property in the 'Department' class:
const employeeDavid = Department.createEmployee('David');
console.log(employeeDavid, Department.fiscalYear);

// No longer creating an instance of the 'Accounting Department' like we normally do below:
// const accounting = new AccountingDepartment(1, ['Q1 data', 'Q2 data', 'Crypto Assets']);

// Instead to make sure only one instance of the 'Accounting Department' is created, the constructor is set to private, and it's created through a method within the class:
const accounting = AccountingDepartment.getInstance();

// accessing the getter method:
console.log(accounting.mostRecentReport);

const quarterThreeData = 'Q3 data';
accounting.addReport(quarterThreeData);

// accessing the setter method:
accounting.mostRecentReport = 'Q4 data';

accounting.printReports();


// SELF PRACTICE SESSION FROM WHAT I'VE LEARNED:
class Employee {
  private employee: { name: string, job: string } = {
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
