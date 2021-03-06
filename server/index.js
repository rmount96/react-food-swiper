require("dotenv").config();

const http = require("http");
const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const multer = require('multer');
const path = require('path');

const {
  userRouter,
  memberRouter,
  cardRouter,
  recipeRouter,
  listRouter
} = require("./routers");

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 4000;
const HOST = "0.0.0.0";
const logger = morgan("tiny");

app.use(
  session({
    store: new FileStore(),
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
    rolling: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

app.use(logger);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/members-only", memberRouter);
app.use("/api/recipe-card", cardRouter);
app.use("/api/recipes", recipeRouter);
app.use("/api/list", listRouter);
app.get("/api/status", (req, res) => {
  if (req.session.user) {
    res.status(200).send("ok")
  } else {
    res.status(400).send("not ok")
  }
})
// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});
server.listen(PORT, HOST, () => {
  console.log(`Listening at port ${PORT}`);
});
