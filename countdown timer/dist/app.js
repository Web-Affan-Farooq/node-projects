#! /usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
let input = await inquirer.prompt([
    {
        name: "userInput",
        type: "number",
        message: "Enter countdown",
        validate: (input) => {
            if (isNaN(input)) {
                return "Please Enter a number";
            }
            else if (input > 60) {
                return "Seconds must be less than 60";
            }
            else {
                return true;
            }
        }
    }
]);
input = input.userInput;
function startTime(value) {
    let intTime = new Date().setSeconds(new Date().getSeconds() + value);
    let intervalTime = new Date(intTime);
    setInterval((() => {
        let currentTime = new Date();
        let timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Timer expired");
            process.exit();
        }
        let min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        let sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}: ${sec.toString().padStart(2, "0")}: `);
    }), 1000);
}
startTime(input);
// --- completed
