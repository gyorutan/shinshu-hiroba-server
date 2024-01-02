const {
  createPost,
  fetchAllPosts,
  fetchPostDetail,
  uploadImages,
} = require("./post.service");

exports.createPost = async (req, res) => {
  const user = await req.user;
  const body = await req.body;
  return await createPost(res, user, body);
};

exports.fetchAllPosts = async (req, res) => {
  return await fetchAllPosts(res);
};

exports.fetchPostDetail = async (req, res) => {
  const { id } = req.params;
  return await fetchPostDetail(res, id);
};

exports.uploadImages = async (req, res) => {
  const file = await req.file;
  return await uploadImages(res, file);
};

exports.remove = () => {};
exports.fetch = () => {};
exports.update = () => {};
