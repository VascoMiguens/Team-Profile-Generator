const confirmEntry = (id, entry) => {
  if (id) {
    return true;
  } else {
    return `Please provide a ${entry}`;
  }
};

const confirmLettersOnly = (id) => {
  const letters = /^[ a-zA-ZÀ-ÿ\u00f1\u00d1 ']*$/g.test(id);
  if (letters === false || letters == "") {
    return `Please provide a valid name`;
  }
  return true;
};

const confirmEmail = (email) => {
  const validEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  if (validEmail === false || validEmail == "") {
    return "Please provide a valid email";
  }
  return true;
};

const confirmNumber = (number) => {
  if (isNaN(number) || number == "") {
    return "please enter a number";
  }
  return true;
};

const MainMenuQuestions = [
  {
    type: "list",
    message: "Choose an option: ",
    name: "option",
    choices: [
      "Add a Manager",
      "Add a Engineer",
      "Add a Intern",
      "Build the Team",
    ],
  },
];

const ManagerQuestions = [
  {
    type: "input",
    message: "What is the Manager's ID",
    name: "id",
    validate: (answer) => confirmNumber(answer),
  },
  {
    type: "input",
    message: "What is the Manager's name? ",
    name: "name",
    validate: (answer) => confirmLettersOnly(answer),
  },
  {
    type: "input",
    message: "What is the Manager's email address?",
    name: "email",
    validate: (answer) => confirmEmail(answer),
  },
  {
    type: "input",
    message: "Enter the office's number: ",
    name: "officeNumber",
    validate: (answer) => confirmNumber(answer),
  },
];

const EngineerQuestions = [
  {
    type: "input",
    message: "What is the Engineer's ID",
    name: "id",
    validate: (answer) => confirmNumber(answer),
  },
  {
    type: "input",
    message: "What is the Engineer's name?",
    name: "name",
    validate: (answer) => confirmLettersOnly(answer),
  },
  {
    type: "input",
    message: "What is the Engineer's email address?",
    name: "email",
    validate: (answer) => confirmEmail(answer),
  },
  {
    type: "input",
    message: "What is the Engineer's Github username?",
    name: "github",
    validate: (answer) => confirmEntry(answer, "Github username"),
  },
];

const InternQuestions = [
  {
    type: "input",
    message: "What is the Intern's ID",
    name: "id",
    validate: (answer) => confirmNumber(answer),
  },
  {
    type: "input",
    message: "What is the Intern's name?",
    name: "name",
    validate: (answer) => confirmLettersOnly(answer),
  },
  {
    type: "input",
    message: "What is the Intern's email address?",
    name: "email",
    validate: (answer) => confirmEmail(answer),
  },
  {
    type: "input",
    message: "What School did the Intern attend?",
    name: "school",
    validate: (answer) => confirmEntry(answer, "School"),
  },
];

module.exports = {
  MainMenuQuestions,
  ManagerQuestions,
  EngineerQuestions,
  InternQuestions,
};
