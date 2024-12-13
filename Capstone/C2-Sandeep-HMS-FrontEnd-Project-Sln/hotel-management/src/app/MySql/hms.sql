CREATE DATABASE HMS;
USE HMS;
CREATE TABLE register (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(15) NOT NULL UNIQUE
);
DESCRIBE REGISTER;
INSERT INTO register (name, email, password, phone) VALUES
('Admin', 'admin@example.com', 'Admin@123', '1234567890'),
('Sandeep', 'asd@gmail.com', 'Sandy@630', '1234524314'),
('Sandeep', 'zxc@gmail.com', 'Dsa@1675', '2334421324');
SELECT* from register;

DELETE from register WHERE id=102;

SHOW TABLE STATUS LIKE 'register';
ALTER TABLE register AUTO_INCREMENT = 4;


CREATE TABLE booking (
    id VARCHAR(10) PRIMARY KEY, -- Custom ID with pattern (e.g., B0001)
    guest_name VARCHAR(100) NOT NULL,
    hotel VARCHAR(100) NOT NULL,
    room_number VARCHAR(10) NOT NULL,
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL,
    status VARCHAR(20) NOT NULL
);

INSERT INTO booking (id, guest_name, hotel, room_number, check_in_date, check_out_date, status) VALUES
('B0001', 'John Doe', 'Grand Plaza Hotel', '101', '2024-11-01', '2024-11-05', 'Confirmed'),
('B0002', 'Jane Smith', 'Ocean View Resort', '102', '2024-11-03', '2024-11-07', 'Confirmed'),
('B0003', 'Sandeep', 'Mountain Inn', '303', '2024-11-09', '2024-11-16', 'Confirmed');

SELECT * FROM booking;