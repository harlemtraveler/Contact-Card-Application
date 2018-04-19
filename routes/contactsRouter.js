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
.get(contactsController.getAll, contactsViewController.sendContacts, sendError);

module.exports = contactsRouter;
