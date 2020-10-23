CREATE TABLE Jobs (
     id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
     client_id int,
     jobTitle VARCHAR(20) ,
     fields VARCHAR(50)  ,
     imgUrl VARCHAR(200),
     jobDescription VARCHAR(1000),
     budget int,
);