const router = require("express").Router();
const { create, remove, fetch, update } = require("../post/post.controller");
const { authGuard } = require("../middlewares/auth");

router.post("/create", authGuard, create);
router.post("/remove", authGuard, remove);
router.get("/fetch", fetch);
router.get("/update", authGuard, update);

module.exports = router;