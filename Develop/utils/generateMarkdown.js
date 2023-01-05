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
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
