INSERT INTO department (dept_name)
VALUES ('SALES'),
        ('RESEARCH'),
        ('UPKEEP'),
        ('EXPENDABLES');

INSERT INTO deptRole (title, salary, department_id)
VALUES ('Salesperson', 70000, 1),
        ('Lead Salesperson', 100000, 1),
        ('Junior Salesperson', 40000, 1),
        ('Researcher', 70000, 2),
        ('Lead Researcher', 100000, 2),
        ('Junior Researcher', 40000, 2),
        ('Custodian', 40000, 3),
        ('Lead Custodian', 50000, 3),
        ('Junior Custodian', 30000, 3),
        ('dumby', 10000, 4),
        ('lead dumby', 15000, 4),
        ("junior dumby", 5000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Larry', 'Elder', 2, NULL),
        ('Darry', 'Youthful', 5, NULL),
        ('Garry', 'Younger', 1, 1),
        ('Jerry', 'Oldtimer', 1, 1),
        ('Harry', 'Oldie', 4, 2)

