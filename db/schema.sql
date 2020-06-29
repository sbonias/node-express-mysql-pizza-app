DROP DATABASE IF EXISTS pizza_db;
CREATE DATABASE pizza_db;

USE pizza_db;

CREATE TABLE pizzas (
    id INTEGER AUTO_INCREMENT NOT NULL,
    pizza_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)  
)

-- To be used for JAWSDB
DROP DATABASE IF EXISTS pizza_db;
CREATE DATABASE pizza_db;

USE pizza_db;

CREATE TABLE pizzas (
    id INTEGER AUTO_INCREMENT NOT NULL,
    pizza_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    createdAT TIMESTAMP NOT NULL default current_timestamp,
    PRIMARY KEY(id)  
)