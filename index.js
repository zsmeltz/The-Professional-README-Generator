var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown.js");

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
        message: "If users want to reach out to you about this app, you might want to give them a way to. Enter your GitHub username",
        name: "Questions"
      },
      {
        type: "input",
        message: "Enter your email",
        name: "Questions2"
      }
];

inquirer.prompt(questions).then(function(userAnswers) {
  
   if(userAnswers.License === "Mozilla Public 2.0"){
    var badge = "[![Generic badge](https://img.shields.io/badge/license-Mozilla%20Pub%202.0-green.svg)](https://shields.io/)";
    generateMarkdown(badge);
  };
  if(userAnswers.License === "Apache 2.0"){
    var badge = "[![Generic badge](https://img.shields.io/badge/license-Apache%202.0-green.svg)](https://shields.io/)";
    generateMarkdown(badge);
  };
  if(userAnswers.License === "MIT"){
    var badge = "[![Generic badge](https://img.shields.io/badge/license-MIT-green.svg)](https://shields.io/)";
    generateMarkdown(badge);
  };
  if(userAnswers.License === "Boost Software 1.0"){
    var badge = "[![Generic badge](https://img.shields.io/badge/license-Boost%20Software%201.0-green.svg)](https://shields.io/)";
    generateMarkdown(badge);
  };
  if(userAnswers.License === "I don't want a license"){
    var badge = "";
    generateMarkdown(badge);
  };

  console.log("Generating your cREADME.md...");

   fs.appendFile("cREADME.md",generateMarkdown(userAnswers, badge), err => console.log(err));

   init();
   
  });

function init(){
  console.clear();
}

