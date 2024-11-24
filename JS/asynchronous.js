// Callback : A callback is a function passed as an argument to another function, to be executed later. Callbacks are commonly used in asynchronous programming.

function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched from server";
        callback(data); // Call the callback with the data
    }, 1000); // Simulating a 1-second delay
}

function processData(data) {
    console.log("Processing data:", data);
}

fetchData(processData); // Output after 1 second: "Processing data: Data fetched from server"

// Fetch API : Modern way of making asynchronous GET requests : 
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json()) // Convert response to JSON
    .then(data => console.log("Fetched data:", data)) // Log the data
    .catch(error => console.error("Error:", error)); // Handle errors

// Consuming and Chaining Promises : 
function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json());
}

function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Processing data:", data);
            resolve("Processed data successfully!");
        }, 1000); // Simulate delay
    });
}

fetchData()
    .then(data => processData(data))
    .then(result => console.log(result)) // Log the result of processing
    .catch(error => console.error("Error:", error));

// Handling rejected Promises : 
function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("Failed to fetch data!"), 1000);
    });
}

fetchWithError()
    .then(data => console.log("Data:", data)) // This won't run
    .catch(error => console.error("Error:", error)) // Catch the rejection
    .finally(() => console.log("Cleanup actions complete")); // Runs regardless of success or failure

/// Creating Promises : 
const myPromise = new Promise((resolve, reject) => {
    const success = true; // Simulate success or failure
    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

// Example for Promises : 

myPromise
    .then(value => console.log(value)) // Logs "Promise resolved successfully!"
    .catch(error => console.error(error)); // Will not run because success is true

    const delayedPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received after delay!");
        }, 2000); // 2-second delay
    });
    
delayedPromise
        .then(data => console.log(data)) // Logs after 2 seconds: "Data received after delay!"
        .catch(error => console.error(error)); // No error, so this won't run

// Async/Await :  Syntactic sugar for working with promises. It makes asynchronous code look more like synchronous code.
// Basic Example : 
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 2000); // Simulate a 2-second delay
    });
}

async function main() {
    console.log("Fetching data...");
    const data = await fetchData(); // Wait for the promise to resolve
    console.log(data); // Logs: "Data fetched!"
}

main();

// Sequential Async Operation : 
function taskOne() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task One Completed"), 1000);
    });
}

function taskTwo() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task Two Completed"), 2000);
    });
}

async function main() {
    console.log("Starting tasks...");
    const result1 = await taskOne(); // Wait for Task One
    console.log(result1); // Logs: "Task One Completed"

    const result2 = await taskTwo(); // Wait for Task Two
    console.log(result2); // Logs: "Task Two Completed"

    console.log("All tasks completed!");
}

main();

// Parallel Async Operations :  Using Promise.all() to run multiple promises in parallel.
function taskOne() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task One Completed"), 1000);
    });
}

function taskTwo() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task Two Completed"), 2000);
    });
}

async function main() {
    console.log("Starting tasks in parallel...");
    const results = await Promise.all([taskOne(), taskTwo()]);
    console.log(results); // Logs: ["Task One Completed", "Task Two Completed"]
}

main();

// Async Non-Blocking example : 
async function asyncTask() {
    console.log("Async task started...");
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate 2-second delay
    console.log("Async task completed!");
}

// Synchronous function
function syncTask() {
    console.log("Synchronous task executed!");
}

// Main function to demonstrate non-blocking behavior
function main() {
    console.log("Main function started...");
    asyncTask(); // Call the async function
    syncTask(); // Call the synchronous function
    console.log("Main function ended...");
}

main();

// Async Await with chaining : 
function fetchUserId() {
    return new Promise((resolve) => {
      setTimeout(() => resolve('user123'), 1000); // Mock API call delay
    });
  }
  
  function fetchUserDetails(userId) {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ userId: userId, username: 'JaneDoe' }), 1000); // Another mock API call
    });
  }
  
  function fetchUserPermissions(username) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(['read', 'write']), 1000); // Final mock API call
    });
  }
  
  // Function to chain these calls using async/await
  async function getUserInfo() {
    try {
      const userId = await fetchUserId();
      const userDetails = await fetchUserDetails(userId);
      const permissions = await fetchUserPermissions(userDetails.username);
      
      return {
        userId: userDetails.userId,
        username: userDetails.username,
        permissions: permissions
      };
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  