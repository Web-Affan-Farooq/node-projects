#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    static counter = 10000;
    id;
    name;
    courses;
    balance;
    constructor(name) {
        this.id = Student.counter++;
        this.name = name;
        this.courses = [];
        this.balance = 500;
    }
    enrollCourse(course) {
        this.courses.push(course);
    }
    viewBalance() {
        console.log(`Balance :${this.balance}`);
    }
    payStudentFee(amount) {
        this.balance -= amount;
        console.log(`Fee paid successfully`);
        console.log("amount: " + amount);
    }
    showStatus() {
        console.log(`Student ID:${this.id}`);
        console.log(`Student name:${this.name}`);
        console.log(`Enrolled courses:${this.courses}`);
        console.log(`Student's balance:${this.balance}`);
    }
}
class Student_Management {
    students;
    constructor(students) {
        this.students = students;
        this.students = [];
    }
    addStudent(name) {
        let student = new Student(name);
        this.students.push(student);
        console.log(`Student:${name} added successfully.Student ID :${student.id}`);
    }
    enrollStudent(student_id, course) {
        let student = this.findStudent(student_id);
        if (student) {
            student.enrollCourse(course);
            console.log(`${student.name} enrolled in ${course}`);
        }
    }
    view_student_balance(student_id) {
        let student = this.findStudent(student_id);
        if (student) {
            student.viewBalance();
        }
        else {
            console.log("Student not found.Please Enter a correct student Id");
        }
    }
    payFee(student_id, amount) {
        let student = this.findStudent(student_id);
        if (student) {
            student.payStudentFee(amount);
        }
        else {
            console.log("Student not found.Please Enter a correct student Id");
        }
    }
    findStudent(student_id) {
        return this.students.find(std => std.id === student_id);
    }
    showStatus(student_id) {
        let student = this.findStudent(student_id);
        if (student) {
            student.showStatus();
        }
    }
}
async function main() {
    let studentManager = new Student_Management([]);
    console.log(chalk.yellow(`\t\t\t\t\t\t Welcome`));
    while (true) {
        let choice = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select options",
                choices: [chalk.blue("Add student"), chalk.yellow("Enroll student"), chalk.green("View Balance"), chalk.cyan("Pay fee"), chalk.yellowBright("View status"), chalk.whiteBright.underline("Exit")]
            }
        ]);
        if (choice.choice === chalk.blue("Add student")) {
            let name_input = await inquirer.prompt([
                {
                    name: "name",
                    type: "input",
                    message: "Enter student name",
                }
            ]);
            studentManager.addStudent(name_input.name);
        }
        else if (choice.choice === chalk.yellow("Enroll student")) {
            let course_input = await inquirer.prompt([
                {
                    name: "student_id",
                    type: "number",
                    message: "Enter a student ID",
                },
                {
                    name: "course",
                    type: "input",
                    message: "Enter a course name",
                }
            ]);
            studentManager.enrollStudent(course_input.student_id, course_input.course);
        }
        else if (choice.choice === chalk.green("View Balance")) {
            let balance_input = await inquirer.prompt([
                {
                    name: "student_id",
                    type: "number",
                    message: "Enter student Id",
                }
            ]);
            studentManager.view_student_balance(balance_input.student_id);
        }
        else if (choice.choice === chalk.cyan("Pay fee")) {
            let fee_input = await inquirer.prompt([
                {
                    name: "student_id",
                    type: "number",
                    message: "Enter student ID"
                },
                {
                    name: "amount",
                    type: "number",
                    message: "Enter fee amount"
                }
            ]);
            studentManager.payFee(fee_input.student_id, fee_input.amount);
        }
        else if (choice.choice === chalk.yellowBright("View status")) {
            let status_input = await inquirer.prompt([
                {
                    name: "student_id",
                    type: "number",
                    message: "Enter student ID"
                },
            ]);
            studentManager.showStatus(status_input.student_id);
        }
        else if (choice.choice === chalk.whiteBright.underline("Exit")) {
            console.log("Exit");
            break;
        }
    }
}
main();
//----------------------------------------completed
