// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const Markdown = require("./develop/utils/Markdown");
const writeFile = require("./develop/utils/save&copy");

const promptUser = () =>{
    //prompting questions. 
    return inquirer.prompt([
        {
            type: "input",
            name: 'title',
            message: "What is your projects title? (Required)",
            //validating if the user gave an input
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter a project name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: 'name',
            message: "What is your name? (Required)",
            //validating if the user gave an input
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: 'git',
            message: "What is your github name? (Required)",
            //validating if the user gave an input
            validate: gitInput => {
                if (gitInput) {
                    return true;
                } else {
                    console.log("Please enter your github name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: 'email',
            message: "What is your E-mail address? (Required)",
            //validating if the user gave an input
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter your E-mail address!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project (Required)",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log("Please enter a project description!");
                    return false;
                }
            }
        },
        {
           type: "confirm",
           name: "confirmInstall",
           message: "Do you need to add installation instructions", 
           default: true
        },
        {
            type: "input",
            name: "install",
            message: "Enter installation instructions.(Required)",
            //determining if the user wanted to input installation information
            when: ({ confirmInstall }) => confirmInstall,
            //preventing empty installation instruction if user wanted to enter one.
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log("Please enter installation instructions!");
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "confirmUsage",
            message: "Would you like to add specific usage instructions?",
            default: true
        },
        {
            type: "input",
            name: "usage",
            message: "Enter usage instructions.(Required)",
            when: ({ confirmUsage }) => confirmUsage,
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log("Please enter usage instructions!");
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "confirmContribute",
            message: "Would you like to add contribution instructions?",
            default: true  
        },
        {
            type: "input",
            name: "contribute",
            message: "Enter contribution info.(Required)",
            when: ({ confirmContribute }) => confirmContribute,
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log("Please enter contribution instructions!");
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "confirmTest",
            message: "Would you like to add test instructions?",
            default: true  
        },
        {
            type: "input",
            name: "test",
            message: "Enter test info.(Required)",
            when: ({ confirmTest }) => confirmTest,
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log("Please enter test instructions!");
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "license",
            message:"What license is used for this project?",
            choices: ["MIT", "GPL 3.0" , "Apache 2.0", "GPL 2.0" , "LGPL" , "none"]
          },
    ]);
};




//prompting user and then having the readme file made
promptUser()
    .then(input => {
        console.log(input)
       return Markdown(input);
      
    })
    .then(pageMarkdown => {
        return writeFile(pageMarkdown);
    })