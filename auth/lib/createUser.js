const { User } = require("../../models");
const { hash } = require("./password");

module.exports = async ({ username, password }) => {
  try {
    const newUser = await User.create({
      username,
      password: hash(password),
    });

    return newUser;
  } catch (error) {
    throw error;
  }
};
