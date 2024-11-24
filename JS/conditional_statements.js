if (score > 50) {
    console.log("You passed!");
  } else if (score == 50) {
    console.log("Just made it!");
  } else {
    console.log("Try again next time.");
  }

let result = score > 50 ? "Pass" : "Fail";

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    default:
      day = "Unknown Day";
  }  