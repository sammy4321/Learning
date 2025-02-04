## Data Types : 
| **Category**       | **Data Type**                               | **Description**                                                                                     |
|---------------------|---------------------------------------------|-----------------------------------------------------------------------------------------------------|
| **Numeric Types**   | SMALLINT                                   | Small integer (-32,768 to 32,767)                                                                  |
|                     | INTEGER (or INT)                           | Standard integer (-2,147,483,648 to 2,147,483,647)                                                 |
|                     | BIGINT                                     | Large integer (-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)                            |
|                     | DECIMAL (or NUMERIC)                       | Exact numeric type with user-specified precision and scale                                          |
|                     | REAL                                       | Single-precision floating-point number (approx. 6 decimal digits)                                  |
|                     | DOUBLE PRECISION                           | Double-precision floating-point number (approx. 15 decimal digits)                                 |
|                     | SERIAL                                     | Auto-incrementing 4-byte integer                                                                   |
|                     | BIGSERIAL                                  | Auto-incrementing 8-byte integer                                                                   |
| **Monetary Types**  | MONEY                                      | Currency amounts with a fixed fractional precision                                                 |
| **Character Types** | CHAR(n) or CHARACTER(n)                    | Fixed-length character string of length n                                                          |
|                     | VARCHAR(n) or CHARACTER VARYING(n)         | Variable-length character string with a limit of n                                                 |
|                     | TEXT                                       | Variable-length character string with no specific limit                                            |
| **Binary Types**    | BYTEA                                      | Binary data ("byte array")                                                                         |
| **Date/Time Types** | DATE                                       | Calendar date (year, month, day)                                                                   |
|                     | TIME [WITHOUT TIME ZONE]                   | Time of day (no time zone)                                                                         |
|                     | TIME WITH TIME ZONE                        | Time of day with time zone                                                                         |
|                     | TIMESTAMP [WITHOUT TIME ZONE]              | Date and time (no time zone)                                                                       |
|                     | TIMESTAMP WITH TIME ZONE (or TIMESTAMPTZ)  | Date and time with time zone                                                                       |
|                     | INTERVAL                                   | Time interval (e.g., 1 day, 2 hours)                                                               |
| **Boolean Type**    | BOOLEAN                                    | Logical Boolean (TRUE, FALSE, or NULL)                                                             |
| **Enumerated Types**| ENUM                                       | A user-defined set of values (e.g., ('small', 'medium', 'large'))                                  |
| **Geometric Types** | POINT                                      | A geometric point (x, y)                                                                           |
|                     | LINE                                       | Infinite line                                                                                      |
|                     | LSEG                                       | Line segment                                                                                       |
|                     | BOX                                        | Rectangular box                                                                                     |
|                     | PATH                                       | Geometric path                                                                                     |
|                     | POLYGON                                    | Closed geometric path (polygon)                                                                   |
|                     | CIRCLE                                     | Circle                                                                                             |
| **Network Types**   | CIDR                                       | IPv4 or IPv6 network                                                                               |
|                     | INET                                       | IPv4 or IPv6 host and network                                                                      |
|                     | MACADDR                                    | MAC address                                                                                        |
| **Bit String Types**| BIT(n)                                     | Fixed-length bit string                                                                            |
|                     | BIT VARYING(n)                             | Variable-length bit string                                                                         |
| **Text Search Types**| TSVECTOR                                  | Text search vector                                                                                 |
|                     | TSQUERY                                   | Text search query                                                                                  |
| **UUID Type**       | UUID                                       | Universally unique identifier                                                                      |
| **JSON Types**      | JSON                                       | JSON data                                                                                          |
|                     | JSONB                                      | Binary JSON, more efficient for indexing                                                          |
| **Array Types**     | data_type[]                                | Any data type can be an array (e.g., INTEGER[], TEXT[])                                            |
| **Composite Types** | Custom                                     | User-defined types made up of multiple fields                                                     |
| **Range Types**     | INT4RANGE                                  | Range of INTEGER                                                                                   |
|                     | INT8RANGE                                  | Range of BIGINT                                                                                    |
|                     | NUMRANGE                                   | Range of NUMERIC                                                                                   |
|                     | TSRANGE                                   | Range of TIMESTAMP WITHOUT TIME ZONE                                                              |
|                     | TSTZRANGE                                 | Range of TIMESTAMP WITH TIME ZONE                                                                 |
|                     | DATERANGE                                 | Range of DATE                                                                                      |

## Constraints : 
| **Constraint**      | **Description**                                                                 | **Example**                                                                                       |
|----------------------|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| **PRIMARY KEY**      | Ensures each row has a unique and non-null value. Only one primary key is allowed per table. | `id SERIAL PRIMARY KEY`                                                                          |
| **UNIQUE**           | Ensures all values in a column or combination of columns are unique.            | `email VARCHAR(255) UNIQUE`                                                                      |
| **NOT NULL**         | Ensures a column cannot have NULL values.                                       | `username VARCHAR(50) NOT NULL`                                                                  |
| **CHECK**            | Ensures values in a column meet a specified condition.                         | `age INT CHECK (age >= 18)`                                                                      |
| **DEFAULT**          | Sets a default value for a column when no value is provided.                   | `created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP`                                                 |
| **FOREIGN KEY**      | Ensures values in a column or group of columns match values in a column of another table. | `CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)`                                   |
| **REFERENCES**       | A shorthand for defining a FOREIGN KEY constraint.                             | `user_id INT REFERENCES users(id)`                                                               |
| **ON DELETE**        | Defines behavior when a referenced row in the parent table is deleted (CASCADE, SET NULL, etc.). | `FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE`                                   |
| **ON UPDATE**        | Defines behavior when a referenced row in the parent table is updated (CASCADE, SET NULL, etc.). | `FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE`                                   |
| **EXCLUDE**          | Prevents overlapping values in a column or set of columns, typically for ranges or geometric types. | `EXCLUDE USING GIST (room WITH =, time_period WITH &&)`                                          |
| **UNIQUE INDEX**     | A specialized unique constraint using an index.                                | `CREATE UNIQUE INDEX unique_email ON users(email)`                                               |
| **DEFERRABLE**       | Allows constraints to be deferred until the end of a transaction.              | `CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id) DEFERRABLE INITIALLY DEFERRED`    |
| **EXCLUDE USING**    | Enforces uniqueness with more complex conditions, typically used with range types. | `EXCLUDE USING gist (room WITH =, time_period WITH &&)`                                          |
