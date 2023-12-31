const { getUserProfile } = require("../user/user.service");

exports.getUserProfile = async (req, res) => {
  console.log(req.user);
  const userId = req.user.id;
  return await getUserProfile(res, userId);
};
