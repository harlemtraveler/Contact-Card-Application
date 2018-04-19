function sendContacts(req, res) {
  res.render('show', {
    contacts: res.local.contacts
  });
};

module.exports = {
  sendContacts: sendContacts
};
