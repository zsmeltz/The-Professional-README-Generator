var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown.js");
//const Choices = require("inquirer/lib/objects/choices");



// array of questions for user
const questions = [
      {
        type: "input",
        message: "What would you like your README title to be?",
        name: "Title"
      },
      {
        type: "input",
        message: "Write a description about your application",
        name: "Description"
      },
      {
        type: "input",
        message: "Give proper installation instructions",
        name: "Installation_Instructions"
      },
      {
        type: "input",
        message: "Give some insight on how to use this application",
        name: "Usage_Info"
      },
      {
        type: "input",
        message: "Tell me the guidelines on how to contribute to this application",
        name: "Contributing"
      },
      {
        type: "input",
        message: "What kind of tests has this application been through?",
        name: "Testing"
      },
      {
        type: "list",
        message: "If you would like to choose a license for the project, choose one of these: ",
        choices: ["Mozilla Public 2.0", "Apache 2.0", "MIT", "Boost Software 1.0", "I don't want a license"],
        name: "License"
      },
      {
        type: "input",
        message: "If users want to reach out about to you about this app, you might want to give them a way to. Enter your GitHub username",
        name: "Questions"
      },
      {
        type: "input",
        message: "Enter your email",
        name: "Questions2"
      }
];

inquirer.prompt(questions).then(function(userAnswers) {
   console.log(userAnswers);
  
   getBadge(userAnswers);

   fs.appendFile("cREADME.md",generateMarkdown(userAnswers), err => console.log(err));

  });

 function getBadge (userAnswers) {
    if(userAnswers.License === questions[6].choices[0]){
      var badge = `[![Generic badge](https://img.shields.io/badge/license-Mozilla%20Pub%202.0-green.svg)](https://shields.io/)`;
      generateMarkdown(badge);
    }
    if(userAnswers.License === questions[6].choices[1]){
      var badge = `[![Generic badge](https://img.shields.io/badge/license-Apache%202.0-green.svg)](https://shields.io/)`;
      generateMarkdown(badge);
    }
    if(userAnswers.License === questions[6].choices[2]){
      var badge = `[![Generic badge](https://img.shields.io/badge/license-MIT-green.svg)](https://shields.io/)`;
      generateMarkdown(badge);
    }
    if(userAnswers.License === questions[6].choices[3]){
      var badge = `[![Generic badge](https://img.shields.io/badge/license-Boost%20Software%201.0-green.svg)](https://shields.io/)`;
      generateMarkdown(badge);
    }
    if(userAnswers.License === questions[6].choices[4]){
      var badge = null;
      generateMarkdown(badge);
    }
    
    
 };


// function to initialize program
function init() {

}

// function call to initialize program
init();
