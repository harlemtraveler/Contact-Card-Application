const contactsRouter = require('express').Router();
const contactsController = require('../controllers/contactsController');
const contactsViewController = require('../controllers/contactsViewController');

function sendError(err, req, res, next) {
  console.log('I send errors');
  res.status(500).json({
    status: 'error',
    messgae: err.message
  });
};

contactsRouter.route('/')
.get(contactsController.getAll, contactsViewController.sendContacts, sendError)
.post(contactsController.create, contactsViewController.sendCreateContact)

contactsRouter.route('/new')
.get(contactsViewController.sendNewContact, contactsViewController.sendCreateContact)

// contactsRouter.route('/message')
// .get(contactsViewController.sendNewText,)
// .post(contactsController.text, contactsViewController.sendContacts)

contactsRouter.route('/:id')
.get(contactsController.getOne, contactsViewController.sendOneContact, sendError)

contactsRouter.route('/:id/edit')
.get(contactsController.getOne, contactsController.update, contactsViewController.sendUpdateContact)

module.exports = contactsRouter;
