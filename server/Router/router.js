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

//메인창
router.get("/", (req, res) => {
  res.render("index.ejs");
});

//목록보기
router.get("/board/list", (req, res) => {
  res.render("board_list.ejs", {
    data: list,
    //list, 라고 써도됨
  });
});

//글쓰기
router.get("/board/write", (req, res) => {
  res.render("board_create.ejs", {
    data: null,
  });
});

router.post("/board/write", (req, res) => {
  let board = { ...req.body };
  list.push(board);
  // res.redirect("/board/list");
  res.json({
    msg: "success",
  });
});

//상세보기
router.get("/board/view/:id", (req, res) => {
  var id = req.params.id;
  res.render("board_view.ejs", {
    id: id,
    data: list[id],
  });
});

//수정하기
router.get("/board/update/:id", (req, res) => {
  var id = req.params.id;
  res.render("board_create.ejs", {
    id: id,
    data: list[id],
  });
});

router.post("/board/update/:id", (req, res) => {
  var id = req.params.id;
  let board = { ...req.body };
  list[id].subject = board.subject;
  list[id].username = board.username;
  list[id].date = board.date;
  res.json({
    msg: "success",
  });
  // res.render("board_list.ejs", {
  //   data: list,
  // });
});

module.exports = router;

/* db
  table : board
  column
  번호 seq
  제목 title
  내용 content
  작성자 writer
  작성일 writeDate
  수정일 updateDate

  댓글 reply
   */
