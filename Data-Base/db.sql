CREATE DATABASE east;

CREATE TABLE users (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
     Field VARCHAR(20),
     FisrtName VARCHAR(20),
     LastName VARCHAR(20),
     Email VARCHAR(20),
     Gender VARCHAR(10),
     Age int,
    City VARCHAR(20),
    Adresse VARCHAR(20)
)

CREATE TABLE serviceprovider (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
     FisrtName VARCHAR(20),
     LastName VARCHAR(20),
     UserName VARCHAR(20),
     Email VARCHAR(20),
     Gender VARCHAR(10),
     Age int,
    City VARCHAR(20),
    Adresse VARCHAR(20),
)

