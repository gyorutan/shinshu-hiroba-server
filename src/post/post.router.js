const router = require("express").Router();
const {
  createPost,
  fetchAllPosts,
  fetchPostDetail,
  uploadImages,
  fetch,
  update,
} = require("../post/post.controller");
const { authGuard } = require("../middlewares/auth");
const { upload } = require("../libs/s3");

router.post("/", authGuard, createPost);
router.get("/", fetchAllPosts);
router.get("/:id", fetchPostDetail);
router.post("/image", upload.single("image"), authGuard, uploadImages);
// router.post("/remove", authGuard, remove);
// router.get("/fetch", fetch);
// router.get("/update", authGuard, update);

module.exports = router;
