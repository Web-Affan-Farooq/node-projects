#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let confirmation = await inquirer.prompt([
    {
        name: "startQuiz",
        type: "confirm",
        message: "Want to start the quiz ?",
    }
]);
confirmation = confirmation.startQuiz;
if (confirmation) {
    const quiz = await inquirer.prompt([
        {
            name: "question_1",
            type: "list",
            message: chalk.magentaBright("What is to correct way to declare a function?"),
            choices: [chalk.white.underline("Start with function keyword"), chalk.white.underline("Ends with function keyword"), chalk.white.underline("No need to use function keyword"), chalk.white.underline("We have to declare it within function")],
        },
        {
            name: "question_2",
            type: "list",
            message: chalk.magentaBright("What are variables"),
            choices: [chalk.white.underline("Naming convention of javascript"), chalk.white.underline("both a and b"), chalk.white.underline("memory location where a value is stored"), chalk.white.underline("none of the above")],
        },
        {
            name: "question_3",
            type: "list",
            message: chalk.magentaBright(`What is the function of "typeOf" operator`),
            choices: [chalk.white.underline("Develop type system"), chalk.white.underline("Understanding type"), chalk.white.underline("give type of data in output"), chalk.white.underline("none of the above")],
        },
        {
            name: "question_4",
            type: "list",
            message: chalk.magentaBright("How do you display result on console"),
            choices: [chalk.white.underline("using console.dir()"), chalk.white.underline("using console.log()"), chalk.white.underline("Both of the above"), chalk.white.underline("None of the above")]
        },
        {
            name: "question_5",
            type: "list",
            message: chalk.magentaBright("what is NaN"),
            choices: [chalk.white.underline("Not a number"), chalk.white.underline("not any value"), chalk.white.underline("implicit any"), chalk.white.underline("Explicit any")],
        },
        {
            name: "question_6",
            type: "list",
            message: chalk.magentaBright("Why are modules used in typescript"),
            choices: [chalk.white.underline("To export and import a piece of code"), chalk.white.underline("not any value"), chalk.white.underline("Importing both"), chalk.white.underline("Only for importing remote packages")],
        },
        {
            name: "question_7",
            type: "list",
            message: chalk.magentaBright("what are generics"),
            choices: [chalk.white.underline("type parameters"), chalk.white.underline("type of a value"), chalk.white.underline("A function which craetes types"), chalk.white.underline("rest parameter")],
        },
        {
            name: "question_8",
            type: "list",
            message: chalk.magentaBright("What is number type in typescript"),
            choices: [chalk.white.underline("A value representing integers"), chalk.white.underline("Binary operators"), chalk.white.underline("nan"), chalk.white.underline("Value which is written between inverted commas")],
        },
        {
            name: "question_9",
            type: "list",
            message: chalk.magentaBright("What is term 'tuples' means"),
            choices: [chalk.white.underline("Method of defining types to array"), chalk.white.underline("Array implicit types"), chalk.white.underline("Built in utility of typescript compiler"), chalk.white.underline("Explicit any")],
        },
        {
            name: "question_10",
            type: "list",
            message: chalk.magentaBright("Which operator is used to add two numbers"),
            choices: [chalk.white.underline("+"), chalk.white.underline("++"), chalk.white.underline("**"), chalk.white.underline("/")],
        },
    ]);
    let score = 0;
    switch (quiz.question_1) {
        case chalk.white.underline("Start with function keyword"):
            score++;
            console.table(chalk.underline.green("1. Correct"));
            break;
        default:
            console.log(chalk.red.bold("1. Incorrect"));
    }
    switch (quiz.question_2) {
        case chalk.white.underline("memory location where a value is stored"):
            score++;
            console.table(chalk.underline.green("1. Correct"));
            break;
        default:
            console.log(chalk.red.bold("1. Incorrect"));
    }
    switch (quiz.question_3) {
        case chalk.white.underline("give type of data in output"):
            score++;
            console.table(chalk.underline.green("1. Correct"));
            break;
        default:
            console.log(chalk.red.bold("1. Incorrect"));
    }
    switch (quiz.question_4) {
        case chalk.white.underline("using console.log()"):
            score++;
            console.table(chalk.underline.green("1. Correct"));
            break;
        default:
            console.log(chalk.red.bold("1. Incorrect"));
    }
    switch (quiz.question_5) {
        case chalk.white.underline("Not a number"):
            score++;
            console.table(chalk.underline.green("1. Correct"));
            break;
        default:
            console.log(chalk.red.bold("1. Incorrect"));
    }
    switch (quiz.question_6) {
        case chalk.white.underline("To export and import a piece of code"):
            score++;
            console.table(chalk.underline.green("1. Correct"));
            break;
        default:
            console.log(chalk.red.bold("1. Incorrect"));
    }
    switch (quiz.question_7) {
        case chalk.white.underline("type parameters"):
            score++;
            console.table(chalk.underline.green("1. Correct"));
            break;
        default:
            console.log(chalk.red.bold("1. Incorrect"));
    }
    switch (quiz.question_8) {
        case chalk.white.underline("A value representing integers"):
            score++;
            console.table(chalk.underline.green("1. Correct"));
            break;
        default:
            console.log(chalk.red.bold("1. Incorrect"));
    }
    switch (quiz.question_9) {
        case chalk.white.underline("Method of defining types to array"):
            score++;
            console.table(chalk.underline.green("1. Correct"));
            break;
        default:
            console.log(chalk.red.bold("1. Incorrect"));
    }
    switch (quiz.question_10) {
        case chalk.white.underline("+"):
            score++;
            console.table(chalk.underline.green("1. Correct"));
            break;
        default:
            console.log(chalk.red.bold("1. Incorrect"));
    }
    console.log(chalk.blue.bold(` Score : ${score}`));
}
else {
    console.log("It's OK");
}
//-------------------completed-------------------------
