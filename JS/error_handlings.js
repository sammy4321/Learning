try {
    // Code that may throw an error
    throw new Error("Something went wrong!");
  } catch (error) {
    // Code that runs if an error occurs
    console.error(error.message);  // Outputs: "Something went wrong!"
  } finally {
    // Code that runs regardless of the previous result
    console.log("Cleaning up resources...");  // Always executed
  }
  