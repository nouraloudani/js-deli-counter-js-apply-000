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
  var peopleInLine='The line is currently: ';
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  for(let i=0; i<line.lenght; i++) {
  
  }
}
//"The line is currently: 1. Ada, 2. Grace"`

