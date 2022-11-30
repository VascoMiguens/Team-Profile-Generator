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

      const role = "Engineer";

      expect(engineer.id).toEqual(expect.any(Number));
      expect(engineer.name).toEqual(expect.any(String));
      expect(engineer.email).toEqual(expect.any(String));
      expect(engineer.github).toEqual(expect.any(String));

      expect(engineer.getId()).toEqual(expect.any(Number));
      expect(engineer.getName()).toEqual(expect.any(String));
      expect(engineer.getEmail()).toEqual(expect.any(String));
      expect(engineer.getGithub()).toEqual(expect.any(String));
      expect(engineer.getRole()).toEqual(role);
    });
  });
});
