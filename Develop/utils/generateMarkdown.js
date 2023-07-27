// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "https://img.shields.io/badge/License-MIT-yellow.svg";
    case "GPLv3":
      return "https://img.shields.io/badge/License-GPL%20v2-blue.svg";
    case "Apache 2.0":
      return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
    case "BSD 3-clause":
      return "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg";
    default:
      return "https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "GPLv3":
      return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
    case "Apache 2.0":
      return "https://www.gnu.org/licenses/gpl-3.0.en.html";
    case "BSD 3-clause":
      return "https://opensource.org/licenses/BSD-3-Clause";
    default:
      return "https://creativecommons.org/publicdomain/zero/1.0/";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  switch (license) {
    case "MIT":
      licenseSection = `Copyright <2023> <Brandon Zhang>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;

      return licenseSection;

    case "GPLv3":
      licenseSection = `Copyright (C) <2023>  <Brandon Zhang>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.`;

      return licenseSection;

    case "Apache 2.0":
      licenseSection = `Copyright <2023> <Brandon Zhang>
    
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`;

      return licenseSection;

    case "BSD 3-clause":
      licenseSection = `Copyright <2023> <Brandon Zhang>

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;

      return licenseSection;

    case "CC0 1.0":
      licenseSection = `The person who associated a work with this deed has dedicated the work to the public domain by waiving all of his or her rights to the work worldwide under copyright law, including all related and neighboring rights, to the extent allowed by law.

You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission. See Other Information below.`;

      return licenseSection;

    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdown = `# ${data.title}

[![License: Unlicense](${renderLicenseBadge(
    data.license
  )})](${renderLicenseLink(data.license)})

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

\`\`\`
${renderLicenseSection(data.license)}
\`\`\`

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
