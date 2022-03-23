const inquirer = require('inquirer');
const db = require('../config/connection')

const navList = {
    type: 'list',
    message: 'What would you like to do?',
    name: 'choice',
    choices: ['View All Employees', 'Add Employee', 'Update An Employee',
                'View All Roles', 'Add Role', 
                'View All Departments', 'Add Department'],
};

const deptSet = {
    type: 'input',
    message: "What is the name of this department?",
    name: "deptName"
};

const roleSet = [
{
    type: 'input',
    message: "What is the name of this role?",
    name: 'roleName'
},
{
    type: 'input',
    message: 'What is the salary of this role?',
    name: 'roleSalary'
},
{
    type: 'list',
    message: "What department does this role belong to?",
    name: 'roleDept',
    choices: []
}
];

const employeeSet = [
{
    type: 'input',
    message: "What is the employee's first name?",
    name: "first_name"
},
{
    type: 'input',
    message: "What is the employee's last name?",
    name: "last_name"
},
{
    type: 'list',
    message: "What is employee's role?",
    choices: [],
    name: 'choice'
},
];

const employeeUpdate = [
{
    type: 'list',
    message: 'Which employee would you like to update?',
    name: 'choice',
    choices: []
},
{
    type: 'list',
    message: "What is employee's role?",
    choices: [],
    name: 'choice'
},
];

module.exports = {employeeUpdate, navList, deptSet, roleSet, employeeSet, inquirer};