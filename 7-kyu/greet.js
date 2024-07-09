function greet(myName, yourName) {
  return `Hello ${yourName}, my name is ${myName}`;
}

class Person {
  constructor(myName) {
    this.myName = myName;
  }

  greet(yourName) {
    return `Hello ${yourName}, my name is ${this.myName}`;
  }

  get name() {
    return this.myName;
  }
}

// https://www.codewars.com/kata/5121303128ef4b495f000001
