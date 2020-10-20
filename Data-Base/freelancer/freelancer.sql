CREATE DATABASE east;

CREATE TABLE Freelancers (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
     FisrtName VARCHAR(20) ,
     LastName VARCHAR(20),
     Email VARCHAR(50)  ,
     password VARCHAR(100),
     Gender VARCHAR(10),
     Age int,
     City VARCHAR(20),
     Adresse VARCHAR(40),
     Field VARCHAR(20),
     CONSTRAINT EmaiUn UNIQUE (Email,LastName)
);

