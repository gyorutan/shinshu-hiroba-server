const Post = require("../models/Post");

exports.createPost = async (res, user, body) => {
  try {
    const writerId = user.id;
    const writer = user.username;
    if (!writerId) {
      return res.json({ success: false, message: "유효하지 않은 접근입니다" });
    }
    const { title, content, imageUrl } = body;
    const createdPost = await Post.create({
      writerId,
      writer,
      title,
      content,
      imageUrl,
    });
    return res.json({
      success: true,
      message: "글을 저장하였습니다",
      createdPost,
    });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "글을 저장하지 못했습니다" });
  }
};

exports.fetchAllPosts = async (res) => {
  const posts = await Post.find({}).sort({ createdAt: -1 });
  return res.json({ posts });
};

exports.fetchPostDetail = async (res, id) => {
  const post = await Post.findById({ _id: id });
  return res.json({ post });
};

exports.uploadImages = async (res, file) => {
  return res.json({
    success: true,
    file,
  });
};
