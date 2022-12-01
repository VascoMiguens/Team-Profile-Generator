const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("Should create an object with id, name, email, officeNumber and role given the user inputs valid arguments", () => {
      const employee = new Manager(1, "Vasco", "test@test.com", 123456789);
      const email =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      const role = "Manager";

      expect(employee.id).toEqual(expect.any(Number));
      expect(employee.name).toEqual(expect.any(String));
      expect(employee.email).toMatch(email);
      expect(employee.officeNumber).toEqual(expect.any(Number));

      expect(employee.getId()).toEqual(expect.any(Number));
      expect(employee.getName()).toEqual(expect.any(String));
      expect(employee.getEmail()).toMatch(email);
      expect(employee.getOfficeNumber()).toEqual(expect.any(Number));
      expect(employee.getRole()).toEqual(role);
    });
  });
});
