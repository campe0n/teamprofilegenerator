const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager');

const inquirer = require('inquirer');
const fs = require('fs');

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

function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) =>
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
      header {background-color: #E84756; width: 100%; height: 15%;}
      h1 {color: white; font-size: 40px; text-align: center;}
      </style>
  </head>
  <body>
      <header> 
        <h1>My team</h1>
      </header>
      <main style="display: flex; height: 85%; width: 100%;>
        <div class="deck" style="display:flex; justify-content: flex-start; align-items: flex-start; width: 100%; height: 85%;">
          ${generateCard(employees)}
        </div>
      </main>
  </body>
  </html>`
}

function generateCard(employees){
  return employees.map((data) => {
      if (data.getRole() === "Manager") {
        return `
          <div class="card" style="width: 200px; height: 200px; border-style: solid; border-radius: 2%; margin: 5%;">
            <div class="card-body">
              <div class="cheader" style="background-color:blue; width: 200px; height: 30%;">
                <h5 style="color:white; text-align: center; font-size: 35px; margin: 0; padding: 0;">${data.name}</h5>
                <h6 style="color:white; text-align: center; font-size: 25px; margin: 0; padding: 0;">Manager</h6>
              </div>
              <div style="height:70%;">
                <li style="list-style-type:none; padding: 1%; font-size: 18px; color: black;">ID: ${data.id}</li>
                <li style="list-style-type:none; padding: 1%; font-size: 18px; color: black:">Email: ${data.email}</li>
                <li style="list-style-type:none; padding: 1%; font-size: 18px; color: black:">Office Number:${data.officeNo}</li>
              </div>
          </div>`
      }
      if (data.getRole() === "Engineer") {
        return `
        <div class="card" style="width: 200px; height: 200px; border-style: solid; border-radius: 2%; margin: 5%;">
        <div class="card-body">
          <div class="cheader" style="background-color:blue; width: 200px; height: 30%;">
            <h5 style="color:white; text-align: center; font-size: 35px; margin: 0; padding: 0;">${data.name}</h5>
            <h6 style="color:white; text-align: center; font-size: 25px; margin: 0; padding: 0;">Manager</h6>
          </div>
          <div style="height:70%;">
            <li style="list-style-type:none; padding: 1%; font-size: 18px; color: black;">ID: ${data.id}</li>
            <a href="${data.email}" style="list-style-type:none; padding: 1%; font-size: 18px; color: black:">Email: ${data.email}</li>
            <a href="https:/github/${data.github}" style="list-style-type:none; padding: 1%; font-size: 18px; color: black:">Github:${data.github}</a>
          </div>
      </div>`
      }
      if (data.getRole() === "Intern") {
        return `
        <div class="card" style="width: 200px; height: 200px; border-style: solid; border-radius: 2%; margin: 5%;">
        <div class="card-body">
          <div class="cheader" style="background-color:blue; width: 200px; height: 30%;">
            <h5 style="color:white; text-align: center; font-size: 35px; margin: 0; padding: 0;">${data.name}</h5>
            <h6 style="color:white; text-align: center; font-size: 25px; margin: 0; padding: 0;">Manager</h6>
          </div>
          <div style="height:70%;">
            <li style="list-style-type:none; padding: 1%; font-size: 18px; color: black;">ID: ${data.id}</li>
            <li style="list-style-type:none; padding: 1%; font-size: 18px; color: black:">Email: ${data.email}</li>
            <li style="list-style-type:none; padding: 1%; font-size: 18px; color: black:">Office Number:${data.school}</li>
          </div>
      </div>`
      }
    });
}

getManager();