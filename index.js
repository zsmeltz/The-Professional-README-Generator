var inquirer = require("inquirer");
var fs = require("fs");




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
        name: "Desciption"
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
        message: "Give some instructions on how to test this application",
        name: "Testing"
      },
      {
        type: "list",
        message: "If you would like to choose a license for the project, choose one of these: ",
        choices: ["Mozilla Public 2.0", "Apache 2.0", "MIT", "Boost Software 1.0", "The Unlicense", "I don't want a license"],
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
      },
];
inquirer.prompt(questions).then(function(userAnswers) {
    console.log(userAnswers);

   /* const { Title,
            Description,
            Installation_Instructions,
            Usage_Info,
            Contributing,
            Testing,
            License,
            Questions,
            Questions2
         }; */

   writeToFile(userAnswers.Title, userAnswers.Description, userAnswers.Installation_Instructions, userAnswers.Usage_Info, userAnswers.Contributing, userAnswers.Testing, userAnswers.License, userAnswers.Questions, userAnswers.Questions2);
});



// function to write README file
function writeToFile(Title, Description, Installation_Instructions, Usage_Info, Contributing, Testing, Questions, Questions2){


  fs.appendFile("READ_ME.md",Title + "\n", function (err) {
      console.log(err);
  });
 // fs.appendFile("READ_ME.md",Description + "\n");
  //fs.appendFile("READ_ME.md",Installation_Instructions + "\n");
  //fs.appendFile("READ_ME.md",Usage_Info + "\n");
 // fs.appendFile("READ_ME.md", Contributing + "\n");
  //fs.appendFile("READ_ME.md",Testing + "\n");
  //fs.appendFile("READ_ME.md",Questions + "\n");
  //fs.appendFile("READ_ME.md",Questions2 + "\n");

};


// function to initialize program
function init() {

}

// function call to initialize program
init();
