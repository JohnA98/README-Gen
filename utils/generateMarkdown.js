// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'apache':
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
      break;
    case 'MIT':
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case 'GNU':
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      break;
    default:
      return "";
    }
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "apache":
      return "[License: Apache-2.0](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "MIT":
      return "[License: MIT](https://opensource.org/licenses/MIT)";
      break;
    case "GNU":
      return "[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    default:
      return "";
}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != '') {
    return `## License`;
  }
  else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

## Contributing

${data.contribution}

## Tests 

${data.test}

## Questions

Github: ${data.username} \n
Email: ${data.email} \n
You can reach me here with any additional questions.

`;
}

module.exports = generateMarkdown;
