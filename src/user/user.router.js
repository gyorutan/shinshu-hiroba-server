const router = require("express").Router();
const { authGuard } = require("../middlewares/auth");
const { getUserProfile } = require("../user/user.controller");

router.get("/profile", authGuard, getUserProfile);

module.exports = router;
