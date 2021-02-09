CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(30),
    devoured boolean
)