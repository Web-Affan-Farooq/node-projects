#! /usr/bin/env node
import inquirer from "inquirer";
let todos = []; //main todolist array
let condition = true;
while (condition) { // running on condition basis
    let answer = await inquirer.prompt(//take user input as todo item  and after that conforming the addition of it to the todolist arry
    [
        {
            name: "Q1",
            type: "input",
            message: "Enter your todos",
        },
        {
            name: "Q2",
            type: "confirm",
            message: "Do you want to add more todos?",
            default: true,
        }
    ]);
    todos.push(answer.Q1); //add the todos to the array
    console.log(todos);
    condition = answer.Q2; //condition varies on answer 2 if answer is yes its continue adding and if f no then break the loop
}
let answer = await inquirer.prompt(//deleting feature
[
    {
        name: "Q3",
        type: "confirm",
        message: "Want to delete any todo item",
        default: true,
    }
]);
if (answer.Q3 === true) {
    let deleteTodo = await inquirer.prompt([
        {
            name: "Q4",
            type: "list",
            message: "Select todo you want to delete",
            choices: todos,
        }
    ]);
    let deleteIndex = todos.indexOf(deleteTodo.Q4);
    let deleteFunction = todos.splice(deleteIndex, 1);
    console.log(todos);
}
//__completed__
