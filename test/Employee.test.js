const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("Should create an object with id, name, email and role given the user inputs valid arguments", () => {
      const employee = new Employee(1, "Tatina Felisberto", "test.com@test.com");
      const name = /^[ a-zA-ZÀ-ÿ\u00f1\u00d1 ']*$/g;
      const email =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      const role = "Employee";

      //Expect the key's value to be equal to the data type
      expect(employee.id).toEqual(expect.any(Number));
      //to match the const name regex
      expect(employee.name).toMatch(name);
      //use toMatch(Regexp)
      expect(employee.email).toMatch(email);

      //Expect the value returned to be equal to the data type
      expect(employee.getId()).toEqual(expect.any(Number));
      expect(employee.getName()).toMatch(name);
      //toMatch(Regexp)
      expect(employee.getEmail()).toMatch(email);
      expect(employee.getRole()).toEqual(role);
    });
  });
});
