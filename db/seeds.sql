use employees_db;
INSERT INTO department (name)

VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Management"),
       ("Customer Service");

INSERT INTO role ( title, salary, department_id)
VALUES ("CEO", 500000.00, 4),
       ("General Manager", 300000.00, 4),
       ("Chief Marketing Officer", 250000.00, 1),
       ("President", 200000.00, 4),
       ("Finance Manager", 175000.00, 3),
       ("Human Resources Manager", 150000.00, 4),
       ("Project manager", 200000.00, 4),
       ("Accountant", 150000.00, 3),
       ("Sales representative", 85000.00, 1),
       ("Customer service representative", 55000.00, 5),
      
      

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Kobe", "Bryant", 4, 1),
       ("Shaquille", "O'Neal", 4, 2), 
       ("Kevin", "Durant", 1, 4),
       ("Larry", "Bird", 2, 2),
       ("Tim", "Duncan", 2, NULL),
       ("Wilt", "Chamberlain", 3, 3),
       ("Magic", "Johnson",  5, 1),
       ("Kareem", "Abdul-Jabbar", 5, 3),
       ("LeBron", "James", 3, NULL),
       ("Steph", "Curry", 3, NULL);
