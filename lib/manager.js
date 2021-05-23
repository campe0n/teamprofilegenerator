const inquirer = require('inquirer');
const Employee = require('./employee')

var position = "manager's"

class Manager extends Employee {
  constructor(name, id, email, officeNumber){
    super(name, id, email);
    this.officeNumber = officeNumber
    this.getName()
    this.getId()
    this.getEmail()
  }

  getOfficeNo() {
    const managerq = ([
      {
        type: 'input',
        message: `What is the ${position} ID?`,
        name: 'officeNo',
      }
    ])
    inquirer.prompt(managerq).then((data) => {
      return data.officeNo
    })
  }

  getRole(){
    return 'manager'
  }
}

module.exports = Manager;