#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000;
let myPin = 1234;
console.log(chalk.blue("Welcome to bank islami"));
console.log(`Your pin is ${myPin}`);
let pinAnswer = await inquirer.prompt([
    {
        name: "Q1",
        type: "number",
        message: "Enter your pin",
    }
]);
if (pinAnswer.Q1 === myPin) {
    console.log("correct pin");
    // ____main____
    //user select operations
    let operationAns = await inquirer.prompt([
        {
            name: "Q2",
            type: "list",
            message: "Select option",
            choices: ["Withdraw", "Check current balance", "Deposit"],
        }
    ]);
    //as the user select witdraw
    if (operationAns.Q2 === "Withdraw") {
        let amount = await inquirer.prompt([
            {
                name: "Q3",
                type: "number",
                message: "Enter amount to be withdraw"
            }
        ]);
        if (amount.Q3 > myBalance) {
            console.log(chalk.red.bold("insufficient balance"));
        }
        else {
            myBalance = myBalance - amount.Q3;
            console.log(chalk.green.bold(`cash deposited successfully\n`));
            console.log(`Your remaining balance is ${chalk.blue.bold(myBalance)}`);
        }
    }
    //as user want to check balance
    if (operationAns.Q2 === "Check current balance") {
        console.log(myBalance);
    }
    ;
    //as user want to deposit cash
    if (operationAns.Q2 === "Deposit") {
        let amount = await inquirer.prompt([
            {
                name: "Q4",
                type: "number",
                message: "Enter amount to deposit ",
            }
        ]);
        myBalance = amount.Q4 + myBalance;
        console.log(myBalance);
        console.log(chalk.green.bold("cash deposited successfully"));
    }
}
else {
    console.log(chalk.red.bold("Incorrect pin"));
}
//completed
