const fs = require("fs");

const buildTeam = (managers, engineers, interns) => {
  //Open the template html file
  let html = fs.readFileSync("./template/index.html", "utf-8");
  if (html) {
    //add the manager to the html
    let managerHtml = "";
    managers.forEach((manager) => {
      managerHtml += `<div class="card">
            <div class="card-header">
                <h2>${manager.name}</h2>
                <h3><i class="fa-solid fa-mug-hot"> Manager</i></h3>
                <p>Employee ID: ${manager.id}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
            `;
    });

    //add the engineers to the html
    let engineerHtml = "";
    engineers.forEach((engineer) => {
      engineerHtml += `<div class="card">
            <div class="card-header">
                <h2>${engineer.name}</h2>
                <h3><i class="fa-solid fa-glasses"> Engineer</i></h3>
                <p>Employee ID: ${engineer.id}</p>
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
            `;
    });

    //add the engineers to the html
    let internHtml = "";
    interns.forEach((intern) => {
      internHtml += `<div class="card">
            <div class="card-header">
                <h2>${intern.name}</h2>
                <h3><i class="fa-solid fa-graduation-cap"> Intern</i></h3>
                <p>Employee ID: ${intern.id}</p>
                <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p>School: ${intern.school}</p>
            </div>
        </div>
            `;
    });

    //replace the placeholders in the html withe actual data
    html = html.replace("<!--MANAGERS-->", managerHtml);
    html = html.replace("<!--ENGINEERS-->", engineerHtml);
    html = html.replace("<!--INTERNS-->", internHtml);

    //write the html to the output file
    fs.writeFileSync("./dist/team.html", html, "utf-8");

    console.log("\x1b[35mTeam Page Built");
  }
};

module.exports = buildTeam;
