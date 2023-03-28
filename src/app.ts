// Typescript First Class Decorator (decorators execute when the class is defined, not when the class is instantiated):

function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Pers {
  name = "David";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Pers();

console.log(pers);


// Decorator Factories:
function LoggerFactory(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@LoggerFactory("LOGGING - PERSON")
class PersFactory {
  name = "David";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers2 = new Pers();

console.log(pers2);
