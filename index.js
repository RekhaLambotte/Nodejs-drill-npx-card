#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const data = {
    name: chalk.whiteBright("Rekha Lambotte"),
    handle: chalk.white ("Rekha"),
    work: chalk.white ("Web develeoper junior"),
    npm: (""),
    github: (""),
    Linkedin: (""),
    npx: (""),
    npm: (""),

};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    chalk.green(
        boxen(
            [
                `${data.name} / ${data.handle}`,
                EMPTYLINE,
                `${data.work}`
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