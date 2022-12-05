const inquirer = require("inquirer");
const questions = require("./questions");

//Call constructor classes
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

//create array for every employee
const managers = [];
const engineers = [];
const interns = [];

const buildTeam = require("./buildTeam");

const runMenuQuestions = async () => {
  await inquirer.prompt(questions.MainMenuQuestions).then((response) => {
    switch (response.option) {
      case "Add a Manager":
        //Load the Manager's Questions
        runManagerQuestions();
        break;
      case "Add a Engineer":
        //Load the Engineer's Questions
        runEngineerQuestions();
        break;
      case "Add a Intern":
        //Load the Intern's Questions
        runInternQuestions();
        break;
      case "Build the Team":
        //If the every array is empty call the function again
        if (
          managers.length === 0 &&
          engineers.length === 0 &&
          interns.length === 0
        ) {
          console.log("The team has no members");
          runMenuQuestions();
        } else {
          //else build the team
          buildTeam(managers, engineers, interns);
        }

        break;
      default:
        console.log("default");
        break;
    }
  });
};

const runManagerQuestions = async () => {
  await inquirer.prompt(questions.ManagerQuestions).then((response) => {
    //Create a new Manager Object

    const manager = new Manager(
      response.id,
      response.name,
      response.email,
      response.officeNumber
    );

    //add the new object to the array
    managers.push(manager);

    //Show the Menu questions Again
    runMenuQuestions();
  });
};

const runEngineerQuestions = async () => {
  await inquirer.prompt(questions.EngineerQuestions).then((response) => {
    //Create a new Engineer Object
    const engineer = new Engineer(
      response.id,
      response.name,
      response.email,
      response.github
    );

    //add the new object to the array
    engineers.push(engineer);

    //Show the Menu questions Again
    runMenuQuestions();
  });
};

const runInternQuestions = async () => {
  await inquirer.prompt(questions.InternQuestions).then((response) => {
    //Create a new Intern Object
    const intern = new Intern(
      response.id,
      response.name,
      response.email,
      response.school
    );

    //add the new object to the array
    interns.push(intern);

    //Show the Menu questions Again
    runMenuQuestions();
  });
};

module.exports = runMenuQuestions;
