CREATE DATABASE east;

CREATE TABLE Freelancers (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
     FirstName VARCHAR(20) ,
     LastName VARCHAR(20),
     Email VARCHAR(50)  ,
     Password VARCHAR(100),
     Gender VARCHAR(10),
     Age int,
     City VARCHAR(20),
     Adresse VARCHAR(40),
     Field VARCHAR(20),
     CONSTRAINT EmaiUn UNIQUE (Email,LastName)
);