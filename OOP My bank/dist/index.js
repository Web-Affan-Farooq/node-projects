#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let bankDatabase = [];
class Bank_Account {
    firstName;
    lastName;
    gender;
    age;
    phoneNumber;
    accountPasskey;
    balance;
    constructor(firstName, lastName, gender, age, phoneNumber, accountPasskey, balance) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.accountPasskey = accountPasskey;
        this.balance = balance;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.accountPasskey = accountPasskey;
        this.balance = balance;
    }
}
async function query() {
    let userOptions = await inquirer.prompt({
        name: "userOptions",
        type: "list",
        message: "Select what do you want to do",
        choices: ["Create bank account", "Check status", "Delete account", "Check balance", "Withdraw", "Deposit cash", "Exit"],
    });
    userOptions = userOptions.userOptions;
    if (userOptions === "Check status") {
        let pin = await inquirer.prompt({
            name: "passKey",
            type: "input",
            message: "Enter passkey",
        });
        pin = pin.passKey;
        for (let i = 0; i < bankDatabase.length; i++) {
            if (bankDatabase[i].accountPasskey === pin) {
                console.table(bankDatabase[i]);
                break;
            }
            else if (!bankDatabase[i] || bankDatabase[i].accountPasskey !== pin) {
                console.log(`\t\t\t\t\t\t\t \n ${chalk.red.bold("No user found")}\n`);
            }
        }
    }
    else if (userOptions === "Create bank account") {
        let userInfo = await inquirer.prompt([
            {
                name: "firstName",
                type: "input",
                message: "Enter first name"
            },
            {
                name: "lastName",
                type: "input",
                message: "Enter last name"
            },
            {
                name: "gender",
                type: "list",
                message: "Select gender",
                choices: ["Male", "Female"],
            },
            {
                name: "userAge",
                type: "number",
                message: "Enter your age",
            },
            {
                name: "userTel",
                type: "number",
                message: "Enter tel. number"
            },
            {
                name: "pincode",
                type: "input",
                message: "Set a passkey to your account",
            },
            {
                name: "balance",
                type: "number",
                message: "Enter your balance",
            },
            {
                name: "confirmCreation",
                type: "confirm",
                message: "Confirm account creation ?",
            }
        ]);
        if (userInfo.confirmCreation) {
            let firstName = userInfo.firstName;
            let lastName = userInfo.lastName;
            let gender = userInfo.gender;
            let age = userInfo.userAge;
            let phoneNumber = userInfo.userTel;
            let passkey = userInfo.pincode;
            let balance = userInfo.balance;
            if (balance > 10000) {
                balance = balance - 100;
                console.log(`\t\t \nRS: 100/- deducted on balance greater than 10000\n`);
            }
            console.log(chalk.green.bold(`\n \t\t\t\t\t\t Account created successfully \n`));
            let user = new Bank_Account(firstName, lastName, gender, age, phoneNumber, passkey, balance);
            bankDatabase.push(user);
            console.log(bankDatabase);
            // for(let i=0; i<bankDatabase.length; i++) {
            //     bankDatabase.forEach((account:Account) => {
            //         if(account.accountPasskey === bankDatabase[i].accountPasskey) {
            //             console.log("please set a unique passkey");
            //         }
            //     });
            // }
        }
        else {
            console.log("No account can be created");
        }
    }
    else if (userOptions === "Delete account") {
        let pin = await inquirer.prompt({
            name: "passKey",
            type: "input",
            message: "Enter passkey",
        });
        pin = pin.passKey;
        let guessPassword = [];
        bankDatabase.forEach((account) => {
            guessPassword.push(account.accountPasskey);
        });
        let deletingIndex = guessPassword.indexOf(pin);
        bankDatabase.splice(deletingIndex, 1);
        console.log(chalk.green.bold(`\n \t\t\t\t\t\t Account deleted successfully \n`));
        // console.log(bankDatabase);
    }
    else if (userOptions === "Check balance") {
        let pin = await inquirer.prompt({
            name: "passKey",
            type: "input",
            message: "Enter passkey",
        });
        pin = pin.passKey;
        let guessPassword = [];
        for (let i = 0; i < bankDatabase.length; i++) {
            if (bankDatabase[i].accountPasskey === pin) {
                console.log(`\n \t\t\t\t\t\tYour balance is ${chalk.blueBright.bold(bankDatabase[i].balance)}\n`);
                break;
            }
            else if (!bankDatabase[i] || bankDatabase[i].accountPasskey !== pin) {
                console.log(`\t\t\t\t\t\t\t \n ${chalk.red.bold("No user found")}\n`);
            }
        }
    }
    else if (userOptions === "Withdraw") {
        let pin = await inquirer.prompt([
            {
                name: "passKey",
                type: "input",
                message: "Enter passkey",
            },
            {
                name: "amount",
                type: "number",
                message: "Enter amount to withdrawl",
            }
        ]);
        let passwordList_3 = [];
        for (let i = 0; i < bankDatabase.length; i++) {
            if (bankDatabase[i].accountPasskey === pin.passKey) {
                let requiredAccount = bankDatabase[i];
                if (requiredAccount.balance > pin.amount) {
                    requiredAccount.balance = requiredAccount.balance - pin.amount;
                    console.log(chalk.green.bold(`\n \t\t\t\t\t\t \n ${pin.amount} withdrawl from your account successfully \n`));
                    console.log(`Current amount: ${requiredAccount.balance}`);
                }
                else {
                    console.log(`\n\t\t\t\t\t\t${chalk.red.bold("insufficient amount")}\n`);
                }
                break;
            }
            else if (!bankDatabase[i] || bankDatabase[i].accountPasskey !== pin) {
                console.log(`\t\t\t\t\t\t\t \n ${chalk.red.bold("No user found")}\n`);
            }
        }
    }
    else if (userOptions === "Deposit cash") {
        let pin = await inquirer.prompt([
            {
                name: "passKey",
                type: "input",
                message: "Enter passkey",
            },
            {
                name: "amount",
                type: "number",
                message: "Enter amount for cash deposit",
            },
        ]);
        for (let i = 0; i < bankDatabase.length; i++) {
            if (bankDatabase[i].accountPasskey === pin.passKey) {
                let requiredAccount = bankDatabase[i];
                requiredAccount.balance = requiredAccount.balance + pin.amount;
                if (requiredAccount.balance > 10000) {
                    requiredAccount.balance = requiredAccount.balance - 100;
                }
                console.log(chalk.green.bold(`\n \t\t\t\t\t\t \n ${pin.amount} deposited to your account successfully \n`));
                console.log(`\t\t \nRS: 100/- deducted on balance greater than 10000\n`);
                console.log(`Current amount: ${requiredAccount.balance}`);
                break;
            }
            else if (!bankDatabase[i] || bankDatabase[i].accountPasskey !== pin) {
                console.log(`\t\t\t\t\t\t\t \n ${chalk.red.bold("No user found")}\n`);
            }
        }
    }
    else if (userOptions === "Exit") {
        console.log(chalk.blueBright.bold(`\t\t\t\t\n created by "Muhammad Affan"\n`));
        console.log(chalk.blueBright.bold(`\t\t\t\t\n GIAIC Roll.no : 00223338\n`));
        process.exit();
    }
    else {
        console.log("Error while fetching option");
    }
}
let i = 0;
let condition = true;
while (condition) {
    await query();
}
//------ completed -----
