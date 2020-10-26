CREATE TABLE Jobs (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
     client_id int,
     jobTitle VARCHAR(30) ,
     fields VARCHAR(50)  ,
     imgUrl VARCHAR(300),
     jobDescription VARCHAR(1000),
     budget int,
     CONSTRAINT Idun UNIQUE (id)
);