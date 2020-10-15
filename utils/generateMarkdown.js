// function to generate markdown for README
function generateMarkdown(userAnswers, badge) {

  return `# ${userAnswers.Title} \n` +
  `${badge} \n` +
  `## Description: \n` + 
  `${userAnswers.Description} \n` +
  `## Instalation Instructions: \n` +
  `${userAnswers.Installation_Instructions} \n`+
  `## Usage Info: \n` +
  `${userAnswers.Usage_Info} \n`+  
  `## Contribution Guidelines: \n` +
  `${userAnswers.Contributing} \n` + 
  `## Tests: \n` +
  `${userAnswers.Testing} \n`+  
  `## Questions? \n` +
  `Contact me:\n`+  
  `GitHub: ${userAnswers.Questions} \n`+ 
  `Email: ${userAnswers.Questions2}\n`;

};

module.exports = generateMarkdown;
