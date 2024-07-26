#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
let userInput = await inquirer.prompt([
    {
        name: "Q1",
        type: "input",
        message: "Enter your paragraph and I'll count characters and words in it",
    }
]);
let array = userInput.Q1.trim().split(" ").length;
console.log(chalk.blue.bold(array));
//completed
