// Typescript Built-in Generics:
const names: Array<string> = []; // 'Array<string>' is also the same as 'string[]'

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
    reject(10);
  }, 2000);
});

promise.then(data => {
  console.log(data);
});


// Creating a Generic Function & Constraints:
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({name: "David", hobbies: ["Exercising", "Travelling"]}, {age: 29});
console.log(mergedObj);


// More Generic Functions:
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value';
  if (element.length === 1 ) {
    descriptionText = 'Got 1 element';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Hello world'));


// Typescript 'keyof' Constraint:
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}

console.log(extractAndConvert({name: 'David', age: 10}, 'name'));


// Generic Classes:
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item, 1));
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('David');
textStorage.addItem('Max');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
console.log(numberStorage.getItems());

const objStorage = new DataStorage<object>();
const davidObj = {name: 'David'};
objStorage.addItem(davidObj);

const maxObj = {name: 'Max'};
objStorage.addItem(maxObj);
// ...
objStorage.removeItem(davidObj); // this isn't successful because objects are reference types - better to add constraints to the DataStorage class to only allow primitive values to be stored in the 'data' array.
console.log(objStorage.getItems());


// Generic Utility Types (Partial & Readonly):
// Partial:
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// Readonly (can't modify the array - can only read its contents):
const listOfNames: Readonly<string[]> = ['David', 'Jim'];
console.log(listOfNames);
