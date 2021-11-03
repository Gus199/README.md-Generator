
// imports
const inquirer = require("inquirer");
const fs = require("fs"); 
const util = require('util');
const generatorMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
}, 

{
    type: "input",
    message: "Please give your GitHub profile link.",
    name: "GitHub"
},
{
    type: "input",
    message: "What is the project about? Give a detailed description of your project?",
    name: "Description"
},

 {
    type: "input",
    message: "Table of Contents.",
    name: "Table of Contents"
}, 
{
    type: "input",
    message: "What does the user need to install and run this app (ie...dependencies)?",
    name: "Installation"
}, 
{
    type: "input",
    message: "How is the app used? Give instructions",
    name: "Usage"
}, 
{
    type: "list",
    name: "License",
    message: "What kind of license should your project have?",
    choices: ["MIT","APACHE 2.0","GPL 3.0","BSD 3","None"]
}, 
{
    type: "input",
    message: "Who contributed to this project?:",
    name: "Contributor"
}, 
{
    type: "input",
    message: "What commands are needed to test this app?",
    name: "Test"
}, 
{
    type: 'input',
    message: 'What is your email address?',
    name: 'Email'
},


]

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })

}





// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generatorMarkdown(data));
            console.log(data)

        })

}

// function call to initialize program
init();