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
        type: "input",
        
    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

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
