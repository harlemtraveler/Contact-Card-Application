function sendContacts(req, res) {
  res.render('contacts/index', {
    contacts: res.locals.contact
  })
}

function sendOneContact(req, res) {
  console.log(res.locals.contact);
  res.render('contacts/show', {
    contacts: res.locals.contact
  })
}

function sendCreateContact(req, res) {
  contact: res.locals.newContact
  res.redirect(`/contacts`);
}

function sendNewContact(req, res) {
  res.render('contacts/new')
}

function sendUpdateContact(req, res) {
  res.render('contacts/edit', {
    contact: res.locals.contact
  })
}

module.exports = {
  sendContacts,
  sendOneContact,
  sendCreateContact,
  sendNewContact,
  sendUpdateContact
};
