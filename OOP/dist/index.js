#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
class Person {
    personality;
    constructor(personality) {
        this.personality = 'Unknown';
    }
    extrovert() {
        this.personality = "extroverte";
        console.log(`\n\t\t\t\t\t\t ${chalk.green.bold(this.personality)}\n`);
    }
    introvert() {
        this.personality = "introverte";
        console.log(`\n\t\t\t\t\t\t${chalk.green.bold(this.personality)}\n`);
    }
}
let answer = await inquirer.prompt([
    {
        name: "userName",
        type: "input",
        message: "What is your name",
    },
    {
        name: "number",
        type: "number",
        message: "Type 1 if you want to talk to others an type 0 if you don't want to talk to others",
    }
]);
if (answer.number === 1) {
    let obj = new Person(answer.userName).extrovert();
}
else if (answer.number === 0) {
    let obj = new Person(answer.userName).introvert();
}
