const express = require("express");
const router = express.Router();

let list = [
  {
    subject: "안녕하세요", //글제목
    username: "podo", //작성자
    date: "2022-02-03", //날짜
  },
  {
    subject: "안녕하세요2",
    username: "podo2",
    date: "2022-02-03",
  },
  {
    subject: "안녕하세요3",
    username: "podo3",
    date: "2022-02-03",
  },
  {
    subject: "안녕하세요4",
    username: "podo4",
    date: "2022-02-03",
  },
  {
    subject: "안녕하세요5",
    username: "podo5",
    date: "2022-02-03",
  },
];

router.get("/", (req, res) => {
  res.render("index.ejs");
});

router.get("/board/list", (req, res) => {
  res.render("board_list.ejs", {
    content: list,
    //list, 라고 써도됨
  });
});

router.get("/board/write", (req, res) => {
  res.render("board_create.ejs");
});

router.post("/board/write", (req, res) => {
  let board = { ...req.body };
  console.log(list, board);
  list.push(board);
  console.log(list);
  res.redirect("/board/list");
});

router.get("/board/view", (req, res) => {
  res.render("board_view.ejs");
});

module.exports = router;
