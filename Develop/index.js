const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of your project:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description for your project:",
  },
  {
    type: "list",
    name: "projectType",
    message: "Is this project a website or a Node.js app?",
    choices: ["Website", "Node.js App"],
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage instructions for your project:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "GPLv3", "Apache 2.0", "BSD 3-clause", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter contribution guidelines for your project:",
  },
  {
    type: "input",
    name: "credits",
    message: "Enter credits for your project:",
  },
  {
    type: "input",
    name: "acknowledgements",
    message: "Enter acknowledgements for your project:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
  },
];

function init() {
  inquirer.prompt(questions).then((data) => {
    // Based on the user's choice, include additional questions or modify data as needed
    if (data.projectType === "Node.js App") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "repositorySSH",
            message: "Enter the repository SSH link:",
          },
        ])
        .then((nodeAppData) => {
          // Merge the answers from the main set of questions and the Node.js App questions
          data = { ...data, ...nodeAppData };

          // Proceed with generating the markdown content and writing the README
          generateReadme(data);
        });
    } else {
      // Proceed with generating the markdown content and writing the README
      generateReadme(data);
    }
  });
}

function generateReadme(data) {
  // Generate markdown content
  const markdownContent = generateMarkdown(data);

  // Write the markdown content to README.md
  const outputPath = path.join("output", "README.md");
  fs.writeFile(outputPath, markdownContent, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("README.md file generated successfully!");
    }
  });
}

// Function call to initialize app
init();
