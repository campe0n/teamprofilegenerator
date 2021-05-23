const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager');

const inquirer = require('inquirer');
const fs = require('fs')

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
  writeToFile("index.html", generateHTML(employees));
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.log(err) : console.log("commit logged"))
  console.log(employees)
}

function generateHTML(employees) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Generator</title>
      <style>
      body {margin: 0;}
      header {background-color: #E84756; width: 100%; height: 15%;}
      h1 {color: white; font-size: 40px; text-align: center; padding-top: 2.5%;}
      </style>
  </head>
  <body>
      <header> 
        <h1>My team</h1>
      </header>
      <main> 
      ${generateCards(employees)} 
      </main>
  </body>
  </html>`
}

function generateCards(employees){
  return employees
    .map((data) => {
      if (data.getRole() === "Manager") {
        return `
        <div class="card-deck">
          <div class="card">
          <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <p class ="card-title">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>`
      }
    });
}

getManager();
