
let msg1 = document.getElementById("message1");

let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("message3");
let msg4 = document.getElementById("message4");

let answer = Math.floor(Math.random() * 100) + 1;
console.log(answer);
let chance = 0;
let guessed_num = [];
function guessed() {
  //   let guess = prompt("Enter a number");
  num1 = document.getElementById("num1").value;
  if (num1 < 1 || num1 > 100) {
    alert("Please Enter a number Between 1 to 100");
  } else {
    guessed_num.push(num1);
    chance += 1;
    if (num1 < answer) {
      msg1.textContent = "Your Guess is Too low";
      msg2.textContent = "No. Of Guesses : " + chance;
      msg3.textContent = "Guessed Number Are: " + guessed_num;
      msg4.textContent = "Your Score is: " + (100 - chance);
    } else if (num1 > answer) {
      msg1.textContent = "Your Guess is Too High";
      msg2.textContent = "No. Of Guesses : " + chance;
      msg3.textContent = "Guessed Number Are: " + guessed_num;
      msg4.textContent = "Your Score is: " + (100 - chance);
    } else if (num1 == answer) {
      msg1.textContent = "YAHHH YOU WON ITTT!!";
      msg2.textContent = "The Number was " + answer;
      msg3.textContent = " You guessed it in " + chance + " Guesses";
      msg4.textContent = "Your Score is: " + (100 - chance);
    }
  }
}

let typed = new Typed(".type", {
  strings: ["I've Thought a Number. It's your Turn to Guess it.!"],
  typeSpeed: 40,
  // backSpeed: 50,
  // loop:true
});
var img1 = document.createElement("img");
img1.src = "https://www.pngitem.com/pimgs/m/36-360504_you-did-it-congratulations-congratulations-to-team-member.png";
var img1 = document.getElementById("header");
img1.appendChild(img1);
img1.setAttribute("style", "text-align:center", "height:200px", "width:300px","margin:auto");