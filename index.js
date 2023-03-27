// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: 'input',
        name: 'githubHandle',
        message: 'What is your github user name?',
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation instructions for your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage instructions for your project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What is the contributing instructions for your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What is the testing instructions for your project?',
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'APACHE_2.0', 'GPL_3.0', 'BSD_3', 'None'],
        message: 'What is the license for your project?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
