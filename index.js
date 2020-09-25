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
    // var peopleInLine='The line is currently: ' + 1 + ". " + line[0] + 2 + ". " + line[1];

  
  var peopleInLine='The line is currently: ' ;
  
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  let spotInLine = 1;
  for(let i=0; i < line.length; i++) {
    peopleInLine += spotInLine + ". " + line[i] + ", ";
    spotInLine++;
  }
  peopleInLine.
  return peopleInLine;
}
// line -> ["Ada", "Grace"]
//"The line is currently: 1. Ada, 2. Grace"`

