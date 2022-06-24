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

module.exports = {
  addContact,
};
