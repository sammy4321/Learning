let score = 85;

if (score > 90) {
  console.log("Excellent!");
} else if (score > 75) {
  console.log("Good job!");
} else {
  console.log("Keep trying!");
}

let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Output: Adult

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName);
// Output: Wednesday
