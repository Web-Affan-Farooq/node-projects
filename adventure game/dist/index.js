#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel += 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please enter your name: "
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select your opponent: ",
        choices: ["Skeleton", "Alien", "Zombie"],
    }
]);
let player_1 = new Player(player.name);
let opponent_1 = new Opponent(opponent.select);
let i = 0;
do {
    //-----------------select skeleton-----------------------------
    if (opponent.select === "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "What do you want to do",
                choices: ["Attack", "Drink potion", "Run for your life"]
            },
        ]);
        switch (ask.option) {
            case "Attack":
                let winNumber = Math.floor(Math.random() * 2);
                if (winNumber > 0) {
                    console.log(`\t\t\t\t\t\t ${chalk.yellowBright.bold("Attack successfull")}`);
                    if (player_1.fuel > 0 && opponent_1.fuel > 0) {
                        player_1.fuelDecrease();
                        opponent_1.fuelDecrease();
                        console.log(`${player_1.name} fuel is  ${player_1.fuel}`);
                        console.log(`${opponent_1.name} fuel is  ${opponent_1.fuel}`);
                    }
                    else if (player_1.fuel === 0 || player_1.fuel < 0 && opponent_1.fuel > 0) {
                        console.log(`${chalk.red.bold("you'er under siezed by " + opponent_1)}`);
                        process.exit();
                    }
                    else if (opponent_1.fuel === 0 && player_1.fuel > 0) {
                        console.log("you're winner");
                        process.exit();
                    }
                }
                else if (winNumber < 0 || winNumber === 0) {
                    console.log(`\n \t\t\t\t\t\t${chalk.red("Target missed")}`);
                    player_1.fuelDecrease();
                    console.log("Player fuel :" + player_1.fuel);
                    console.log("opponent fuel :" + opponent_1.fuel);
                    console.log(chalk.red("Your energy is running low"));
                    if (player_1.fuel <= 0) {
                        console.log(`${chalk.red.bold("you'er under siezed by " + opponent_1)}`);
                        process.exit();
                    }
                }
                break;
            case "Drink potion":
                if (player_1.fuel === 25) {
                    player_1.fuelIncrease();
                }
                break;
            case "Run for your life":
                console.log(`${chalk.red.bold("you'er under siezed by " + opponent_1)}`);
                break;
        }
    }
    //-----------------select Alien-----------------------------
    if (opponent.select === "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "What do you want to do",
                choices: ["Attack", "Drink potion", "Run for your life"]
            },
        ]);
        switch (ask.option) {
            case "Attack":
                let winNumber = Math.floor(Math.random() * 2);
                if (winNumber > 0) {
                    console.log(`\t\t\t\t\t\t ${chalk.yellowBright.bold("Attack successfull")}`);
                    if (player_1.fuel > 0 && opponent_1.fuel > 0) {
                        player_1.fuelDecrease();
                        opponent_1.fuelDecrease();
                        console.log(`${player_1.name} fuel is  ${player_1.fuel}`);
                        console.log(`${opponent_1.name} fuel is  ${opponent_1.fuel}`);
                    }
                    else if (player_1.fuel === 0 || player_1.fuel < 0 && opponent_1.fuel > 0) {
                        console.log(`${chalk.red.bold("you'er under siezed by " + opponent_1)}`);
                        process.exit();
                    }
                    else if (opponent_1.fuel === 0 && player_1.fuel > 0) {
                        console.log("you're winner");
                        process.exit();
                    }
                }
                else if (winNumber < 0 || winNumber === 0) {
                    console.log(`\n \t\t\t\t\t\t${chalk.red("Target missed")}`);
                    player_1.fuelDecrease();
                    console.log("Player fuel :" + player_1.fuel);
                    console.log("opponent fuel :" + opponent_1.fuel);
                    console.log(chalk.red("Your energy is running low"));
                    if (player_1.fuel <= 0) {
                        console.log(`${chalk.red.bold("you'er under siezed by " + opponent_1)}`);
                        process.exit();
                    }
                }
                break;
            case "Drink potion":
                if (player_1.fuel === 25) {
                    player_1.fuelIncrease();
                }
                break;
            case "Run for your life":
                console.log(`${chalk.red.bold("you'er under siezed by " + opponent_1)}`);
                break;
        }
    }
    //-----------------select Zombie-----------------------------
    if (opponent.select === "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "What do you want to do",
                choices: ["Attack", "Drink potion", "Run for your life"]
            },
        ]);
        switch (ask.option) {
            case "Attack":
                let winNumber = Math.floor(Math.random() * 2);
                if (winNumber > 0) {
                    console.log(`\t\t\t\t\t\t ${chalk.yellowBright.bold("Attack successfull")}`);
                    if (player_1.fuel > 0 && opponent_1.fuel > 0) {
                        player_1.fuelDecrease();
                        opponent_1.fuelDecrease();
                        console.log(`${player_1.name} fuel is  ${player_1.fuel}`);
                        console.log(`${opponent_1.name} fuel is  ${opponent_1.fuel}`);
                    }
                    else if (player_1.fuel === 0 || player_1.fuel < 0 && opponent_1.fuel > 0) {
                        console.log(`${chalk.red.bold("you'er under siezed by " + opponent_1)}`);
                        process.exit();
                    }
                    else if (opponent_1.fuel === 0 && player_1.fuel > 0) {
                        console.log("you're winner");
                        process.exit();
                    }
                }
                else if (winNumber < 0 || winNumber === 0) {
                    console.log(`\n \t\t\t\t\t\t${chalk.red("Target missed")}`);
                    player_1.fuelDecrease();
                    console.log("Player fuel :" + player_1.fuel);
                    console.log("opponent fuel :" + opponent_1.fuel);
                    console.log(chalk.red("Your energy is running low"));
                    if (player_1.fuel <= 0) {
                        console.log(`${chalk.red.bold("you'er under siezed by " + opponent_1)}`);
                        process.exit();
                    }
                }
                break;
            case "Drink potion":
                if (player_1.fuel === 25) {
                    player_1.fuelIncrease();
                }
                break;
            case "Run for your life":
                console.log(`${chalk.red.bold("you'er under siezed by " + opponent_1)}`);
                break;
        }
    }
    i++;
} while (true);
// ---------completed
