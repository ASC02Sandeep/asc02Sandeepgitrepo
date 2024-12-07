SELECT * FROM ACTOR;
SELECT  CONCAT(UPPER(LEFT(FIRST_NAME,1)),LOWER(SUBSTRING(FIRST_NAME,2)),'.',UPPER(LEFT(LAST_NAME,1))) AS ACTOR_NAME FROM ACTOR;
SELECT FIRST_NAME, LAST_NAME FROM ACTOR;
SELECT COUNT(ACTOR_ID) AS TOTAL_ACTORS FROM ACTOR;
SELECT COUNT(*) AS TOTAL_ACTORS FROM ACTOR;
SELECT FIRST_NAME FROM ACTOR WHERE LAST_NAME='GUINESS';
SELECT FIRST_NAME, LAST_NAME FROM ACTOR ORDER BY FIRST_NAME ASC;
SELECT FIRST_NAME, LAST_NAME FROM ACTOR ORDER BY LAST_NAME DESC;
SELECT first_name, last_name FROM actor WHERE first_name LIKE 'A%';
SELECT first_name, last_name FROM actor WHERE LENGTH(first_name) = 4;
SELECT first_name, last_name FROM actor WHERE last_name LIKE '%y' AND LENGTH(last_name) = 5;
SELECT first_name, last_name FROM actor WHERE first_name = 'KENNETH' AND actor_id < 100;
SELECT FIRST_NAME, LAST_NAME FROM ACTOR WHERE FIRST_NAME='CUBA';
SELECT first_name, last_name FROM actor WHERE last_name IN (SELECT LAST_NAME FROM ACTOR WHERE FIRST_NAME='CUBA');
SELECT actor_id,first_name, last_name FROM actor WHERE actor_id IN (5, 15, 23, 32, 45);
SELECT actor_id,first_name, last_name FROM actor WHERE actor_id NOT IN (1, 3, 7,4);
SELECT first_name, last_name FROM actor WHERE last_name IN ('OLIVIER', 'ALLEN', 'BIRCH') ORDER BY actor_id ASC;
SELECT first_name, last_name FROM actor WHERE first_name = 'KENNETH' AND actor_id < 100 AND (last_name LIKE '%I' OR last_name LIKE '%W');
SELECT COUNT(DISTINCT first_name) FROM actor;
SELECT COUNT(*) FROM actor WHERE first_name = 'NICK';
SELECT COUNT(*) FROM actor WHERE actor_id BETWEEN 1 AND 5;
SELECT COUNT(*) FROM actor WHERE actor_id NOT BETWEEN 1 AND 5;
SELECT COUNT(*) FROM actor WHERE first_name LIKE 'A%';
SELECT UPPER(first_name) AS first_name_upper, last_name FROM actor;





-- DATE TIME FUNCTIONS
SELECT LAST_UPDATE FROM ACTOR;
SELECT LAST_UPDATE, DATE_FORMAT(LAST_UPDATE, '%m/%d/%y') FROM ACTOR;