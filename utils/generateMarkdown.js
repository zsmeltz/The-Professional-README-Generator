// function to generate markdown for README
function generateMarkdown(userAnswers) {

  return `#${userAnswers.Title}`;
  return `##Description: ${userAnswers.Description}`;
  return `##Instalation Instructions: ${userAnswers.Installation_Instructions}`;
  return `##Usage Info: ${userAnswers.Usage_Info}`;
  return `##Contribution Guidelines: ${userAnswers.Contributing}`;
  return `##Tests: ${userAnswers.Testing}`;
  return `##Questions?: Contact me: 
  GitHub: ${userAnswers.Questions}
  Email: ${userAnswers.Questions2}`;

  writeToFile(userAnswers);
};

module.exports = generateMarkdown;
