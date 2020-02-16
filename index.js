function takeANumber(currentLine,newPerson){
currentLine.push(newPerson)
var i = 0;
return (`Welcome, ${newPerson}. You are number ${currentLine.length} in line.`);
}

function nowServing(katzDeliLine){
if (katzDeliLine.length>0){
  var name = katzDeliLine.shift();
  return `Currently serving ${name}.`
} else {
  return "There is nobody waiting to be served!";
}
}

function currentLine (katzDeliLine){
var string = 'The line is currently: '
if (katzDeliLine.length>0){
  for (var i = 0; i < katzDeliLine.length; i++) {
<<<<<<< HEAD
    string += `${i+1}. ${katzDeliLine[i]}`
    if(i<katzDeliLine.length - 1){string+=', '}
  }
  return string
=======
    var count = [];
    count.push(console.log(`${i+1}. ${katzDeliLine[i]}`))
  }
  return `The line is currently: ${count}`
>>>>>>> 705c660b73e835430004edfce623a72843ef4841
} else {
  return "The line is currently empty."
}
}
