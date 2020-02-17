var express = require('express');
const request = require('request');
const cors = require('cors');
const router = express.Router();
const bodyParser = require('body-parser');
var app = express();
router.use(bodyParser.json());
router.use(express.static('build'));
//app.use(bodyParser.json({limit: '100mb'}));
router.use(bodyParser.urlencoded({ extended: true }));

router.use(cors());



// router.get('/data', function(req, res){
//     console.log(req.query);
//     // var price = req.params.user['price'];
//     // var count = req.params.user['totalCount'];

//     // console.log(price);
//     // console.log(count);

//     res.redirect(`http://localhost:5000/kakaopay?price=${price}`)
// });



router.get('/kakaopay', function (req, res) {
    // var price = req.body.user['price'];
    // var totalCount = req.body.user['totalCount'];

    console.log(req.query);
    total_amount = 0;

    var option = {
        method: "POST",
        uri: 'https://kapi.kakao.com/v1/payment/ready',
        form: {
            cid: "TC0ONETIME",
            partner_order_id: "partner_order_id",
            partner_user_id: "partner_user_id",
            item_name: '초코파이',
            quantity: 1,
            total_amount: req.query.price,
            vat_amount: 0,
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

    request(option, function (err, response) {
        if (err) throw err;

        var jsonObject = JSON.parse(response.body); // string 타입 JSON 타입으로 변환
        
        // console.log(jsonObject);
        tid = jsonObject.tid;
        var next_redirect_pc_url = jsonObject.next_redirect_pc_url;
        //var next_redirect_mobile_url = jsonObject.next_redirect_mobile_url
        console.log(next_redirect_pc_url);
        if(next_redirect_pc_url != ' '){
            res.redirect(next_redirect_pc_url);
        }
    });
});

https://mockup-pg-web.kakao.com/v1/8ffbf455d36d0828358455a0fce7e69c745027e6de729a79bb8d074c5b57693c/info
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
