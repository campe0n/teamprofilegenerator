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
      var engineer = new Engineer(answers.name, answers.id, answers.email);
      getInfo();
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('foo');
        }, 300);
      });
      promise
      .then(getInfo())
      engineer.getGithub();
    } else if (answers.list === 'Intern') {
      position = "Intern's"
      var intern = new Intern()
      getInfo();
    } else {
      console.log('done with team')
      console.log(engineer)
      console.log(intern)
    }
}

const init = () => {
  getInfo()
}

init()
