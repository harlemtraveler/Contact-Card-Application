const contactsDb = require('../models/contacts.js');

function getAll(req, res, next) {
  contactsDb.getAllContacts()
    .then(data => {
      res.locals.contact = data;
      next();
    }).catch(err => {
      next(err);
    });
}

function getOne(req, res, next) {
  contactsDb.getOneContact(req.params.id)
    .then(data => {
      res.locals.contact = data;
      next();
    }).catch(err => {
      next(err);
    });
}

function create(req, res, next) {
  contactsDb.createContact(req.body)
    .then(data => {
      res.locals.newContact = data;
      next();
    }).catch(err => {
      next(err);
    });
}

function update(req, res) {
  req.body.id = req.params.id;
  contactsDb.updateContact(req.body)
    .then(data => {
      res.locals.contact = data;
      next();
    }).catch(err => {
      next(err);
    });
}

function destroy(req, res) {
  contactsDb.destroyContact(req.params.id)
    .then(() => {
      res.redirect('/contacts');
    }).catch(err => {
      next(err);
    });
}

module.exports = {
  getAll: getAll,
  getOne: getOne,
  create: create,
  update: update,
  destroy: destroy
};
