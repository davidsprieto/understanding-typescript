"use strict";
// Typescript First Class Decorator (decorators execute when the class is defined, not when the class is instantiated):
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(constructor) {
    console.log("Logging...");
    console.log(constructor);
}
let Pers = class Pers {
    constructor() {
        this.name = "David";
        console.log("Creating person object...");
    }
};
Pers = __decorate([
    Logger
], Pers);
const pers = new Pers();
console.log(pers);
// Decorator Factories:
