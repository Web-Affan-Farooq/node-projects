#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let answer:{
    Q1:number;
    Q2:number;
    Q3:string;
} = await inquirer.prompt(
    [
        {
            name: "Q1",
            type: "number",
            message: "Enter first number",
        },
        {
            name: "Q2",
            type: "number",
            message: "Enter second number",
        }, 
        {
            name: "Q3",
            type: "list",
            message: "Select operation",
            choices:["Addition","Subtraction","Multiplication","Division"],
        },
    ]
);
if(answer.Q3 === "Addition") {
    console.log(answer.Q1+answer.Q2);
} else if(answer.Q3 === "Subtraction") {
    console.log(answer.Q1-answer.Q2);
} else if(answer.Q3 === "Multiplication") {
    console.log(answer.Q1*answer.Q2);
} else if(answer.Q3 === "Division" ) {
    console.log(answer.Q1/answer.Q2);
} else {
    console.error("Error");
}
