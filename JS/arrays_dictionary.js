// 1. Creating an Array
// Arrays are used to store multiple values in a single variable
let fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// 2. Accessing Array Elements
// Access elements by their index, starting from 0
console.log(fruits[0]); // Output: "Apple"
console.log(fruits[2]); // Output: "Cherry"

// 3. Modifying Array Elements
// Assign new values to elements in an array
fruits[1] = "Blueberry";
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

// 4. Adding Elements to an Array
// Use push() to add an element to the end of an array
fruits.push("Date");
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry", "Date"]

// 5. Removing Elements from an Array
// Use pop() to remove the last element from an array
let lastFruit = fruits.pop();
console.log(lastFruit); // Output: "Date"
console.log(fruits);    // Output: ["Apple", "Blueberry", "Cherry"]

// 6. Iterating Over an Array
// Use a for loop or forEach() method to iterate through array elements
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});
// Output:
// 0: Apple
// 1: Blueberry
// 2: Cherry

// 7. Creating an Object
// Objects store data in key-value pairs
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

console.log(car); // Output: { brand: "Toyota", model: "Corolla", year: 2020 }

// 8. Accessing Object Properties
// Access object properties using dot notation or bracket notation
console.log(car.brand);  // Output: "Toyota"
console.log(car["model"]); // Output: "Corolla"

// 9. Modifying Object Properties
// Assign new values to properties in an object
car.year = 2022;
console.log(car); // Output: { brand: "Toyota", model: "Corolla", year: 2022 }

// 10. Adding New Properties to an Object
// You can add new properties to an object after it is created
car.color = "Blue";
console.log(car); // Output: { brand: "Toyota", model: "Corolla", year: 2022, color: "Blue" }

// 11. Deleting Properties from an Object
// Use the delete keyword to remove a property from an object
delete car.model;
console.log(car); // Output: { brand: "Toyota", year: 2022, color: "Blue" }

// 12. Iterating Over Object Properties
// Use a for...in loop to iterate over the properties of an object
for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}
// Output:
// brand: Toyota
// year: 2022
// color: Blue

// 13. Array of Objects
// You can have arrays that contain objects
let cars = [
    { brand: "Tesla", model: "Model S", year: 2021 },
    { brand: "Ford", model: "Mustang", year: 1969 },
    { brand: "Chevrolet", model: "Camaro", year: 2010 }
];

console.log(cars);
// Output: 
// [
//   { brand: "Tesla", model: "Model S", year: 2021 },
//   { brand: "Ford", model: "Mustang", year: 1969 },
//   { brand: "Chevrolet", model: "Camaro", year: 2010 }
// ]

// Accessing elements in an array of objects
console.log(cars[1].model); // Output: "Mustang"



// Destrucring Arrrays : 
const fruits = ["Apple", "Banana", "Cherry"];

const [first, second, third] = fruits;

console.log(first);  // Output: "Apple"
console.log(second); // Output: "Banana"
console.log(third);  // Output: "Cherry"

// Destructuring Objects : 
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

const { brand, model, year } = car;

console.log(brand);  // Output: "Toyota"
console.log(model);  // Output: "Corolla"
console.log(year);   // Output: 2020