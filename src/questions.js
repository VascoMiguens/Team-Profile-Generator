const MainMenuQuestions = [
  {
    type: "list",
    message: "Choose an option: ",
    name: "option",
    choices: [
      "Add a Manager",
      "Add a Engineer",
      "Add a Intern",
      "Build the team",
    ],
  },
];

const ManagerQuestions = [
  {
    type: "input",
    message: "What is the Manager's ID ",
    name: "id",
  },
  {
    type: "input",
    message: "What is the Manager's name? ",
    name: "name",
  },
  {
    type: "input",
    message: "What is the Manager's email address? ",
    name: "email",
  },
  {
    type: "input",
    message: "Enter the office's number: ",
    name: "officeNumber",
  },
];

const EngineerQuestions = [
  {
    type: "input",
    message: "What is the Engineer's ID",
    name: "id",
  },
  {
    type: "input",
    message: "What is the Engineer's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the Engineer's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the Engineer's Github username?",
    name: "github",
  },
];

const InternQuestions = [
  {
    type: "input",
    message: "What is the Intern's ID",
    name: "id",
  },
  {
    type: "input",
    message: "What is the Intern's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the Intern's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What School did the Intern attend?",
    name: "school",
  },
];

module.exports = {
  MainMenuQuestions,
  ManagerQuestions,
  EngineerQuestions,
  InternQuestions,
};
