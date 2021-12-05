const inquirer = require('inquirer');
const generateMarkdown = require('./utlis/generateMardown')

const promptUser = () => {
    return inquirer.prompt([
        // asks for name of project
        {
            type: 'input',
            name: 'projectName',
            message: 'What is your Projects name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }   else {
                    console.log('Please enter a Project name!');
                    return false;
                }
            }
        },
        // asks for a description of the project
        {
            type: 'input',
            name: 'description',
            message: 'Would you like to enter a description of your project?',
            when: ({ confirmAbout }) => confirmAbout
        },
        // asks for what kind of license you want to have 
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license would you like?',
            choices: ['Apache, Boost, BSD, Createive Commons, GNU.']
        },
        // asks for github name
        {
            type: 'input',
            name: 'githubName',
            message: 'Please enter you Github Name.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address'
        }
    ]);
}

promptUser()
