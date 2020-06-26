DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burger_db;

USE burger_db;

DROP TABLE IF EXISTS burgers;
CREATE table burgers(
    id INT AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(255),
    devoured BOOLEAN DEFAULT FALSE
);
