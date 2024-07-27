import inquirer from "inquirer";
class Bank_Account {
    firstName;
    lastName;
    age;
    gender;
    phoneNumber;
    balance;
    pinCode;
    constructor(firstName, lastName, age, gender, phoneNumber, balance, pinCode) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.balance = balance;
        this.pinCode = pinCode;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.balance = balance;
        this.pinCode = pinCode;
    }
}
let bankDatabase = [];
class Bank_Operations {
    async createAccount() {
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
                name: "age",
                type: "number",
                message: "Enter your age",
            },
            {
                name: "gender",
                type: "list",
                message: "Select gender",
                choices: ["Male", "Female"],
            },
            {
                name: "phoneNumber",
                type: "number",
                message: "Enter tel. number"
            },
            {
                name: "balance",
                type: "number",
                message: "Enter your balance",
            },
            {
                name: "pincode",
                type: "input",
                message: "Set a passkey to your account",
            },
            {
                name: "confirmCreation",
                type: "confirm",
                message: "Confirm account creation ?",
            }
        ]);
        if (userInfo.confirmCreation) {
            let user = new Bank_Account(userInfo.firstName, userInfo.lastName, userInfo.age, userInfo.gender, userInfo.phoneNumber, userInfo.balance, userInfo.pinCode);
            bankDatabase.push(user);
            console.log(bankDatabase);
            if (userInfo.balance > 10000) {
                let user = new Bank_Account(userInfo.firstName, userInfo.lastName, userInfo.age, userInfo.gender, userInfo.phoneNumber, userInfo.balance -= 100, userInfo.pinCode);
                bankDatabase.push(user);
                console.log(bankDatabase);
                console.log(`\t\t \nRS: 100/- deducted on balance greater than 10000\n`);
            }
        }
        else {
            console.log("No account can be created");
        }
    }
}
let bank = new Bank_Operations(); //-------------- invoking bankoperations class
const userOptions = async () => {
    let userOptions = await inquirer.prompt({
        name: "userOptions",
        type: "list",
        message: "Select what do you want to do",
        choices: ["Create bank account", "Check status", "Delete account", "Check balance", "Withdraw", "Deposit cash", "Exit"],
    });
    userOptions = userOptions.userOptions;
    if (userOptions === "Create bank account") {
        bank.createAccount();
    }
    else if (userOptions === "Exit") {
        process.exit();
    }
};
