"use strict";

class Worker {
  constructor(name, secondname, age, expirience) {
    this.name = name;
    this.secondname = secondname;
    this.age = age;
    this.expirience = expirience;
  }

  fullname() {
    return `Hello! My name is ${this.name + " " + this.secondname}`;
  }

  isAdult() {
    return this.age >= 18;
  }
}

const worker1 = new Worker("Test", "Testenko", 20, "Five years");
