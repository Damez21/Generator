// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkDown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Name Your Project.",
    },
    {
        type: "input",
        name: "description",
        message: "Describe In Detail The Purpose and functions of this Project."
    },
    {
        type: "input",
        name: "table of contents",
        message: "Table of Contents.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Select a license you used for this project",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "None"],
    },
    {
        type: "input",
        name: "require",
        message: "list project dependencies here (If Applicable).",
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use the app? (Give Instructions)",
    },
    {
        type: "input",
        name: "creator",
        message: "Type your GitHub username.",
    },
    {
        type: "input",
        name: "name",
        message: "Type your FULL Name.",
    },
    {
        type: "input",
        name: "email",
        message: "Enter a valid Email."
    },
    {
        type: "input",
        name: "",
        message: "",
    },
    {
        type: "input",
        name: "test",
        message: ""
    },
    {

    },
    {

    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.pwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {}
inquirer.prompt(questions).then((responses) => {
    console.log("");
    writeToFile("./README.md", generateMarkDown({...responses}));
})
// Function call to initialize app
init();
