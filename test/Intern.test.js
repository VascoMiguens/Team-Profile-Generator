const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("Should create an object with id, name, email, role and School given the user input is a valid format type ", () => {
      const intern = new Intern(1, "Vasco", "test@test.com", "Test School");
      const name = /^[ a-zA-ZÀ-ÿ\u00f1\u00d1 ']*$/g;
      const email =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      const role = "Intern";

      expect(intern.id).toEqual(expect.any(Number));
      expect(intern.name).toMatch(name);
      expect(intern.email).toMatch(email);
      expect(intern.school).toEqual(expect.any(String));

      expect(intern.getId()).toEqual(expect.any(Number));
      expect(intern.getName()).toMatch(name);
      expect(intern.getEmail()).toMatch(email);
      expect(intern.getSchool()).toEqual(expect.any(String));
      expect(intern.getRole()).toEqual(role);
    });
  });
});
