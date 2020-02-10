// 서버 접속 시 db 연결하고, db 에서 필요한 데이터 불러온다
var express = require('express');
var router = express.Router();

// var mysql = require('mysql');
// var dbconfig = require('../db/database');
// var connection = mysql.createConnection(dbconfig);
var bodyParser = require('body-parser');
const app = express();
const url = require('url');
// app.use(bodyParser().json());
// connection.connect();


router.get('/', function (req, res) {
    connection.query('SELECT * FROM cafemenu', function (err, menu) {
        if (err) {
            throw err;
        }
        res.send(menu);
    });
});

// //대공사
// router.post('/payment', function (req, res) {
//     //카카오 페이라면 name, price 를 post로 send
//     //이니페이라면 ..?
//     var orderInfo1 = req.body.dbInfo;
//     var orderInfo2 = req.body.payInfo;
//     //이 안의 정보를 db에 insert 혹은 res.send
//     var items ={ //orderInfo 를 
//         id = "store12345",
//         price ="26000",
//     };
//    var insert_sql = "INSERT INTO order_list SET ?";
//    var insert_list = {
//         //db data here!   
//    }
//    //받은 req.body 중 카카오 결제에 필요한 파라미터만 리다이렉트
//    res.redirect(url.format({
//        pathname : "/kakaopay",
//        query: {
//            "name" : req.body.name,
//            "price": req.body.name
//        }
//    }));
//    connection.query(insert_sql, insert_list, function (err, order) {
//        if (err) throw err;
//        res.send("query_success");
//        res.redirect('/kakaopay');
//    });
   
// });

// API
/*
app.get('/api/top3menu', function(req,res){
    connection.query('SELECT * FROM top_list', function(err, items){
        if(err) {
          throw err;
        }
        if(order.affectedRows > 0){
          res.send(items);
      }
    });
});
*/

// router.get('/api/:cat', function (req, res) {
//     const cat = req.params.cat;
//     // var sql = 'SELECT * FROM cafemenu WHERE _cat = ?';
//     connection.query(sql, cat, function (err, items) {
//         if (err) {
//             throw err;
//         }
//         res.send(items);
//         console.log(item.length + "items found");
//     });
// });

// router.get('/api/:cat/:id', function (req, res) {
//     var cat = req.params.cat;
//     var id = req.params.id;
//     var sql = 'SELECT * FROM options_able where _cat = ? AND _id = ?';
//     connection.query(sql, [cat, id], function (err, options) {
//         if (err) throw err;
//         res.send(options);
//     });
// });

// module.exports = router;