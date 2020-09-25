function takeANumber(currentLine, newPerson) {
  
  currentLine.push(newPerson); //[] -> ["Ada"]
  return "Welcome, " + newPerson + ". You are number " + currentLine.length + " in line.";
  
}
const line = [];
takeANumber(currentLine, "Ada");

function nowServing(currentLine) {
  
  if (currentLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  
  let firstPersonInLine = currentLine.shift();
    return "Currently serving " + firstPersonInLine + '.';
}

function currentLine(katzDeliLine) {
  
  
}