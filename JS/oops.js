class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}!`);
    }
  }
  
const person2 = new Person("Mike", "Smith", 28);
person2.greet(); // Outputs: Hello, my name is Mike Smith!
  