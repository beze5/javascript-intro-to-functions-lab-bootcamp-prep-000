function shout(string) {
  return string.toUpperCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

var lowercase = 'hello!';
lowercase.toLowerCase() === lowercase;

function sayHiToGrandma(string){
    if (string === lowercase)
      return "I can't hear you!"
}


var uppercase = "HELLO!"
 
uppercase.toUpperCase() === uppercase

function sayHiToGrandma(string){
  if (string === uppercase)
  return "YES INDEED!"
}
