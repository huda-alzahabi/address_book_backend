const Contact = require("../../model/Contact");

async function addContact(body) {
  const {
    full_name,
    email,
    phone_number,
    relationship_status,
    location,
    user,
  } = body;

  const contact = new Contact({
    full_name,
    email,
    phone_number,
    relationship_status,
    location,
    user,
  });

  return await contact.save();
}

async function getContactsByUserId(user_id) {
  return await Contact.find({ user: user_id });
}

module.exports = {
  addContact,
  getContactsByUserId,
};
