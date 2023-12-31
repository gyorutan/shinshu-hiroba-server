const router = require("express").Router();
const { healthCheck } = require("../controllers");

router.get("/", healthCheck);

module.exports = router;
