// 서버 접속 시 db 연결하고, db 에서 필요한 데이터 불러온다
var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbconfig = require('../db/database');
var connection = mysql.createConnection(dbconfig);
var bodyParser = require('body-parser');
const app = express();
const url = require('url');
app.use(bodyParser.json());
connection.connect();

router.post('/', function (req, res) {
    id = req.body.store_Id;
    connection.query('SELECT catId FROM categories WHERE storeId = ?', id, function (err, categories) {
        if (err) {
            throw err;
        }
        res.json(categories);
    });
});
router.post('/best', function (req, res) {
    id = req.body.store_Id;
    connection.query('SELECT * FROM top_seller WHERE storeId = ?', id, function (err, topseller) {
        if (err) {
            throw err;
        }
        res.json(topseller);
    });
});

router.post('/:stid/:cat', function (req, res) {
    const cat = req.body.category_name;
    var stid = req.body.store_Id;
    var sql = 'SELECT * FROM cafemenu WHERE _storeId = ? AND _cat = ?';
    connection.query(sql, [stid ,cat], function (err, items) {
        if (err) {
            throw err;
        }
        res.json(items);
    });
});

router.post('/menuDetail', function (req, res) {
    var stid = req.body.store_id;
    var cat = req.body.category_name;
    var menuid = req.body.menu_name;
    var sql = 'SELECT * FROM option WHERE _store = ? AND _cat = ? AND _name = ?' ;
    connection.query(sql, stid, cat, menuid, function (err, options) {
        if (err) throw err;
        res.send(options);
    });
    res.json(menuid);
});

router.post('/payment', function (req, res){
    var payInfo = {
        storeId : req.body.storeid,
        totalPrice: req.body.price,
        orderNum: req.body.num
    };
    var insertsql = "INSERT INTO order_list SET ?";   
    connection.query(insertsql, payInfo, function (err, order) {
        if (err) throw err;
        res.send("query_success");
        res.redirect('/kakaopay');
    }); 
});

router.post('/success', function (req, res){
    //주문한 물건 목록 디비에 따로 저장하려고 하였으나 생략
});

module.exports = router;
