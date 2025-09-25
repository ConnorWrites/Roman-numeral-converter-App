const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");
const clear = document.getElementById("clear-btn");

const romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
const numerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function convertToRoman() {
let userInput = Number(input.value);
output.innerText = "";

if (input.value === "") {
output.innerText = "Please enter a valid number";
return;
} else if (input.value <= 0) {
output.innerText = "Please enter a number greater than or equal to 1";
return;
} else if (input.value > 3999) {
output.innerText = "Please enter a number less than or equal to 3999";
return;
}

for (let i = 0; i < romans.length; i++) {
while (userInput >= numerals[i]) {
userInput -= numerals[i];
output.innerText += romans[i];
}
}

}

button.addEventListener("click", convertToRoman);
number.addEventListener("keydown", e => {
if (e.key === "Enter") {
convertToRoman();
}
});

clear.addEventListener("click", () => { output.innerText = ""; input.value = ""; });
