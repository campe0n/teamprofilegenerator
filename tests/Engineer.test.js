const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it('should return engineer', () => {
    const role = "Engineer";
    const test = new Engineer();
    expect(test.getRole()).toEqual(role);
  });
});