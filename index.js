
const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');


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
    name: "license","BSD 3", "GPL 3.0","MIT","None"]
   },
   {
    type: "input",
    message: "Please write a short description of your project?",
    name: "description"
   },
   {
    type: "input",
    message: "What kind of License should your project have?",
    name: "license"
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
   {
    type: "input",
    message: 
    "What does the user need to know about using this repository?",
    name: "directions"
   },
]);

//.then((data) => {
//   console.log(data);
//   data.confirm === data.username
 //  ? console.log('Success!')
 //  : console.log('Did not work')

//})
//.then (({username, email, projectname, description, license, installcommand, testcommand, instructions
//}) =>{
//   console.log(username);
//   console.log(email);
//   console.log(projectname);
//   console.log(description);
//   console.log(license);
//   console.log(installcommand);
//   console.log(testcommand);
 //  console.log(instructions);

function generateMarkDown(data){
return`# ${data.title}
${data.description}
## Table of Contents
*[Installation](#installation)
*[Usage](#usage)
*[License](#license)
*[Contributing](#contributing)
*[Tests](#tests)
*[Questions](#questions)

###Installation
${data.install}
###Usage
${data.directions}
###License
${data.license}
###Contributing
${data.contribute}
##Tests
Use the following command to run tests:
${data.testcommand} 
###Questions
Contact me with additional questions at 
[GitHub](https://github.com/${data.githubname})
or contact 
${data.name} at ${data.email}`

}

questions()
.then((data) => writeFile('generateREADME.md',
generateMD(data))).then(() => console.log('Successful html write'))
  .catch((err) => console.error(err));