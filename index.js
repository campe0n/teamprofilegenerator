const Employee = require('./lib/employee')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager');
const inquirer = require('inquirer');


var position = "manager's"

const getInfo = () => {
    return inquirer.prompt([
      {
        type: 'input',
        message: `What is the ${position} name?`,
        name: 'name',
      },
      {
        type: 'input',
        message: `What is the ${position} ID?`,
        name: 'id',
      },
      {
        type: 'input',
        message: `What is the ${position} email?`,
        name: 'email',
      },
      {
        type: 'input',
        message: `What is the ${position} officeNumber?`,
        name: 'officeNumber',
      },
      {
        type: 'list',
        message: 'Which role would you like to add',
        name: 'list',
        choices: ['Engineer', 'Intern', "I'm done making my team!"]
      }])
      .then((answers) => handler(answers))
  }

const handler = (answers) => {
    if (answers.list === 'Engineer') {
      position = "Engineer's"
      const engineer = new Engineer()
      getInfo();
      console.log(engineer)
    } else if (answers.list === 'Intern') {
      position = "Intern's"
      const intern = new Intern()
      getInfo();
      console.log(intern)
    } else (console.log('done with team'))
}

const init = () => {
    getInfo()
}

init()
