// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input", 
        name: "title",
        message: "What is the employee's last name?"
    },{
        type: "input", 
        name: "role",
        message: "What is the employee's role?"
    },{
        type: "input", 
        name: "manager",
        message: "Who is the employee's manager?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(__dirname, "/dist/",fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions).then(function(answers){
        console.log(answers);
        writeToFile("README.md", generateMarkdown(answers));
    })
}

// Function call to initialize app
init();
