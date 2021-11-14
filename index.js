// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const readMeOutline = require('./assets/readMeOutline')

console.log('-------------------------- README Generator --------------------------')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Whats the title of the project?',
        name: 'titleQ',
        validate: (answer) => {
            if (!answer) {
                return ('Please enter a valid title')
            }
            return (true)
        }
    }, {
        type: 'input',
        message: 'As a user I want ...?',
        name: 'userStoryOne',
        validate: (answer) => {
            if (!answer) {
                return ('Please enter a valid answer')
            }
            return (true)
        }
    }, {
        type: 'input',
        message: 'So that ...',
        name: 'userStoryTwo',
        validate: (answer) => {
            if (!answer) {
                return ('Please enter a valid answer')
            }
            return (true)
        }
    }, {
        type: 'input',
        message: 'Please provide a brief desctiption of the project created',
        name: 'projectDescription',
        validate: (answer) => {
            if (!answer) {
                return ('Please enter a valid description')
            }
            return (true)
        }
    }, {
        type: 'input',
        message: 'Please provide a link to the repository on GitHub here:',
        name: 'linkOne',
        validate: (answer) => {
            if (!answer) {
                return ('Please enter a valid link')
            }
            return (true)
        }
    }, {
        type: 'input',
        message: 'Please provide a link to the profile or webpage here:',
        name: 'linkTwo',
        validate: (answer) => {
            if (!answer) {
                return ('Please enter a valid link')
            }
            return (true)
        }
    }, {
        type: 'input',
        message: 'Please enter your image file using the ./ notation',
        name: 'imageOne',
        validate: (answer) => {
            if (!answer) {
                return ('Please enter a valid pathway')
            }
            return (true)
        }
    },{
        type: 'input',
        message: 'Please enter your image file using the ./ notation',
        name: 'imageTwo',
        validate: (answer) => {
            if (!answer) {
                return ('Please enter a valid pathway')
            }
            return (true)
        }
    },{
        type: 'list',
        message: 'Who was the author of this project?',
        name: 'contributorsQ',
        choices: [
            'Joseph',
            'Sarah',
            'Samuel',
            'Matt',
            'Natalie',
            'Nikkos'
        ],
        validate: (answer) => {
            if (!answer) {
                return ('Please enter a valid responce.')
            }
            return (true)
        }
        
    }, {
        type: 'list',
        message: 'What license will be chosen for this project?',
        name: 'license',
        choices: [
            'Apache',
            'Boost',
            'BSD',
            'Creative Commons',
            'Eclipse',
            'GNU',
            'MIT',
            'Mozilla',
            'None'
        ],
        validate: (answer) => {
            if (!answer) {
                return console.log('This field is required.')
            }
            return (true)
        }
        
        
        
    }
];


// TODO: Create a function to write README file

console.log("Hey there! We are about to generate a README.md file. Lets go!");

console.log('----------------------------------------------------------------------')

function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}`, data, (err) => 
        err ? console.error('Error! : ' + err) : console.log('Youre README file has been successfully generated!'))
}

// 
function init() {
    inquirer.prompt(questions).then((data) => writeToFile('READMEGenerated.md', readMeOutline(data)))
}

init();