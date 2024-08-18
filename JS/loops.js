// 1. For Loop
// The for loop is used to repeat a block of code a specific number of times

// Example: Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Output:
// 1
// 2
// 3
// 4
// 5

// Example: Loop through an array and print each element
let fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Output:
// Apple
// Banana
// Cherry

// 2. While Loop
// The while loop is used to repeat a block of code as long as a condition is true

// Example: Print numbers from 1 to 5
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}
// Output:
// 1
// 2
// 3
// 4
// 5

// Example: Loop until a random number greater than 0.8 is generated
let randomNumber;
while (randomNumber <= 0.8) {
    randomNumber = Math.random();
    console.log(randomNumber);
}
// Output: A series of random numbers between 0 and 1, stopping once one is greater than 0.8

// 3. Do-While Loop
// The do-while loop is similar to the while loop, but it executes the block of code at least once before checking the condition

// Example: Print numbers from 1 to 5
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);
// Output:
// 1
// 2
// 3
// 4
// 5

// Example: Loop until a random number greater than 0.8 is generated (runs at least once)
let randomNumber2;
do {
    randomNumber2 = Math.random();
    console.log(randomNumber2);
} while (randomNumber2 <= 0.8);
// Output: A series of random numbers between 0 and 1, stopping once one is greater than 0.8

const fruits1 = ["Apple", "Banana", "Cherry"];

for (const fruit of fruits1) {
    console.log(fruit);
}
// Output:
// Apple
// Banana
// Cherry

const fruits2 = ["Apple", "Banana", "Cherry"];

fruits2.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});
// Output:
// 0: Apple
// 1: Banana
// 2: Cherry


const fruits3 = ["Apple", "Banana", "Cherry"];

const upperCaseFruits = fruits3.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits);
// Output: ["APPLE", "BANANA", "CHERRY"]

