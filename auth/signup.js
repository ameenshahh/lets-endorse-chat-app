const Responder = require("../shared/responder");
const checkExistingUser = require("./lib/checkExistingUser");
const createUser = require("./lib/createUser");

module.exports = async (req, res) => {
  const responder = new Responder(res);

  let { username, password } = req.body;

  try {
    // Checking for existing user
    const existingUser = await checkExistingUser({ username });

    if (existingUser) {
      responder.error({
        message: "User already exists",
      });
    }

    let createdUser = await createUser({ username, password });

    if (createdUser) {
      responder.success({
        message: "Sign up successful",
        payload: createdUser,
      });
    }
  } catch (error) {
    responder.error({
      message: error.message,
    });
  }
};
