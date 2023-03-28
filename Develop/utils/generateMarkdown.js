// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return '![Github License]'
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return ` /n* [License](#license)/n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License 
  This project is license under the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [License](#license)
   *[Questions](#questions)

  ## Installation 
The following necessary dependencies must be installed to run application:
${data.installation}

## Usage
In order to use this app, ${data.usage}

## Tests
The following is needed to run test: ${data.test}

## License
This project is license under the ${data.license} license.

## Questions
If you have any questions about the repo, open an issue or contact Ruskin A. 
directly at : ${data.email} or on github at [${data.github}](https://github.com/${data.github}).

`;
}

module.exports = generateMarkdown;
