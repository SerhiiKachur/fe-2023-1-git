"use strict";

class Worker {
  constructor(name, secondname, age, expirience) {
    this.name = name;
    this.secondname = secondname;
    this.age = age;
    this.expirience = expirience;
  }

  fullname() {
    return `${this.name} ${this.secondname}`;
  }

  isAdult() {
    return this.age >= 18;
  }
}


class Order {
  constructor(client, adress, status, product) {
    this.client = client;
    this.adress = adress;
    this.status = status;
    this.product = product;
  }
  print() {
    return `This order goes to ${this.client.fullname()} who ordered ${
      this.product
    }.Delivery adress ${this.adress}, status is :${this.status}}`;
  }
}

const worker1 = new Worker("Test", "Testenko", 20, "Five years");

const order1 = new Order(worker1,'vyl. Heroiv 1','Delivered','pizza 4 cheese');
