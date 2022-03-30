// const inquirer = require('inquirer');
// const db = require('../config/connection')
// // const {getDept, getRole, getEmployee} = require('./functions');

// // function getDept() {
// //     for (let i=0; i<deptArr.length; i++)
// //     return deptArr[i];
// // };
// // function getRole() {
// //     for (let i=0; i<roles.length; i++)
// //     return roles[i];
// // };
// // function getEmployee() {
// //     for (let i=0; i<employees.length; i++)
// //     return employees[i];
// // };

// const navList = {
//     type: 'list',
//     message: 'What would you like to do?',
//     name: 'choice',
//     choices: ['View All Employees', 'Add Employee', 'Update An Employee',
//                 'View All Roles', 'Add Role', 
//                 'View All Departments', 'Add Department'],
// };

// const deptSet = {
//     type: 'input',
//     message: "What is the name of this department?",
//     name: "deptName"
// };

// const roleSet = [
//     {
//         type: 'input',
//         message: "What is the name of this role?",
//         name: 'roleName'
//     },
//     {
//         type: 'input',
//         message: 'What is the salary of this role?',
//         name: 'roleSalary'
//     },
//     {
//         type: 'number',
//         message: "What is the department ID for this role?",
//         name: 'roleDept'
//     },
//     ];

// const employeeSet = [
//     {
//         type: 'input',
//         message: "What is the employee's first name?",
//         name: "first_name"
//     },
//     {
//         type: 'input',
//         message: "What is the employee's last name?",
//         name: "last_name"
//     },
//     {
//         type: 'number',
//         message: "What is the role ID of this employee?",
//         name: 'role'
//     },
//     {
//       type: 'number',
//       message: "What is the Manager's ID over this employee?",
//       name: "manager"
//     },
//     ];

// // const employeeUpdate = [
// // {
// //     type: 'list',
// //     message: 'Which employee would you like to update?',
// //     name: 'employee',
// //     choices: []
// // },
// // {
// //     type: 'list',
//     // message: "What is employee's role?",
// //     choices: [],
// //     name: 'role'
// // },
// // ];

// module.exports = {navList, deptSet, roleSet, employeeSet, inquirer};