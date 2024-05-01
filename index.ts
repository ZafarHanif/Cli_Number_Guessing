#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

console.log(
  chalk.yellow.bold("Welcome to ") +
    chalk.cyan.bold("CodeWithZefi - CLI Number Guessing Game\n")
);

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answers = await inquirer.prompt([
  {
    name: "userGuessNumber",
    type: "number",
    message: chalk.blue.bold("Please guess a number between 1-5:"),
  },
]);

if (answers.userGuessNumber === randomNumber) {
  console.log(
    chalk.green.bold("\nCongratulations! You guessed the right number 🎉\n")
  );
} else {
  console.log(
    chalk.red.bold(
      "\nSorry, you guessed the wrong number 😔 Better luck next time!\n"
    )
  );
}