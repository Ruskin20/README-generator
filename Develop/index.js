// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Explain in a few words the purpose of the project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is this project beneficial and what does the user needs to know? Give instructions',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you like?',
        choices: ['Apache License 2.0', 'GNU V3.0', 'MIT', 'None'],

    },
    {
        type: 'input',
        name: 'installation',
        message: 'Is there anything that need to be installed before running this project?',
        default: 'nmp i',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How to test?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('Creating README.md file...');
        writeToFile('README.md', generateMarkdown({ ...responses }));
    });

}

// Function call to initialize app
init();
