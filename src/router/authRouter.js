const router = require("express").Router();
const {
  signUp,
  logIn,
  signOut,
  checkUsername,
  checkStudentId,
} = require("../controllers/authController");

router.post("/signup", signUp);
router.post("/login", logIn);
router.get("/signout", signOut);
router.get("/username/:value", checkUsername);
router.get("/studentId/:value", checkStudentId);

module.exports = router;
