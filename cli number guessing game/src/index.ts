#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";

const randomNumber= Math.floor(Math.random() * 10 + 1 );
// console.log(randomNumber);

const answer = await inquirer.prompt([
    {
        name:"userGuessNumber",
        type:"number",
        message:"Please guess a number between 1 to 10",
    }
]);
if (answer.userGuessNumber === randomNumber) {
    console.log(chalk.green("you've guess the correct number"));
} else {
    console.log(chalk.red("Oop's you've guess a wrong number"));
}
// If the number is not 
// completed !!! 
