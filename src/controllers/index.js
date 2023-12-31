exports.healthCheck = async (req, res) => {
  res.status(200).json("서버 연결에 성공하였습니다");
};
