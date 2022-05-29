// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title? (Required)',
            validate: projectTitle => {
                if (projectTitle) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    console.log('You need to enter a project description!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions for project (Required)',
            validate: installationInstructions => {
                if (installationInstructions) {
                    return true;
                } else {
                    console.log('You need to enter installation instructions!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage instructions for project (Required)',
            validate: usageInstructions => {
                if (usageInstructions) {
                    return true;
                } else {
                    console.log('You need to provide usage instructions!');
                    return false
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What is the license of this project? (Check one)',
            choices: ['MIT', 'Apache 2.0', 'ISC', 'GNU GPLv3']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide guidelines on how to make contributions.'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide test instructions for project.'
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter your GitHub username (Required)',
            validate: githubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: emailAddress => {
                if (emailAddress) {
                    return true;
                } else {
                    console.log('You need to enter an email address!');
                    return false
                }
            }
        }
    ])
    .then(projectInfo => {
        console.log(projectInfo)
    })
};

// Function call to initialize app
init();
