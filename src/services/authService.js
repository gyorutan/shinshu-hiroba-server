const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUp = async (res, body) => {
  try {
    const { sei, mei, username, studentId, password } = body;
    const user = await User.findOne({ studentId });
    console.log(user);

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await User.create({
      sei,
      mei,
      fullname: `${sei}` + " " + `${mei}`,
      username,
      studentId,
      email: `${studentId}` + "@shinshu-u.ac.jp",
      password: hashedPassword,
    });

    console.log(createdUser);

    return res.json({ success: true, message: "회원가입에 성공하였습니다" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "서버 오류" });
  }
};

exports.logIn = async (res, body) => {
  try {
    const { studentId, password } = body;

    const user = await User.findOne({ studentId });

    console.log(user);

    if (!user) {
      return res.json({ success: false, message: "등록된 학번이 아닙니다" });
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      return res.json({
        success: false,
        message: "비밀번호가 일치하지 않습니다",
      });
    }

    const payload = {
      id: user.id,
      username: user.username,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.json({
      success: true,
      message: "로그인에 성공하였습니다",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "서버 오류" });
  }
};

exports.signOut = (req, res) => {
  return res.send("Good");
};

exports.checkUsername = async (res, value) => {
  const user = await User.findOne({ username: value });

  console.log(user);

  if (user) {
    return res.json({ success: false, result: "unavailable-username" });
  }

  return res.json({ success: true, result: "available-username" });
};

exports.checkStudentId = async (res, value) => {
  const user = await User.findOne({ studentId: value });

  console.log(user);

  if (user) {
    return res.json({ success: false, result: "unavailable-studentId" });
  }

  return res.json({ success: true, result: "available-studentId" });
};
