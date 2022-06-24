const { addContact, getContactsByUserId } = require("./service");
const Contact = require("../../model/Contact");
const User = require("../../model/User");

async function add(req, res) {
  try {
    const newContact = await addContact(req.body);
    console.log("newContact =>", newContact);

    const updateUser = await User.updateOne(
      {
        _id: newContact.user,
      },
      {
        $push: {
          contacts: newContact._id,
        },
      }
    );
    console.log("updateUser =>", updateUser);

    return res.status(200).send(newContact); // 200
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
async function get(req, res) {
  try {
    console.log(req.query);

    if (req.query.id) {
      const id = req.query.id;
      const result = await getContactsByUserId(id);
      console.log("result of specific user =>", result);
      return res.send(result);
    }
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(req, res) {
  try {
    const contact = await Contact.findOne({ _id: req.query.id });
    if (!contact) console.log(404);

    const deleteResult = await contact.remove();

    await User.updateOne(
      { _id: contact.user },
      { $pull: { contacts: contact._id } }
    );

    return res.send("contact removed");
  } catch (error) {
    console.log(error);
  }
}

async function updateContact(req, res) {
  try {
    const contact = await Contact.findByIdAndUpdate(
      { _id: req.query.id },
      {
        $set: {
          full_name: req.body.full_name,
          email: req.body.email,
          phone: req.body.phone_number,
          relationship_status: req.body.relationship_status,
          location: req.body.location,
          user: req.body.user,
        },
      }
    );
    return res.send(contact);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  add,
  get,
  removeContact,
  updateContact,
};
