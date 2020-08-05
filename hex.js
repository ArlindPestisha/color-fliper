// Here I am dec my array from where I am going to genareat HEX colors.
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// Here are my variables that I am going to maniplulate in DOM
const btn = document.getElementById('btn')
const color = document.querySelector('.color')
// Here I ma adding a eventlistner to the button
btn.addEventListener("click", function () {
    // this is the variable for hex#
    let hexColor = "#"
    // this is the loop to genarate the hex color
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})
// function to get a random number and after that to use inside the loop
function getRandomNumber() {
    return  Math.floor(Math.random() * hex.length);
}