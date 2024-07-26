#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const currency:any = {
    USD: 1, //base currency
    EUR: 0.93,
    GBP: 0.79,
    IND: 76.89,
    PKR: 286,
}
let user_answer = await inquirer.prompt(
    [
        {
            name:"From",
            message:"Enter from currency",
            type:"list",
            choices:["USD","EUR","GBP","IND","PKR"],
        },
        {
            name:"To",
            message:"Enter to currency",
            type:"list",
            choices:["USD","EUR","GBP","IND","PKR"],
        },
        {
            name:"Amount",
            message:"Enter your amount",
            type:"number"
        },
    ]
);
let userFromcurrency = user_answer.From;
let userTocurrency = user_answer.To;
let fromAmount = currency[userFromcurrency];
let toAmount = currency[userTocurrency];
let amount = user_answer.Amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.green.italic(`Amount: RS ${convertedAmount} /-`));
