const { getUserProfile } = require("../user/user.service");

exports.getUserProfile = async (req, res) => {
  const userId = req.user.id;
  return await getUserProfile(res, userId);
};
