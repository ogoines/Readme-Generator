const { writeFile } = require("fs");
const fs = require("fs/promises");
const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');

const markDown= util.promisify(fs.writeFile);



// TODO: Create an array of questions for user input
const questions = () => inquirer.prompt([
   {
    type: 'input',
    message: 'What is your GitHub username?',
    name:'username',
   },
   {
    type: 'input',
    message: 'What is your email address?', 
    name: 'email'
   },
   {
    type: 'input', 
    message: 'What is the project name?',
    name: 'projectname'
   },
   {
    type: 'input',
    message: 'Please write a short description of your project?',
    name: 'description'
   },
   {
    type: 'input',
    message: 'What kind of License should your project have?',
    name: 'license'
   },
   {
    type: 'input',
    message: 'What command should be run to install dependencies?',
    name: 'installcommand'
   },
   {
    type: 'input',
    message: 'What command should be used to run tests?',
    name: 'testcommand'
   }, 
   {
    type: 'input',
    message: 'What does the user need to know about using this repository?',
    name: 'instructions'
   }
])

.then((data) => {
   console.log(data);
   data.confirm === data.username
   ? console.log('Success!')
   : console.log('Did not work')

})
.then (({username, email, projectname, description, license, installcommand, testcommand, instructions
}) =>{
   console.log(username);
   console.log(email);
   console.log(projectname);
   console.log(description);
   console.log(license);
   console.log(installcommand);
   console.log(testcommand);
   console.log(instructions);
})

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize ap
//function init() {}

// Function call to initialize app
// init();
