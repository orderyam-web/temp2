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

// storeId 를 body 숨겨서 보내고 받을 수 있으면 body?
// router.get('/:storeId', function (req, res) {
//     s_id = req.params.storeId;
//     connection.query('SELECT * FROM categories WHERE storeId = ?', s_id, function (err, categories) {
//         if (err) {
//             throw err;
//         }
//         res.send(categories);
//     });
// });

router.post('/payment', function (req, res) {

    //이 안의 정보를 db에 insert 혹은 res.send
    // var payInfo ={ //orderInfo 를 
    //     id = req.body.payInfo.id,
    //     price =req.body.payInfo.price,
    // };

//     console.log(req.body.price);
//    var insert_sql = "INSERT INTO order_list SET ?";
//    var insert_list = {
//         //db data here!

//    }
   //받은 req.body 중 카카오 결제에 필요한 파라미터만 리다이렉트
   res.redirect(url.format({
       pathname : "/kakaopay",
       query: {
           "name" : req.body.totalCount,
           "price": req.body.price
       }
   }));
//    connection.query(insert_sql, insert_list, function (err, order) {
//        if (err) throw err;
//        res.send("query_success");
//        res.redirect('/kakaopay');
//    });
   
});
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

module.exports = router;