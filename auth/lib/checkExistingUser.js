const { User } = require("../../models");

module.exports = async ({ username }) => {
  try {
    const existingUser = await User.findOne({ username }).exec();
    return existingUser;
  } catch (error) {
    throw error;
  }
};
