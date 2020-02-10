const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");
var awsRouter = require('./server/aws');
var indexRouter = require('./routes/index');
var kakaopayRouter = require('./pay/kakaopay');
var inicispayRouter = require('./pay/inicispay');

app.use(express.static('build'));

/*app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'build', 'index.html'));
});
*/
// inderxRoute로 접근하기 전에 aws 서버로 먼저 연결

// app.use(awsRouter);

// 모든 request 중 경로가 '/'로 시작되는 요청은 indexRouter 가 담당
// indexRouter 는 routes/index.js 에서 db 접속 및 db 데이터 불러오는 역할

// app.use('/', indexRouter);

app.use(kakaopayRouter);

app.use(inicispayRouter);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
