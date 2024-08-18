-- 1. Creating an Array
-- This creates an array with the elements 1, 2, 3, and 4.
SELECT ARRAY[1, 2, 3, 4] AS my_array;

-- 2. Array Length
-- This returns the length of the array. The second argument (1) refers to the dimension of the array (1D array in this case).
SELECT array_length(ARRAY[1, 2, 3, 4], 1) AS length;

-- 3. Accessing Elements
-- This returns the second element of the array. PostgreSQL arrays are 1-indexed, meaning the first element is at position 1.
SELECT ARRAY[1, 2, 3, 4][2] AS second_element;

-- 4. Concatenating Arrays
-- This concatenates two arrays, [1, 2] and [3, 4], resulting in a single array [1, 2, 3, 4].
SELECT ARRAY[1, 2] || ARRAY[3, 4] AS concatenated_array;

-- 5. Array Contains
-- This checks if the number 2 is present in the array [1, 2, 3, 4]. It returns 't' (true) if the element is found, otherwise 'f' (false).
SELECT 2 = ANY(ARRAY[1, 2, 3, 4]) AS contains_element;

-- 6. Array Append
-- This appends the number 4 to the end of the array [1, 2, 3], resulting in [1, 2, 3, 4].
SELECT array_append(ARRAY[1, 2, 3], 4) AS appended_array;

-- 7. Array Remove
-- This removes all occurrences of the number 2 from the array [1, 2, 3, 2, 4], resulting in [1, 3, 4].
SELECT array_remove(ARRAY[1, 2, 3, 2, 4], 2) AS removed_array;

-- 8. Array Aggregation
-- This aggregates all values in a column from a table into a single array.
-- Replace 'column_name' and 'table_name' with actual names.
SELECT array_agg(column_name) AS aggregated_array
FROM table_name;

-- 9. Unnest Array
-- This expands the array [1, 2, 3, 4] into a set of rows, with each element as a separate row.
SELECT unnest(ARRAY[1, 2, 3, 4]) AS elements;

-- 10. Array Position
-- This returns the position of the element 3 in the array [1, 2, 3, 4]. If the element is not found, it returns NULL.
SELECT array_position(ARRAY[1, 2, 3, 4], 3) AS position;



-- 1. Creating a JSON Object
-- This creates a JSON object with key-value pairs for "name" and "age".
SELECT '{"name": "John", "age": 30}'::json AS my_json;

-- 2. Accessing JSON Fields
-- This extracts the value associated with the key "name" from the JSON object.
SELECT my_json->>'name' AS name
FROM (SELECT '{"name": "John", "age": 30}'::json AS my_json) AS data;

-- 3. Accessing Nested JSON Fields
-- This extracts a nested value from a JSON object. 
-- Here, "city" is a key inside a nested JSON object.
SELECT my_json->'address'->>'city' AS city
FROM (SELECT '{"name": "John", "address": {"city": "New York", "zip": "10001"}}'::json AS my_json) AS data;

-- 4. JSON Array Elements
-- This extracts the first element from a JSON array.
SELECT json_array->>0 AS first_element
FROM (SELECT '["apple", "banana", "cherry"]'::json AS json_array) AS data;

-- 5. JSON Array Length
-- This returns the number of elements in a JSON array.
SELECT json_array_length('["apple", "banana", "cherry"]'::json) AS array_length;

-- 6. Converting JSON to a PostgreSQL Array
-- This converts a JSON array to a PostgreSQL text array.
SELECT ARRAY(SELECT json_array_elements_text('["apple", "banana", "cherry"]'::json)) AS postgres_array;

-- 7. Aggregating JSON Data
-- This aggregates multiple rows into a single JSON array.
-- Replace 'column_name' and 'table_name' with actual names.
SELECT json_agg(column_name) AS aggregated_json
FROM table_name;

-- 8. JSON Object Aggregation
-- This aggregates key-value pairs into a single JSON object.
-- Replace 'key_column' and 'value_column' with actual column names.
SELECT json_object_agg(key_column, value_column) AS aggregated_json_object
FROM table_name;

-- 9. Updating JSON Data
-- This updates a specific key-value pair in a JSON object.
SELECT jsonb_set('{"name": "John", "age": 30}'::jsonb, '{age}', '31', false) AS updated_json;

-- 10. JSON Containment
-- This checks if one JSON object contains another JSON object.
-- The query returns 't' (true) if the first JSON object contains the second.
SELECT '{"name": "John", "age": 30}'::jsonb @> '{"age": 30}'::jsonb AS is_contained;

-- 11. Deleting a Key from JSON
-- This deletes the key "age" from a JSON object.
SELECT my_json - 'age' AS json_without_age
FROM (SELECT '{"name": "John", "age": 30}'::jsonb AS my_json) AS data;

-- 12. JSONB vs. JSON
-- JSONB is a binary format, optimized for processing. Use JSONB for faster operations.
-- Here, we're comparing JSON and JSONB.
SELECT '{"name": "John", "age": 30}'::jsonb = '{"name": "John", "age": 30}'::json AS json_vs_jsonb;
