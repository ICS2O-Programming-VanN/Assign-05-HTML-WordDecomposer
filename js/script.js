
// Activates Strict Mode
"use strict";

function analyze() {
  let numberOfVowels = 0
  let vowelMessage = ""
  
  let userWord = document.getElementById("word").value;
  
  let wordToArray = userWord.split("");

  let reverseWord = wordToArray.reverse()

  let joinWord = reverseWord.join("")

  for (let i in userWord) {
    if (userWord[i] == "a" || userWord[i] == "e" || userWord[i] == "i" || userWord[i] == "o" || userWord[i] == "u") {
      numberOfVowels += 1
      vowelMessage = "Your String has " + numberOfVowels + " vowels in it!";
    }
  }

  document.getElementById("reversed-word").innerHTML = 'Your word reversed is "' + joinWord + '".'
  document.getElementById("number-of-vowels").innerHTML = vowelMessage
}