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

    function userName() {
    do {
        userName = prompt("What's your name?");
    } while (userName == null || userName.trim() == "")
        (userName.indexOf(" ") < 0);
        userName = userName[0].toUpperCase() + userName.substring(1).toLowerCase();
}

var correctAnswer = 0;

function playGame() {
    speakGerman();
    starbucksJob();
    catName();
    favoriteAuthor();
    housePets();

    function speakGerman() {
    var speakGerman = confirm("OK, "+userName+"\n\nDo I speak German?");
    console.log("Question one: "+speakGerman);
    if (speakGerman) {
    correctAnswer+=1;
    console.log("Correct answer: "+correctAnswer);
    document.getElementById("languageP").innerHTML = "I do speak German, "+userName+"! Just enough to have a conversation :>";
    } else {
    document.getElementById("languageP").innerHTML = "Sorry, that's wrong! I speak some German, Spanish, and ASL, "+userName+" :>";
    }
    }

    function starbucksJob() {
    var starbucksJob = confirm("Alright! \n\nDo I work at Starbucks?");
    console.log("Question two: "+starbucksJob);
    if (starbucksJob) {
    document.getElementById("starbucksP").innerHTML = "Aww, sorry, "+userName+". I used to work at Starbucks, but not anymore.";
    } else {
    correctAnswer+=1;
    console.log("Correct answer: "+correctAnswer);
    document.getElementById("starbucksP").innerHTML = "You're right, "+userName+"! I don't work at Starbucks anymore. :>";
    }
    }

    function catName() {
    var catName = confirm("Two down, three to go, "+userName+"! \n\nDoes my oldest cat's name start with an R?");
    console.log("Question three: "+catName);   
    if (catName) {
    document.getElementById("catNameP").innerHTML = "Almost, "+userName+"! My youngest cat's name starts with an R. (Ronan)";
    } else {
    correctAnswer+=1;
    console.log("Correct answer: "+correctAnswer);
    document.getElementById("catNameP").innerHTML = "You got it, "+userName+"! My oldest cat's name starts with a B! (Bogey)";
    }
    }

    function favoriteAuthor() {
    var favoriteAuthor = prompt("So, " +userName+ ", is Maggie Stiefvater the author of my favorite series?");
    console.log("Question four: " +favoriteAuthor);
    if (favoriteAuthor.toLowerCase() === "yes" || favoriteAuthor.toLowerCase() === "y") {
    correctAnswer+=1;
    console.log("Correct answer: "+correctAnswer);
    document.getElementById("favoriteAuthorP").innerHTML = "You're right, "+userName+"!";
    } else {
    document.getElementById("favoriteAuthorP").innerHTML = "Sorry, "+userName+", but that's her name!";
    }
    }

    function housePets() {
    var housePets = 0;
    var number = 8;
    while (housePets < 8 || housePets > 8) {
    housePets = prompt("Last question, " +userName+ "! How about... how many pets are in my house?");
    console.log("Question five: "+housePets);  
    if (housePets == number) {              // guessed 8 
    correctAnswer+=1;
    console.log("Correct answer: "+correctAnswer);
    document.getElementById("housePetsP").innerHTML = "You got it, " + userName +"! Too many for me.";  
    } else if (housePets > number) {       // guessed more than 8
    alert("Whoa, nelly! Too many, "+userName+"!");
    } else {                            // don't need to put a < 8 bc above already solves that
    alert("I wish! Too low, "+userName+"!");
    }
    }
    }

}

function score() {
    var score = alert("You're done, "+userName+"! You got "+correctAnswer+" questions right out of 5!");
    document.getElementById("scoreP").innerHTML = "You're done, "+userName+"! You got "+correctAnswer+" questions right out of 5!";
}