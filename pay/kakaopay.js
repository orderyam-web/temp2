var express = require('express');
const request = require('request');
const cors = require('cors');
const router = express.Router();
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(express.static('build'));
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({ extended: false }));

router.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));

// router.get('/kakaopay', cors(), (req, res) => { res.send('cors!') });


router.all('/kakaopay', function (req, res) {
    var val = req.body;
    //console.log(typeof(req.body.user['price']));
    //console.log(req.body.user);
    console.log(val.user['price']);
    var price = val.user['price'];
    var totalCount = val.user['totalCount'];
    
    var total_amount=0;

    var option = {
        method: "POST",
        uri: 'https://kapi.kakao.com/v1/payment/ready',
        form: {
            cid: "TC0ONETIME",
            partner_order_id: "partner_order_id",
            partner_user_id: "partner_user_id",
            item_name: '초코파이',
            quantity: totalCount,
            total_amount: val.user['price'],
            vat_amount: total_amount%10,
            tax_free_amount: 0,

            approval_url: "http://localhost:5000/kakaopay/auth",
            fail_url: "http://localhost:5000/kakaopay/fail",
            cancel_url: "http://localhost:5000/kakaopay/cancel",
        },
        headers: {
            'Authorization': 'KakaoAK a1355d29b2de8657244d9548bf1a4ea9',
            'Content-Type': 'application/json;charset=UTF-8', //'application/x-www-form-urlencoded;charset=utf-8'
        },
    };

    
    console.log(option);

    request(option, function (err, response) {
        if (err) throw err;

        var jsonObject = JSON.parse(response.body); // string 타입 JSON 타입으로 변환
        console.log(jsonObject); // 

        tid = jsonObject.tid;
        var next_redirect_pc_url = jsonObject.next_redirect_pc_url;
        //var next_redirect_mobile_url = jsonObject.next_redirect_mobile_url
        //console.log(next_redirect_pc_url);
        //var jsonDatas = JSON.stringify(val);
        res.json(next_redirect_pc_url);
        
    });
    //console.log(next_redirect_pc_url);
});

router.get('/kakaopay/auth', function (req, res) {
    var option = {
        method: "POST",
        uri: 'https://kapi.kakao.com/v1/payment/approve',
        form: {
            cid: "TC0ONETIME",
            tid: tid,
            partner_order_id: "partner_order_id",
            partner_user_id: "partner_user_id",
            pg_token: req.query.pg_token,
        },
        headers: {
            'Authorization': 'KakaoAK a1355d29b2de8657244d9548bf1a4ea9',
            'Content-Type': 'application/json;charset=UTF-8', //'application/x-www-form-urlencoded;charset=utf-8'
        },
    };

    request(option, function (err, response) {
        if (err) throw err;
        res.redirect('/kakaopay/success');
    });
});

router.get('/kakaopay/success', function(req, res){
    res.redirect('http://localhost:3000/receipt')
});

router.get('/kakaopay/fail', function(req, res){
    res.send('결제 실패입니다. 다시 결제 요청해주세요.');
});

router.get('/kakaopay/cancel', function(req, res){
    res.send('결제가 취소되었습니다.');
});

module.exports = router;
