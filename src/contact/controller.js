const { addContact } = require("./service");
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

module.exports = {
  add,
};
