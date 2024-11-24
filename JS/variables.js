let a = 10;
const b = 11;

console.log(a,b)

let user = "Jane";
let greeting = `Hello, ${user}! How are you today?`;

let x = [1,2,3,4,5]

const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet: function() {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}!`);
    }
  };

// Spread Operator : 
let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes']; 

let person = { name: 'John', age: 25 };
let location = { country: 'USA', city: 'San Francisco' };
let profile = { ...person, ...location };
