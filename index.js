function scuberGreetingForFeet(rideLength){
  // Write your code here!
  if(rideLength <= 400){
    return "This one is on me!";
  }
  else if((rideLength > 400) && (rideLength <= 2000)){
    return "That will be twenty bucks.";
  }
  else if((rideLength > 2000) && (rideLength <= 2500)){
    return "I will gladly take your thirty bucks.";
  }
  else{
    return "No can do.";
  }
}

let answer;

function ternaryCheckCity(city){
  // Write your code here!
  city === "NYC" ? (answer = "Ok, sounds good.") : (answer = "No go.");
  return answer;
}



function switchOnCharmFromTip(tip){
  // Write your code here!
  let tipResponse = "";
  switch(tip){
    case "generous":
      tipResponse = "Thank you so much.";
      break;
    case "not as generous":
      tipResponse = "Thank you.";
      break;
    default:
      tipResponse = "Bye.";
  }
  return tipResponse;
}