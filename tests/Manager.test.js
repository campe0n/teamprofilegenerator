const Manager = require("../lib/Manager");

describe("Manager", () => {
  it('should return manager', () => {
    const role = "Manager";
    const test = new Manager();
    expect(test.getRole()).toEqual(role);
  });
});