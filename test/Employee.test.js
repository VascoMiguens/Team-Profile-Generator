const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("Should create an object with id, name, email and role given the user inputs valid arguments", () => {
      const employee = new Employee(1, "Vasco", "test@test.com");

      const role = "Employee";

      expect(employee.id).toEqual(expect.any(Number));
      expect(employee.name).toEqual(expect.any(String));
      expect(employee.email).toEqual(expect.any(String));

      expect(employee.getId()).toEqual(expect.any(Number));
      expect(employee.getName()).toEqual(expect.any(String));
      expect(employee.getEmail()).toEqual(expect.any(String));
      expect(employee.getRole()).toEqual(role);
    });
  });
});
