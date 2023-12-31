const {
  signUp,
  logIn,
  signOut,
  checkUsername,
  checkStudentId,
} = require("../services/authService");

exports.signUp = async (req, res) => {
  const body = await req.body;
  return await signUp(res, body);
};

exports.logIn = async (req, res) => {
  const body = await req.body;
  return logIn(res, body);
};

exports.signOut = (req, res) => {
  return signOut(req, res);
};

exports.checkUsername = async (req, res) => {
  const { value } = await req.params;
  return await checkUsername(res, value);
};

exports.checkStudentId = async (req, res) => {
  const { value } = await req.params;
  return await checkStudentId(res, value);
};
