// 1. Simple Function
// A basic function that prints a message to the console
function greet() {
    console.log("Hello, world!");
}

greet(); // Output: Hello, world!

// 2. Function with Parameters
// A function that takes two arguments and returns their sum
function add(a, b) {
    return a + b;
}

let sum = add(5, 3);
console.log(sum); // Output: 8

// 3. Arrow Function
// A shorter syntax for writing functions using the arrow (=>) notation
const multiply = (x, y) => x * y;

let product = multiply(4, 7);
console.log(product); // Output: 28

// 4. Function with Default Parameters
// A function that has a default value for the parameter 'name'
function sayHello(name = "stranger") {
    console.log(`Hello, ${name}!`);
}

sayHello("Alice"); // Output: Hello, Alice!
sayHello();        // Output: Hello, stranger!

// 5. Anonymous Function (Function Expression)
// A function without a name, stored in a variable
const divide = function(a, b) {
    return a / b;
};

let result = divide(10, 2);
console.log(result); // Output: 5

// 6. Immediately Invoked Function Expression (IIFE)
// A function that is defined and immediately called
(function() {
    console.log("This function runs immediately!");
})();
// Output: This function runs immediately!

// 7. Recursive Function
// A function that calls itself to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

let fact = factorial(5);
console.log(fact); // Output: 120

// 8. Higher-Order Function (Function as Argument)
// A function that takes another function as an argument and uses it to perform an operation
function doOperation(a, b, operation) {
    return operation(a, b);
}

let sumResult = doOperation(3, 4, add); // Using the `add` function from earlier
console.log(sumResult); // Output: 7
