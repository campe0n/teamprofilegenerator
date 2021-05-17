const inquirer = require('inquirer');

inquirer.registerPrompt('recursive', require('inquirer-recursive'));
inquirer
  .prompt([
    {
      type: 'input',
      message: "'What is the manager's name?'",
      name: 'mName',
    },
    {
      type: 'input',
      message: "'What is the manager's employee ID?'",
      name: 'mID',
    },
    {
      type: 'input',
      message: "'What is the manager's email address?'",
      name: 'mEmail',
    },
    {
      type: 'input',
      message: "'What is the manager's office number?'",
      name: 'mOn',
    },
    {
      type: 'list',
      name: 'list',
      message: "WHich type of team member would you like to add?",
      choices: ['Engineer', 'Intern', "I'm done making my team!"],
    },
  ])


