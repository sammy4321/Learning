for (let i = 0; i < 5; i++) {
    console.log(i);  // Outputs: 0, 1, 2, 3, 4
  }

let i = 0;
while (i < 5) {
    console.log(i);  // Outputs: 0, 1, 2, 3, 4
    i++;
  }

// For objects
const person = { firstName: "John", lastName: "Doe", age: 30 };
for (let key in person) {
    console.log(key + ': ' + person[key]);
    // Outputs: firstName: John, lastName: Doe, age: 30
  }

// For arrays
  const numbers = [10, 20, 30, 40, 50];
  for (let number of numbers) {
    console.log(number);  // Outputs: 10, 20, 30, 40, 50
  }

numbers.forEach((number, index) => {
    console.log(`Index ${index}: ${number}`);
    // Outputs: Index 0: 10, Index 1: 20, Index 2: 30, Index 3: 40, Index 4: 50
  });
  
  