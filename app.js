
//Here I ma declaring the varialbles that I am going to use belowe
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// Here I am adding a eventlistener to the button wher I click to change the background
btn.addEventListener("click", function () {
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
   // console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})

// This is a function that get a randomNumber 
function getRandomNumber () {
    return Math.floor(Math.random() * colors.length);
}