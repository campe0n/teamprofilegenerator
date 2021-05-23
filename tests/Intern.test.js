const Intern = require("../lib/Intern");

describe("Intern", () => {
  it('should return intern', () => {
    const role = "Intern";
    const test = new Intern();
    expect(test.getRole()).toEqual(role);
  });
});