// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
    if(data.license == "MIT"){
        badge = "![License](https://img.shields.io/static/v1?label=License&message=MIT&color=blueviolet&style=plastic)"
    }else if (data.license == "APACHE 2.0"){
        badge = "![License](https://img.shields.io/static/v1?label=License&message=APACHE2.0&color=blueviolet&style=plastic)"
    }else if (data.license == "GPL 3.0"){
        badge = "![License](https://img.shields.io/static/v1?label=License&message=GPL3.0&color=blueviolet&style=plastic)"
    }else if (data.license == "BSD 3"){
        badge = "![License](https://img.shields.io/static/v1?label=License&message=BSD3&color=blueviolet&style=plastic)"
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return ('')
}


// This is a good README template
function generateMarkdown(data) {
  return`
# ${data.Title}
# Github Link:
 [Link to my Github](${data.GitHub})
# Description
${data.Description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
# Installation
The following necessary dependencies must be installed to run the application properly: ${data.Installation}
# Usage
​This application is used for ${data.Usage}
# License
This project is license under the [![GitHub license](${data.License})](${data.License}).
# Contributing
​Contributors: ${data.Contributor}
# Video Link:
 [Video Link](https://watch.screencastify.com/v/y2ngxQeGbBfX3GveIF5p)
# Tests
To run tests, you need to run the following command: ${data.Test}
# Questions
If you have any questions about the repo, open an issue or contact directly ${data.Email}.
`
}

module.exports = generateMarkdown;