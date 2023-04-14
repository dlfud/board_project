const express = require("express");
const app = express();
const router = require("./Router/router");

const nunjucks = require("nunjucks");

app.set("view engine", "html");
nunjucks.configure("./server/views", {
  express: app, // app 객체 연결
  watch: true, // true - HTML 파일이 변경될 때 템플릿 엔진을 다시 렌더링함
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
