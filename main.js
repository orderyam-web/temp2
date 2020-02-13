const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");
const bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var kakaopayRouter = require('./pay/kakaopay');
var inicispayRouter = require('./pay/inicispay');

// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Network629!',
//   port : 3306,
//   database : 'orderyam'
// });

// connection.connect();

app.use(bodyParser.json());
app.use(express.static('build'));
app.use(bodyParser.urlencoded({ extended: false }));

/*app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'build', 'index.html'));
});
*/
// inderxRoute로 접근하기 전에 aws 서버로 먼저 연결

// app.use(awsRouter);

// 모든 request 중 경로가 '/'로 시작되는 요청은 indexRouter 가 담당
// indexRouter 는 routes/index.js 에서 db 접속 및 db 데이터 불러오는 역할

app.use('/', indexRouter);

app.use(kakaopayRouter);

app.use(inicispayRouter);

// app.post('/test', function (req, res) {
  // let sql = 'INSERT INTO kakaopay (cid, item_name, quantity, total_amount) VALUES (?, ?, ? ,?)';
  // let cid = "TC0ONETIME";
  // let item_name = "test";
  // let quantity = req.body.totalCount;
  // let total_amount = req.body.price;
  // let params = [cid, item_name, quantity, total_amount];
  // connection.query(sql, params, 
  //   (err, rows, fields) => {
  //     res.send('');
  //   }
  // );

  // var insert_sql = "INSERT INTO order_list SET ?";
  // var insert_list = {
  //      //db data here!

  // }
  //받은 req.body 중 카카오 결제에 필요한 파라미터만 리다이렉트
//   res.redirect(url.format({
//       pathname : "/kakaopay",
//       query: {
//           "name" : req.body.totalCount,
//           "price": req.body.price
//       }
//   }));
//   connection.query(insert_sql, insert_list, function (err, order) {
//       if (err) throw err;
//       res.send("query_success");
//       res.redirect('/kakaopay');
//   });
// })

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
