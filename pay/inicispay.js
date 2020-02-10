var express = require('express');
const cors = require('cors');
const router = express.Router();

router.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// router.get('/kakaopay', cors(), (req, res) => { res.send('cors!') });

router.get('/inicispay', function (req, res) {
    //자바
    res.redirect('http://localhost:8080/local_inicis/INIStdPayRequest.jsp');
});

module.exports = router;
