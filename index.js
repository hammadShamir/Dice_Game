// **************DICE 1*****************

var image_1 = document.querySelector(".img1");

var randomDice1 = Math.floor(Math.random() * 6) + 1;

var imageSource1 = "images/dice" + randomDice1 + ".png";
image_1.setAttribute("src", imageSource1);


// **************DICE 2*****************


var image_2 = document.querySelector(".img2");

var randomDice2 = Math.floor(Math.random() * 6) + 1;

var imageSource2 = "images/dice" + randomDice2 + ".png";
image_2.setAttribute("src", imageSource2);


// *****************THE RESULT****************

var result = document.querySelector("#refreshMe");

if (randomDice1 === randomDice2) {
    result.textContent = "Match Draw!";
} else if (randomDice1 > randomDice2) {
    result.textContent = "Player 1 Wins!";
} else {
    result.textContent = "Player 2 Wins!";
}
