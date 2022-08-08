

//generates markdown for README
const renderLicenseLink = require("./licenseBadges.js");

function generateMarkdown(data) {
  //sets badge with url
  data.licenseBadge = renderLicenseLink[data.license];


  //returns markdown 
    return `
 # ${data.title}

  
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
 Use the following command to install dependencies:
 
 \`
 ${data.install}
 \`

 ## Usage
 ${data.usage}

 ## License
 ${data.license}

 This project is licensed by the ${data.license}.
 
 ## Contributing
 ${data.contribute}

 ## Tests
 
 Use the following command to run tests:
 
 \`
 ${data.testcommand} 
 \`
 
 ## Questions

 Contact me with additional questions at 

 ${data.name} at ${data.email} or check out my work on GitHub at 

 [GitHub](https://github.com/${data.githubname})
 `;
}


module.exports = generateMarkdown;
