Below is the assignment information for reference.

1) Please find below the UXPIN link and convert it to an HTML version using Tailwind/Bootstrap

https://preview.uxpin.com/c10f5b79da0d99bc1acbab7f4e7629db199ef424#/pages/165617785/simulate/no-panels

2) Write an SQL query to fetch the employee ID, name, and department from the employee database by grouping by department whose salary equals or exceeds 20000/-.

SELECT employee_id, employee_name, department
FROM employees
WHERE salary >= 20000
GROUP BY department;

