
const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown.js");

const writeFile= util.promisify(fs.writeFile);



//array of questions for user input
const questions = () => inquirer.prompt([
   {
    type: "input",
    message: "What is your name?",
    name:"name",
   },
   {
    type: "input",
    message: "What is your GitHub username?",
    name:'githubname',
   },
   {
    type: 
    "input",
    message: "What is your email address?", 
    name: "email"
   },
   {
    type: "input", 
    message: "What is the project title?",
    name: "title"
   },
   {
    type: "list",
    message: "What type of license does your project have?",
    name: "license",
    choices: ["Apache 2.0","BSD 3", "GPL 3.0","MIT","None"]
   },
   {
    type: "input",
    message: "Please write a short description of your project?",
    name: "description"
   },
   {type: "input",
    message: "What does the user need to know about using this repository?",
    name: "usage"
   },
   {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "install"
   },
   {
    type: "input",
    message: "What command should be used to run tests?",
    name: "testcommand"
   }, 
   {type: "input",
   message: "Please write the guidelines for contributing to this project.",
   name: "contribute"
   },
  
]);


//initializes  prompt  console logs if successful /creates markedown from user input questions 
 const init = () => {
 console.log("Welcome to the README generator.\nPlease answer the following questions:");
 questions()
  .then((data) => writeFile('README.md', generateMarkdown(data)))
  .then(() => console.log('Successful html write'))
  .catch((err) => console.error(err));
}
init();
 