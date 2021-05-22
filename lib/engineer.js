const inquirer = require('inquirer')
const Employee = require('./employee')

class Engineer extends Employee {
  constructor(name, id, email, github){
    super(name, id, email);
    this.github = github
  }

  getGithub(){
    inquirer.prompt([
    {
      type: 'input',
      message: `What is the engineer's github?`,
      name: 'github',
    }])
  }
}
  
module.exports = Engineer;