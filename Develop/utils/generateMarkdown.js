// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (data.license === "MIT") {
    data.badge = "MIT"
  }
  else if (data.license === "Apache") {
    data.badge = "APACHE"
  }
  else if (data.license === "GNU General Public License") {
    data.badge = "GNU"
  }
  else if (data.license === "BSD 2-clause") {
    data.badge = "BSD2"
  }
  else if (data.license === "BSD 3-clause") {
    data.badge = "BSD3"
  }
  else if (data.license === "Boost Software") {
    data.badge = "BOOST"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (data.license === "MIT") {
    data.link = "https://mit-license.org/"
  }
  else if (data.license === "Apache") {
    data.badge = "https://apache.org/licenses/LICENSE-2.0"
  }
  else if (data.license === "GNU General Public License") {
    data.badge = "https://www.gnu.org/licenses/gpl-3.0.en.html"
  }
  else if (data.license === "BSD 2-clause") {
    data.badge = "https://opensource.org/licenses/BSD-2-Clause"
  }
  else if (data.license === "BSD 3-clause") {
    data.badge = "https://opensource.org/licenses/BSD-3-Clause"
  }
  else if (data.license === "Boost Software") {
    data.badge = "https://www.boost.org/users/license.html"
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description
  ${data.describe}

  ## Installation
  ${data.install}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contGuide}
  
  ## Tests
  ${data.test}
  
  ## Questions
  If you have quiestions you can reach me at ${data.email}.
  
  ## GitHub
  https://github/${data.github}

`;
}

module.exports = generateMarkdown;
