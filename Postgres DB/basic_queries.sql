-- Create Database : 
CREATE DATABASE mydatabase; 
-- Create Table : 
CREATE TABLE mytable (id SERIAL PRIMARY KEY,name VARCHAR(50) NOT NULL,email VARCHAR(100) NOT NULL,created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP); 
-- Alter Table : 
ALTER TABLE mytable ADD COLUMN phone VARCHAR(20);
-- Insert Data :
INSERT INTO users (name, email, password) VALUES ('John Doe', 'johndoe@example.com', 'password123');
-- Modify Data : 
UPDATE users SET email = 'johndoe2@example.com' WHERE name = 'John Doe';
-- Delete Data :
DELETE FROM users WHERE name = 'John Doe';
-- Insert command with returning : 
INSERT INTO customers (name, email) VALUES ('John Doe', 'john@example.com') RETURNING *; -- All columns are returned. 
INSERT INTO customers (name, email) VALUES ('Jane Smith', 'jane@example.com') RETURNING name, email; -- Select columns are returned
-- Select command with sorting and aliases : 
SELECT DISTINCT customer_name AS Customer,order_date AS OrderDate FROM customers ORDER BY OrderDate;
-- Filtering Data : 
SELECT * FROM table_name WHERE column_name = 'value'; -- Where
SELECT * FROM employees OFFSET 4 LIMIT 6; -- Offset and limit. Ignores first 4 rows. 
SELECT * FROM employees WHERE name LIKE '%on%'; -- Like
SELECT * FROM employees WHERE salary IN (50000, 100000); -- IN
SELECT * FROM table_name WHERE column_name ILIKE 'value'; -- Similar to Like but case-insenstive.
SELECT * FROM table_name WHERE column_name IS NULL; -- Values that are null.
-- Subqueries : 
SELECT c.name FROM customers c WHERE c.customer_id IN (SELECT o.customer_id FROM orders o GROUP BY o.customer_id HAVING SUM(o.total_value) > 1000);
-- CTE : 
WITH total_salary AS (SELECT SUM(salary) AS total_salary FROM employees)SELECT AVG(salary) AS average_salary FROM total_salary;
-- Regular Expression : 
SELECT * FROM customers WHERE "email" ~ '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$';