-- Create table : 
CREATE TABLE table_name (
    id SERIAL PRIMARY KEY,         -- Auto-incrementing primary key
    column1_name VARCHAR(255) NOT NULL, -- String column with max length of 255
    column2_name INTEGER,          -- Integer column
    column3_name DATE,             -- Date column
    column4_name BOOLEAN DEFAULT FALSE, -- Boolean column with a default value
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Timestamp with default current time
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Auto-update timestamp
);

-- Column Modification : 
ALTER TABLE table_name ADD COLUMN column_name data_type [CONSTRAINTS];
ALTER TABLE table_name RENAME COLUMN old_column_name TO new_column_name;
ALTER TABLE table_name DROP COLUMN column_name [CASCADE];

