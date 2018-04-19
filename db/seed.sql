\c contacts_db

DELETE FROM contacts;

INSERT INTO contacts (fname, lname, email, phone, img_url)
VALUES ('John', ' Doe', 'john.doe@coolmail.com', 2129999999, 'https://imgur.com/tWiKlRq');

INSERT INTO contacts (fname, lname, email, phone, img_url)
VALUES ('Jane', ' Doe', 'jane.doe@coolmail.com', 2126666666, 'https://imgur.com/UDqjU0N');
