const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const {  
  cityData} = require('./prov')
  const countryData = require('./data')

const app = express();
app.use(bodyParser.json());
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "content-type");
  next();
});
app.get("/", (req, res) => {
  //把数据库的密码，账号，地址，端口，表格都连接上！！
  const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "wasd723435",
    port: "3306",
    database: "test",
  });

  const sql = `insert into books(id, bookname, size) values(1, "server1", 600),(2, "server2", 700);`

  connection.query(sql, (err, rest) => {
    res.json({ ok: "ok", data: rest,proData });
  });
  connection.end(); //结束连接！！！不能一直连着！！
});
// app.get("/test", (req, res) => {
//   res.json({
//     ok: 1,
//     data: proData,
//     msg: "success",
//   });
// });
app.get("/getChildren",(req,res)=>{
  const {id} = req.query;
  const data= cityData.concat(countryData).filter(v=> v.parentid === Number(id));
  res.json({
    ok: 1,
    data: data,
    msg: "success",
  });
})
app.listen(8084, () => {
  console.log("the server is start!");
});