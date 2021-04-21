#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const data = {
    name: chalk.black("Rekha Lambotte"),
    work: chalk.black ("Web develeoper junior"),
    npm: chalk.blue("https://www.npmjs.com/~rekharekha"),
    github: chalk.blue("https://github.com/RekhaLambotte"),
    Linkedin: chalk.blue("https://www.linkedin.com/in/rekha-lambotte-8b56701b7/"),
    npx: chalk.blue("")

};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    chalk.green(
        boxen(
            [
                `${data.name} `,
                EMPTYLINE,
                `${data.work}`,
                EMPTYLINE,
                `${data.github}`,
                EMPTYLINE,
                `${data.Linkedin}`,
                EMPTYLINE,
                `${data.npm}`,
                EMPTYLINE,
                `${data.npx}`,
                EMPTYLINE,

            ].join(NEWLINE),
            {
                padding: 1,
                margin: 1,
                backgroundColor: "#F8D5FC" ,
                borderStyle: "doubleSingle",
                align: "center",
            },
        ),
    ),
);