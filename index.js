const inquirer = require('inquirer');

inquirer.registerPrompt('recursive', require('inquirer-recursive'));
inquirer
  .prompt([
    {
      type: 'recursive',
      message: 'Add a new user?',
      name: 'users',
      prompts: [
        {
          type: 'input',
          message: "'What is the employee's name?",
          name: 'name', 
        },
        {
          type: 'list',
          message: "'What is the employee's position?'",
          name: 'position',
          choices: ['Manager', 'Engineer', 'Intern',]
        },
        {
          type: 'input',
          message: "'What is the employee's id'",
          name: 'id', 
        },
        {
          type: 'input',
          message: "'What is the employee's email?'",
          name: 'email',
        },
        {
          type: 'input',
          message: "'What is the employee's Github username?'",
          name: 'github',
        }]
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
