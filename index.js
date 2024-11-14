
// »»» First Dice «««
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random number between 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0]; // variable to point to the 1st img -> img1
image1.setAttribute("src", randomImageSource); // to change the attribute that is linked to img1


// »»» Secound Dice «««
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2); //variable to point to the 2nd img -> img2 and to change the attribute that is linked to img2

// »»» Conditions and messages «««

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}

else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}

else{
  document.querySelector("h1").innerHTML = "DRAW !";
}
