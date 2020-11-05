CREATE TABLE Clients (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
     Username VARCHAR(20) ,
     Email VARCHAR(50)  ,
     password VARCHAR(100),
     Gender VARCHAR(10),
     Age int,
     City VARCHAR(20),
     Adresse VARCHAR(40),
     imgsrc VARCHAR(200),
     Provider VARCHAR(10),
     ProviderId VARCHAR(30),
     CONSTRAINT EmaiUn UNIQUE (Email)
);