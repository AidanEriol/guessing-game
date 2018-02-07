// do {
//     userName = prompt("What's your name, young person?");
// } while (userName.indexOf(" ") < 0);
// userName = userName[0].toUpperCase() + userName.substring(1).toLowerCase();
// return userName;


// function capitalise(text) {
//     var makeCaps = true;
//     var newText ="";
//     for (index = 0; index < text.length; index++) {
//         newText += makeCaps? text[index].toUpperCase() : text[index].toLowerCase();
//         makeCaps = text[index] == " ";
//     }
//     return newText;
// }

// function getProperName() {
//     var name = getUserName();
//     name = capitalise(name);
//     // document.write(name);
//     document.getElementById("proper-name").innerHTML = name;
// }

var userName = "";
while (userName == null || userName.trim() == "") {
userName = prompt("Please tell us your name!");
}
console.log("User name: "+userName);
alert("Hello, "+userName+". Would you like to play a game?");

var correctAnswer = 0;

var questionOne = confirm("OK, "+userName+"\n\nDo I speak German?");
console.log("Question one: "+questionOne);
if (questionOne) {
  correctAnswer+=1;
console.log("Correct answer: "+correctAnswer);
  alert("I do speak German, "+userName+"! Just enough to have a conversation :>");
} else {
  alert("Sorry, that's wrong! I speak some German, Spanish, and ASL, "+userName+" :>");
}

var questionTwo = confirm("Alright! \n\nDo I work at Starbucks?");
console.log("Question two: "+questionTwo);
if (questionTwo) {
  alert("Aww, sorry, "+userName+". I used to work at Starbucks, but not anymore.");
} else {
  correctAnswer+=1;
  console.log("Correct answer: "+correctAnswer);
  alert("You're right, "+userName+"! I don't work at Starbucks anymore. :>");
}

var questionThree = confirm("Two down, three to go, "+userName+"! \n\nDoes my oldest cat's name start with an R?");
console.log("Question three: "+questionThree);   
if (questionThree) {
  alert("Almost, "+userName+"! My youngest cat's name starts with an R. (Ronan)");
} else {
  correctAnswer+=1;
console.log("Correct answer: "+correctAnswer);
  alert("You got it, "+userName+"! My oldest cat's name starts with a B! (Bogey)");
 }

questionFour = prompt("So, " +userName+ ", is Maggie Stiefvater the author of my favorite series?");
console.log("Question four: " +questionFour);
if (questionFour.toLowerCase() === "yes" || questionFour.toLowerCase() === "y") {
correctAnswer+=1;
console.log("Correct answer: "+correctAnswer);
alert("You're right, "+userName+"!");
} else {
alert("Sorry, "+userName+", but that's her name!");
}

var questionFive = 0;
var number = 8;
while (questionFive < 8 || questionFive > 8) {
questionFive = prompt("Last question, " +userName+ "! How about... how many pets are in my house?");
console.log("Question five: "+questionFive);  
if (questionFive == number) {              // guessed 8 
correctAnswer+=1;
console.log("Correct answer: "+correctAnswer);
  alert("You got it, " + userName +"! Too many for me.");  
} else if (questionFive > number) {       // guessed more than 8
  alert("Whoa, nelly! Too many, "+userName+"!");
} else {                            // don't need to put a < 8 bc above already solves that
  alert("I wish! Too low, "+userName+"!");
}
}

var score = confirm("You're done, "+userName+"! You got "+correctAnswer+" questions right out of 5!");




