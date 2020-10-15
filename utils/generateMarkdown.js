// function to generate markdown for README
function generateMarkdown(userAnswers, badge) {

  return `# ${userAnswers.Title} \n` +
  `${badge} \n` +
  `\n` +
  `## Description: \n` + 
  `${userAnswers.Description} \n` +
  `\n` +
  `###Table of Contents: \n`
  `1.[Installation Instructions](##installation-instructions)
  2.[Usage Info](##usage-info)
  3.[Contribution Guidelines](##contribution-guidelines)
  4.[Tests](##tests)
  5.[Questions](##questions?)
  \n` +
  `\n` +
  `## Instalation Instructions: \n` +
  `${userAnswers.Installation_Instructions} \n`+
  `\n` +
  `## Usage Info: \n` +
  `${userAnswers.Usage_Info} \n`+
  `\n` +
  `## Contribution Guidelines: \n` +
  `${userAnswers.Contributing} \n` +
  `\n` +
  `## Tests: \n` +
  `${userAnswers.Testing} \n`+ 
  `\n` +
  `## Questions? \n` +
  `Contact me:\n`+  
  `GitHub: [${userAnswers.Questions}](https://github.com/${userAnswers.Questions}) \n`+ 
  `Email: ${userAnswers.Questions2}\n`;

};

module.exports = generateMarkdown;
