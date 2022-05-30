// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(projectInfo) { 
  if (projectInfo.license === 'N/A') {
    return '';
  }

  return `
  ![badge](https://img.shields.io/badge/license-${projectInfo.license}-blue)
  `
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(projectInfo) {
  if (projectInfo.license === 'N/A') {
    return '';
  }

  return `
  This application is covered under ${projectInfo.license}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(projectInfo) {
  return `
  # ${projectInfo.title}
  ${renderLicenseBadge(projectInfo)}

  ## Description
  ${projectInfo.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${projectInfo.installation}

  ## Usage
  ${projectInfo.usage}

  ## License
  ${renderLicenseSection(projectInfo)}

  ## Contributing
  ${projectInfo.contributing}

  ## Tests
  ${projectInfo.test}

  ## Questions
  You can find me on GitHub at [${projectInfo.username}](https://github.com/${projectInfo.username}) <br />
  If any have any questions, reach me at: ${projectInfo.email}
  `;
}

module.exports = generateMarkdown;