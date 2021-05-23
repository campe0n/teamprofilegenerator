const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should receive text from user input", () => {
      const name = "Name of employee";

      const obj = new Employee(name);

      expect(obj.name).toEqual(name);
    });
  });
});