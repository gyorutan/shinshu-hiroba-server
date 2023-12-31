const jwt = require("jsonwebtoken");

exports.authGuard = (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;
    const token = bearerToken.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    if (!user) {
      return res.json({ success: false, message: "Unauthorized" });
    }
    req.user = user;
    next();
  } catch (error) {
    res.clearCookie("user_token");
    return res.json({ success: false, message: "Unauthorized" });
  }
};
