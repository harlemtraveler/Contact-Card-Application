const db = require('../config/connection');

function getAllContacts(){
  const contactPromise = db.any(`
  SELECT *
  FROM contacts
    `)

  return contactPromise;
};

module.exports = {
  getAllContacts: getAllContacts
};
