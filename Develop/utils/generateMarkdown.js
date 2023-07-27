// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "https://img.shields.io/badge/License-MIT-yellow.svg";
    case "GPLv2":
      return "https://img.shields.io/badge/License-GPL%20v2-blue.svg";
    case "Apache 2.0":
      return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
    case "GPLv3":
      return "https://img.shields.io/badge/License-GPLv3-blue.svg";
    default:
      return "https://img.shields.io/badge/license-None-blue"; // Empty string for "None" or unknown license
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "GPLv2":
      return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
    case "Apache 2.0":
      return "https://www.apache.org/licenses/LICENSE-2.0";
    case "GPLv3":
      return "https://www.gnu.org/licenses/gpl-3.0.en.html";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdown = `# ${data.title}

![License](${renderLicenseBadge(data.license)})](${renderLicenseLink(
    data.license
  )})

## Description
${data.description}

## Table of Contents
- [Getting Started](#getting-started)`;

  if (data.projectType === "Node.js App") {
    markdown += `
  - [Cloning the Repository](#cloning-the-repository)
  - [Install Dependencies](#install-dependencies)`;
  }

  markdown += `
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)
- [Acknowledgements](#acknowledgements)
- [Questions](#questions)

## Getting Started
`;

  if (data.projectType === "Node.js App") {
    markdown += `
### Cloning the Repository

To clone the repository, navigate to the directory you want to clone the repository into.

Then, run the following command, replacing '<SSH>' with the repository SSH link.

\`\`\`bash
git clone '${data.repositorySSH}'
\`\`\`

### Install Dependencies

To install dependencies, run the following command:

\`\`\`bash
npm i
\`\`\`
`;
  } else {
    markdown += `
To get started, simply open the website in your browser.
`;
  }

  markdown += `
## Usage
${data.usage}

## Contributing
${data.contributing}

## License
This project is licensed under the ${data.license} license.

## Credits
${data.credits}

## Acknowledgements
${data.acknowledgements}

## Questions
If you have any questions, please feel free to contact me via email or on GitHub.

Email: ${data.email}

GitHub: [${data.github}](https://github.com/${data.github})
`;

  return markdown;
}

module.exports = generateMarkdown;
