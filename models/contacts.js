const db = require('../config/connection');

function getAllContacts(){
  const queryPromise = db.any(`
  SELECT *
  FROM contacts
    `)

  return queryPromise;
}

function getOneContact(id) {
  const queryPromise = db.one(`
    SELECT *
    FROM contacts
    WHERE id = $1
    `, id
  );
  return queryPromise;
}

function createContact(contact) {
  const queryPromise = db.one(`
    INSERT INTO contacts (fname, lname, email, phone, img_url)
    VALUES ($/fname/, $/lname/, $/email/, $/phone/, $/img_url/)
    RETURNING *
    `, contact
  );
  return queryPromise;
}

function updateContact(contact) {
  const queryPromise = db.one(`
    UPDATE contacts
    SET fname = $/fname/, lname = $/lname/, email = $/email/, phone = $/phone/, img_url = $/img_url
    WHERE id = $/id/
    RETURNING *
    `, contact
  );
  return queryPromise;
}

function destroyContact(id) {
  const queryPromise = db.one(`
    DELETE FROM contacts WHERE id = $1
    `, id
  );
  return queryPromise;
}

module.exports = {
  getAllContacts: getAllContacts,
  getOneContact: getOneContact,
  createContact: createContact,
  updateContact: updateContact,
  destroyContact: destroyContact
};
