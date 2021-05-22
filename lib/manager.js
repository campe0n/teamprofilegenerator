const Employee = require('./employee')

class Manager extends Employee {
  constructor(name, id, email, officeNumber){
    super(name, id, email);
    this.officeNumber = officeNumber
    this.getName()
    this.getId()
    this.getEmail()
  }

  getRole(){}
}

module.exports = Manager;