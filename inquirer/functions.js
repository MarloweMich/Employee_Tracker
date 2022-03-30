const inquirer = require('inquirer');
const cTable = require("console.table");
const db = require("../config/connection");
const { end } = require('../config/connection');
const { get } = require('express/lib/request');
  const navList = {
    type: 'list',
    message: 'What would you like to do?',
    name: 'choice',
    choices: ['View All Employees', 'Add Employee', 'Update An Employee',
                'View All Roles', 'Add Role', 
                'View All Departments', 'Add Department', 'EXIT'],
};

const deptArr = [];
const roleArr = [];
const empArr = [];

//BEGINNING OF ASYNC INQUIRER.PROMPT FUNCTIONS
async function navFunc() {
    const navData = await inquirer.prompt(navList);
    switch (navData.choice) {
      case "View All Employees":
        viewEmployee();
        break;
      case "Add Employee":
        newEmployee();
        break;
      case "Update an Employee":
        updateEmployee();
        break;
      case "View All Roles":
        viewRole();
        break;
      case "Add Role":
        newRole();
        break;
      case "View All Departments":
        viewDept();
        break;
      case "Add Department":
        newDept();
        break;
      case "EXIT":
        return;
    };
  
    function viewEmployee() {
        db.query(`SELECT * FROM employee`, (err, results) => {
          console.table(results);
          return navFunc();
        });
      }

      function viewRole() {
        db.query(`SELECT * FROM deptRole`, (err, results) => {
          console.table(results);
          return navFunc();
        });
      }

      function viewDept() {
        db.query(`SELECT * FROM department`, (err, results) => {
         console.table(results);
          return navFunc();
        });
      }

      
  
   async function newEmployee() {
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
          type: 'number',
          message: "What is the role ID of this employee?",
          name: 'role'
      },
      {
        type: 'number',
        message: "What is the Manager's ID over this employee?",
        name: "manager"
      },
      ];
      const employeeData = await inquirer.prompt(employeeSet);
      empArr.push(employeeData);
      db.query(
        `INSERT INTO employee (first_name, last_name, role_id, manager_id) 
          VALUES 
          ('${employeeData.first_name}', '${employeeData.last_name}', 
            ${employeeData.role}, ${employeeData.manager})`,
        (err) => {
          if (err) {
            console.error(
              `\n ${employeeData.first_name} ${employeeData.last_name} is not a valid entry or already exists.`
            );
            return navFunc();
          } else {
            console.log(
              `\n ${employeeData.first_name} ${employeeData.last_name} has been added to the Employee database!`
            );
          }
        }
      );
      return navFunc();
    }
  
 async function newRole() {
                   const roleSet =
                   [
                    {
                        type: 'input',
                        message: "What is the name of this role?",
                        name: 'roleName'
                    },
                    {
                        type: 'number',
                        message: 'What is the salary of this role?',
                        name: 'roleSalary'
                    },
                    {
                      type: 'number',
                      message: "What is the department ID of this role?",
                      name: "roleDept"
                    }
                    ]
        const roleData = await inquirer.prompt(roleSet);
        roleArr.push(roleData)
      db.query(
        `INSERT INTO deptRole (title, salary, department_id) VALUES 
          ('${roleData.roleName}', ${roleData.roleSalary}, ${roleData.roleDept})`,
        (err) => {
          if (err) {
            console.error(
              `\n ${roleData.roleName} is not a valid entry or already exists.`
            );
            return navFunc();
          } else {
            console.log(
              `\n ${roleData.roleName} has been added to the Role database!`
            );
          }
        }
      );
      return navFunc();
    }

    async function newDept() {
        const deptSet = {
            type: 'input',
            message: "What is the name of this department?",
            name: "deptName"
        };
      const deptData = await inquirer.prompt(deptSet);
      deptArr.push(deptData);
      db.query(
        `INSERT INTO department (dept_name) VALUES ('${deptData.deptName}')`,
        (err) => {
          if (err) {
            console.error(
              `\n ${deptData.deptName} is not a valid entry or already exists.`
            );
            return navFunc();
          } else {
            console.log(
              `\n ${deptData.deptName} has been added to the Department database!`
            );
          }
        }
      );
      return navFunc();
    }
  } //END OF ASYNC INQUIRER.PROMPT FUNCTIONS

  module.exports = navFunc;