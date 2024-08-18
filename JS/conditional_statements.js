// If-Else Statement :
let score = 75;
if (score >= 80) {
  console.log("You got an A!");
} else if (score >= 70) {
  console.log("You got a B!");
} else {
  console.log("You failed!");
}

// Ternary Operator :
let isWeekend = true;
let message = (isWeekend) ? "It's the weekend!" : "It's a weekday.";
console.log(message);

// Switch statement :  
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Today is Monday.");
    break;
  case "Tuesday":
    console.log("Today is Tuesday.");
    break;
  default:
    console.log("Invalid day.");
}

// Switch statement with Multiple Cases : 
let fruit = "Apple";
switch (fruit) {
  case "Apple":
  case "Banana":
  case "Cherry":
    console.log("It's a fruit!");
    break;
  default:
    console.log("Invalid fruit.");
}