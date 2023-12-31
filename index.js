const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { connectDB } = require("./src/database");
require("dotenv").config();

const router = require("./src/router/index");
const userRouter = require("./src/router/userRouter");
const authRouter = require("./src/router/authRouter");
const postRouter = require("./src/router/postRouter");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/", router);
app.use("/auth", authRouter);
app.use("/post", postRouter);
app.use("/user", userRouter);

connectDB();

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on PORT : http://localhost:${process.env.PORT}`
  );
});
