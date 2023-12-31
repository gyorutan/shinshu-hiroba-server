const {
  signUp,
  logIn,
  checkUsername,
  checkStudentId,
} = require("../auth/auth.service");

exports.signUp = async (req, res) => {
  const body = await req.body;
  return await signUp(res, body);
};

exports.logIn = async (req, res) => {
  const body = await req.body;
  return await logIn(res, body);
};

exports.checkUsername = async (req, res) => {
  const { value } = await req.params;
  return await checkUsername(res, value);
};

exports.checkStudentId = async (req, res) => {
  const { value } = await req.params;
  return await checkStudentId(res, value);
};
