const router = require("express").Router();
const { authGuard } = require("../middlewares/auth");
const { getUserProfile } = require("../controllers/userController");

router.get("/profile", authGuard, getUserProfile);

module.exports = router;
