const cTable = require("console.table");
const db = require("./config/connection");
const {
    employeeUpdate,
    navList,
    deptSet,
    roleSet,
    employeeSet,
    inquirer,
  } = require("./inquirer/prompts");

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
    };
  
    async function updateEmployee() {
        const updateData = await inquirer.prompt(employeeUpdate);
        db.query(`UPDATE employee SET employee.role_id = ${updateData.choice}
                  WHERE employee.id = ${updateData.choice}`)
    };
  
    async function newEmployee() {
      const employeeData = await inquirer.prompt(employeeSet);
      db.query(
        `INSERT INTO employee (first_name, last_name, role_id, manager_id) 
          VALUES 
          ('${employeeData.first_name}, ${employeeData.last_name}, 
            ${employeeData.role_id}, ${employeeData.manager_id}')`,
        (err) => {
          if (err) {
            console.error(
              `\n ${employeeData.first_name} ${employeeData.last_name} is not a valid entry or already exists.`
            );
            return newDept();
          } else {
            console.info(
              `\n ${employeeData.first_name} ${employeeData.last_name} has been added to the Employee database!`
            );
          }
        }
      );
      return navFunc();
    }
  
    function viewEmployee() {
      db.query(`SELECT * FROM employee`, (err, results) => {
        console.log(console.table(results));
        return navFunc();
      });
    }
  
    function viewRole() {
      db.query(`SELECT * FROM deptRole`, (err, results) => {
        console.log(console.table(results));
        return navFunc();
      });
    }
  
    async function newRole() {
      const roleData = await inquirer.prompt(roleSet);
      db.query(
        `INSERT INTO deptRole (title, salary, depatment_id) VALUES 
          ('${roleData.roleName}, ${roleData.roleSalary}, ${roleData.roleDept}')`,
        (err) => {
          if (err) {
            console.error(
              `\n ${roleData.roleName} is not a valid entry or already exists.`
            );
            return newDept();
          } else {
            console.info(
              `\n ${roleData.roleName} has been added to the Role database!`
            );
          }
        }
      );
      return navFunc();
    }
  
    function viewDept() {
      db.query(`SELECT * FROM department`, (err, results) => {
        console.log(console.table(results));
        return navFunc();
      });
    }
  
    async function newDept() {
      const deptData = await inquirer.prompt(deptSet);
      db.query(
        `INSERT INTO department (dept_name) VALUES ('${deptData.deptName}')`,
        (err) => {
          if (err) {
            console.error(
              `\n ${deptData.deptName} is not a valid entry or already exists.`
            );
            return newDept();
          } else {
            console.info(
              `\n ${deptData.deptName} has been added to the Department database!`
            );
          }
        }
      );
      return navFunc();
    }
  } //END OF ASYNC INQUIRER.PROMPT FUNCTIONS

const init = () => {
  navFunc();
};

init();
