function shout(string) {
  return string.toUpperCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

var lowercase = 'hello!'
lowercase.toLowerCase() === lowercase

var uppercase = "HELLO!"
uppercase.toUpperCase() === uppercase


function sayHiToGrandma(string){
    if (string === "I love you, Grandma.")
      return "I love you, too."
      else if (string === lowercase)
        return "I can't hear you!"
      else (string === uppercase)
        return "YES INDEED!"
}



function whisper(string){
  return string.toLowerCase()
  }

function logWhisper(string){
  console.log(string.toLowerCase())
}