#!/usr/bin/env node
import inquirer from "inquirer";
console.log("wellcome to CodeWithZefi - CLI Number Guessing Game");
// 1. Computer Will generate a random number - DONE
// 2. User input for guessing number - DONE
// 3. Compare user input with computer generated number and show result - DONE
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1-5:",
    },
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("Congratulations! You guessed the right number ");
}
else {
    console.log("Sorry, you guessed the wrong number.");
}
