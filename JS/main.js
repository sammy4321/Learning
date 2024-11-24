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