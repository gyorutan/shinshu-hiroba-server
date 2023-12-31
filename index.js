const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { connectDB } = require("./src/libs/database");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const authRouter = require("./src/auth/auth.router");
const userRouter = require("./src/user/user.router");
const postRouter = require("./src/post/post.router");

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/post", postRouter);

connectDB();

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT}`
  );
});

// healthCheck
app.get("/", async (req, res) => {
  res.json("서버 연결에 성공하였습니다");
});
