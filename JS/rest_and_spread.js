// Rest Operator : 
// Example: Rest Operator in Function Parameters
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3));       // Output: 6
console.log(sum(4, 5, 6, 7, 8)); // Output: 30

// Example: Rest Operator to Collect Remaining Elements
const [first, second, ...rest] = [10, 20, 30, 40, 50];

console.log(first);  // Output: 10
console.log(second); // Output: 20
console.log(rest);   // Output: [30, 40, 50]

//Spread Operator : 
// Example: Spread Operator with Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// Example: Spread Operator to Clone an Array
const originalArray = [10, 20, 30];
const clonedArray = [...originalArray];

console.log(clonedArray); // Output: [10, 20, 30]

// Example: Spread Operator with Objects
const obj1 = { name: "Alice", age: 25 };
const obj2 = { profession: "Engineer", country: "USA" };

const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject);
// Output: { name: "Alice", age: 25, profession: "Engineer", country: "USA" }

// Example: Spread Operator to Clone an Object
const originalObject = { brand: "Toyota", model: "Camry" };
const clonedObject = { ...originalObject };

console.log(clonedObject); // Output: { brand: "Toyota", model: "Camry" }
