CREATE TABLE Applications (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
       PersonID INT ,
       ApplicationContent  VARCHAR(400),
       Postid INT,
      CONSTRAINT EmaiUn UNIQUE (id)
);
