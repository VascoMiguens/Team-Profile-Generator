const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("Should create a class with id, name, email, role and Github given the user input is a valid format type", () => {
      const engineer = new Engineer(
        1,
        "Vasco",
        "test@test.com",
        "@VascoMiguens"
      );
      const name = /^[ a-zA-ZÀ-ÿ\u00f1\u00d1 ']*$/g;
      const role = "Engineer";
      const email =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      expect(engineer.id).toEqual(expect.any(Number));
      expect(engineer.name).toMatch(name);
      expect(engineer.email).toMatch(email);
      expect(engineer.github).toEqual(expect.any(String));

      expect(engineer.getId()).toEqual(expect.any(Number));
      expect(engineer.getName()).toMatch(name);
      expect(engineer.getEmail()).toMatch(email);
      expect(engineer.getGithub()).toEqual(expect.any(String));
      expect(engineer.getRole()).toEqual(role);
    });
  });
});
