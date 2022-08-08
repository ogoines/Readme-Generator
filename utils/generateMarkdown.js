// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}


//generates markdown for README
const renderLicenseLink = require("./licenseBadges.js");

function generateMarkdown(data) {
  //sets badge with url
  data.licenseBadge = renderLicenseLink[data.license];



    return `
 # Title 
  ${data.title}

  //license badge url
  ${data.licenseBadge}

 ## Table of Contents
 * [Project description](#Description)
 - [Installation](#Installation)
 - [Usage](#Usage)
 - [License](#License)
 - [Contributing](#Contributing)
 - [Tests](#Tests)
 - [Questions](#Questions)

 ## Description
 ${data.description}

 ## Installation
 ${data.install}

 ## Usage
 ${data.usage}

 ## License
 ${data.license}

 ## Contributing
 ${data.contribute}

 ## Tests
 Use the following command to run tests:
 ${data.testcommand} 

 ## Questions

 Contact me with additional questions at 

 [GitHub](https://github.com/${data.githubname})
  or contact 
 ${data.name} at ${data.email}
 `;
}



module.exports = generateMarkdown;
