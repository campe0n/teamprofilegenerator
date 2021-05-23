const Employee = require('./lib/employee')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager');
const inquirer = require('inquirer');

var employees = [];

function getManager() {
    const managerq = [
      {
        type: 'input',
        message: `What is the manager's name?`,
        name: 'name',
      },
      {
        type: 'input',
        message: `What is the manager's ID?`,
        name: 'id',
      },
      {
        type: 'input',
        message: `What is the manager's email?`,
        name: 'email',
      },
      {
        type: 'input',
        message: `What is the manager's office number?`,
        name: 'officeNo',
      }]
      inquirer.prompt(managerq).then((data) => {
        var manager = new Manager(data.name, data.id, data.email, data.officeNo)
        employees.push(manager)
        console.log(employees)
        handler();
      })
  }

function getEngineer() {
    const engineerq = [
      {
        type: 'input',
        message: `What is the engineer's name?`,
        name: 'name',
      },
      {
        type: 'input',
        message: `What is the engineer's ID?`,
        name: 'id',
      },
      {
        type: 'input',
        message: `What is the engineer's email?`,
        name: 'email',
      },
      {
        type: 'input',
        message: `What is the engineer's github?`,
        name: 'github',
      }]
      inquirer.prompt(engineerq).then((data) => {
        var engineer = new Engineer(data.name, data.id, data.email, data.github)
        employees.push(engineer)
        handler();
      })
  }

  function getIntern() {
    const internq = [
      {
        type: 'input',
        message: `What is the intern's name?`,
        name: 'name',
      },
      {
        type: 'input',
        message: `What is the intern's ID?`,
        name: 'id',
      },
      {
        type: 'input',
        message: `What is the intern's email?`,
        name: 'email',
      },
      {
        type: 'input',
        message: `What is the intern's school?`,
        name: 'school',
      }]
      inquirer.prompt(internq).then((data) => {
        var intern = new Intern(data.name, data.id, data.email, data.school)
        employees.push(intern)
        handler();
      })
  }

function handler() {
  inquirer.prompt([
    {
      type: 'list',
      message: 'What position would you like to add?',
      choices: ['Intern','Engineer',"I'm done making my team!"],
      name: 'list',
    },
    ])
    .then((data) => {
      if (data.list === 'Engineer') {
      getEngineer();
    } else if (data.list === 'Intern') {
      getIntern();
    } else {
      generateCards();
    } 
  })
}

function generateCards() {
  writeToFile("./dist/index.html", generateHTML(employees));
}

function writeToFile(filename, data) {
  false.writeFile(filename, data, (err) =>
  err ? console.log(err) : console.log("commit logged"))
  console.log(employees)
}

function generateHTML(employees) {
  `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      
  </body>
  </html>`
}





const init = () => {
  getManager()
}

init()
