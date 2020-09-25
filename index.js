function takeANumber(currentLine, newPerson) {
  
  currentLine.push(newPerson); //[] -> ["Ada"]
  return "Welcome, " + newPerson + ". You are number " + line.length + " in line.";
  
}
const line = [];
takeANumber(line, "Ada");

function nowServing(currentLine) {
  
  if (currentLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  
  let firstPersonInLine = currentLine.shift();
    return "Currently serving " + firstPersonInLine + '.';
}

function currentLine(line) {
   var peopleInLine='';
    return people[i+1] + people[i+2]
    
  if (line.length === 0) {
    return "The line is currently empty.";
  }
}
//"The line is currently: 1. Ada, 2. Grace"`