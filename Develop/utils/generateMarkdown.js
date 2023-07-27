// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdown = `# ${data.title}

![License](https://img.shields.io/github/license/${data.username}/${data.title})

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

GitHub: [${data.username}](https://github.com/${data.username})
`;

  return markdown;
}

module.exports = generateMarkdown;
