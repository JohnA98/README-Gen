// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
    //validate function makes sure user types something
    validate: (input) => {
      return input
        ? true
        : (console.log("Please enter the title of your project."), false);
    },
  },
  {
    type: "input",
    message: "Enter a description of your project.",
    name: "description",
    validate: (input) => {
      return input
        ? true
        : (console.log("Please enter a description of your project."), false);
    },
  },
  {
    type: "input",
    message: "What are the installation instructions for your project?",
    name: "installation",
    validate: (input) => {
      return input
        ? true
        : (console.log("Please enter the installation instructions for your project."), false);
    },
  },
  {
    type: "input",
    message: "What is the usage information of your project?",
    name: "usage",
    validate: (input) => {
      return input
        ? true
        : (console.log("Please enter the usage information of your project."), false);
    },
  },
  {
    type: "input",
    message: "What are the contribution guidelines for your project?",
    name: "contribution",
    validate: (input) => {
      return input
        ? true
        : (console.log("Please enter the contribution guidelines for your project."), false);
    },
  },
  {
    type: "input",
    message: "What are the test instructions of your project?",
    name: "test",
    validate: (input) => {
      return input
        ? true
        : (console.log("Please enter the test instructions of your project."), false);
    },
  },
  {
    type: "list",
    message: "What is the license for your project?",
    name: "license",
    choices: ['apache', 'MIT', 'GNU']
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
    validate: (input) => {
      return input
        ? true
        : (console.log("Please enter your GitHub username."), false);
    },
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
    validate: (input) => {
      return input
        ? true
        : (console.log("Please enter your email address."), false);
    },
  },  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  let markdown = generateMarkdown(data);
  fs.writeFile(fileName, markdown, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Success");
    }
  })

};
// TODO: Create a function to initialize app
//writes it into a folder named ResponseOutputs
function init() {
  inquirer.prompt(questions)
  .then((responses) => {
    console.log(responses);
    writeToFile("./ResponseOutputs/ProjectReadMe.md", responses);
    });
}
// Function call to initialize app
init();
