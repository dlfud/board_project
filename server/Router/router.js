const express = require("express");
const router = express.Router();
const request = require("request");

// let list = [
//   {
//     subject: "안녕하세요", //글제목
//     username: "podo", //작성자
//     date: "2022-02-03", //날짜
//   },
//   {
//     subject: "안녕하세요2",
//     username: "podo2",
//     date: "2022-02-03",
//   },
//   {
//     subject: "안녕하세요3",
//     username: "podo3",
//     date: "2022-02-03",
//   },
//   {
//     subject: "안녕하세요4",
//     username: "podo4",
//     date: "2022-02-03",
//   },
//   {
//     subject: "안녕하세요5",
//     username: "podo5",
//     date: "2022-02-03",
//   },
// ];

//메인창
router.get("/", (req, res) => {
  res.render("index.ejs");
});

//목록보기
router.get("/board/list", (req, res) => {
  const boardListAPI = {
    url: "http://localhost:8082/board/list",
  };

  request(boardListAPI, function (err, response, body) {
    //console.log(body[0]); // 결과 받는 것을 String으로 받음
    res.render("board_list.ejs", {
      data: JSON.parse(body), // json으로 변환시켜줌
      //list, 라고 써도됨
    });
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
  const boardWriteAPI = {
    url: "http://localhost:8082/board/write",
    method: "POST",
    body: {
      subject: board.subject,
      userName: board.userName,
      content: board.content,
    },
    json: true,
  };
  request(boardWriteAPI, function (err, response, body) {
    if (body == "success") {
      res.json({
        msg: "success",
      });
    } else {
      console.log(err);
    }
  });
});

//상세보기
router.get("/board/detail/:id", (req, res) => {
  var id = req.params.id;
  const boardViewAPI = {
    url: "http://localhost:8082/board/detail/" + id,
  };
  request(boardViewAPI, function (err, response, body) {
    res.render("board_detail.ejs", {
      data: JSON.parse(body),
    });
  });
});

//수정하기
router.get("/board/update/:id", (req, res) => {
  var id = req.params.id;
  const boardUpdateAPI = {
    url: "http://localhost:8082/board/detail/" + id,
  };
  request(boardUpdateAPI, function (err, response, body) {
    res.render("board_create.ejs", {
      data: JSON.parse(body),
    });
  });
});

router.post("/board/update/:id", (req, res) => {
  var id = req.params.id;
  let board = { ...req.body };

  const boardUpdateAPI = {
    url: "http://localhost:8082/board/update/" + id,
    method: "POST",
    body: {
      subject: board.subject,
      userName: board.userName,
      content: board.content,
    },
    json: true,
  };
  request(boardUpdateAPI, function (err, response, body) {
    if (body == "success") {
      res.json({
        msg: "success",
      });
    } else {
      console.log(err);
    }
  });
  // res.render("board_list.ejs", {
  //   data: list,
  // });
});

module.exports = router;

/* db
  table : board
  column
  번호 id
  제목 subject
  내용 content
  작성자 user_name
  작성일 create_date
  수정일 update_date
*/
