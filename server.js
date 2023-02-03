const inquirer = require("inquirer")
const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const { response } = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'rootroot',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);

// TODO: Create an array of questions for user input
prompt([
   {
    type: "list",
    message: "What would you like to do?",
    name: "title",
    choices: [{name: "View all employees?", value: "View employees?"},
    {name: "Add employee?", value: "Add employee?"}, {name: "Update employee role?", value: "Update employee role?"}, 
    {name: "View all roles?", value: "View all roles?"}, {name: "Add role?", value: "Add role?"}, {name: "View all department?", value: "View all department?"}, 
    {name: "Add department?", value: "Add department?"},]
   },
  
   
]).then(response => {let choice = response.choice}) 
// TODO: Create a function to write writeME file
  function init() {
    inquirer.prompt(questions)
    .then(function (ResponseFromInquirer) {
    console.log(ResponseFromInquirer)
    fs.writeFileSync("README.md", generateMarkdown(ResponseFromInquirer));
    (err) =>
    err ? console.log(err) : console.log("Successful");
 });
};
// Function call to initialize app
init();