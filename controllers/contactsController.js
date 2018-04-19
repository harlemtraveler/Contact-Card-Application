const contactsDb = require('../models/contacts.js');

function getAll(req, res, next) {
  console.log('I get all contacts');
  contactsDb.getAllContacts()
    .then(data => {
      res.locals.contacts = data;
      next();
      console.log(res.locals.contacts);
    }).catch(err => {
      next(err);
    });
};

module.exports = {
  getAll: getAll
};
