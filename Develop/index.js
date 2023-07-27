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
  // Add more questions for installation, usage, contribution, tests, license, GitHub username, email, etc.
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
          // Add more questions specific to Node.js App if needed
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
  fs.writeFile("README.md", markdownContent, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("README.md file generated successfully!");
    }
  });
}

// Function call to initialize app
init();
