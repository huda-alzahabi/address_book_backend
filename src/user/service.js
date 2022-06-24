const User = require("../../model/User");

async function getUsers() {
  return await User.find();
}

async function getById(id) {
  return await User.findById(id).populate("contacts");
}

async function addUser(body, hashPassword) {
  const { name, email } = body;

  const user = new User({
    name,
    email,
    password: hashPassword,
  });

  return await user.save();
}

async function getByEmail(email) {
  return await User.findOne({
    email,
  });
}

module.exports = {
  getUsers,
  getById,
  addUser,
  getByEmail,
};
