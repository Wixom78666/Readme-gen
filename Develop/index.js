// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const prompts = [
    {
        type: "input",
        message: "Enter the name/title of your project.",
        name: "title",
    },{
        type: "input",
        message: "Enter a description of your project.",
        name: "describe",
    },{
        type: "input",
        message: "Enter any installation instructions for your applicaiton.",
        name: "install",
    },{
        type: "input",
        message: "Enter any usage information for your application.",
        name: "usage",
    },{
        type: "input",
        message: "Enter any contribution guidlines for your application.",
        name: "contGuide",
    },{
        type: "input",
        message: "Enter test instructions for your application.",
        name: "test",
    },{
        type: "list",
        message: "Choose the licence your application uses.",
        name: "license",
        choices: [
            "MIT",
            "Apache",
            "GNU General Public License",
            "BSD 2-clause",
            "BSD 3-clause",
            "Boost Software",
        ]
    },{
        type: "input",
        message: "Enter your GitHub username.",
        name: "github"
    },{
        type: "input",
        message: "Enter your email address.",
        name: "email",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("READMEnew.md"), fileName, 
    (err, data) =>
    err ? console.log("error: " + err) : console.log("complete");
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(prompts).then(data)
}

// Function call to initialize app
init();
