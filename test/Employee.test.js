const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("Should create an object with id, name, email and role given the user inputs valid arguments", () => {
      const employee = new Employee(1, "Vasco", "test.com@test.com");
      const email =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      const role = "Employee";

      //Expect the key's value to be the of format type
      expect(employee.id).toEqual(expect.any(Number));
      expect(employee.name).toEqual(expect.any(String));
      //use toMatch(Regexp)
      expect(employee.email).toMatch(email);

      //Expect the value returned to be of the format type
      expect(employee.getId()).toEqual(expect.any(Number));
      expect(employee.getName()).toEqual(expect.any(String));
      expect(employee.getEmail()).toMatch(email);
      expect(employee.getRole()).toEqual(role);
    });
  });
});
