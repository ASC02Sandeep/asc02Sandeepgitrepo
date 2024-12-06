CREATE DATABASE TESTDB1;
CREATE TABLE USER (
    USER_ID INT NOT NULL,
    EMAIL VARCHAR(225)  NOT NULL,
    FIRST_NAME VARCHAR(225)  NOT NULL,
    LAST_NAME VARCHAR(225)  NOT NULL,
    PRIMARY KEY (USER_ID)
)

USE TESTDB1;
SELECT * FROM USER;

INSERT INTO USER (USER_ID, EMAIL, FIRST_NAME, LAST_NAME) VALUES (1, 'USER1@M.COM', 'JOHN', 'DOE');
INSERT INTO USER (USER_ID, EMAIL, FIRST_NAME, LAST_NAME) VALUES (2, 'USER2@M.COM', 'JANE', 'DOEY');

INSERT INTO USER (USER_ID, EMAIL, FIRST_NAME, LAST_NAME) VALUES (3, 'USER3@M.COM', 'JIM', 'DO'),
(4, 'JACK@M.COM', 'JACK', 'DOE'),
(5, 'JILL@M.COM', 'JILL', 'DOE');

show DATABASES;


