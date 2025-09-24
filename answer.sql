SELECT employee_id, employee_name, department
FROM employees
WHERE salary >= 20000
GROUP BY department;
