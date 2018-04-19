\c contacts_db

DROP TABLE IF EXISTS contacts;

CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  fname VARCHAR(255),
  lname VARCHAR(255),
  email VARCHAR(255),
  phone INTEGER,
  img_url TEXT
);
