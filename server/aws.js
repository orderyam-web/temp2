var express = require('express');
var router = express.Router();


var AWS = require('aws-sdk');
// AWS.config.region = 'ap-northeast-2';
var awsConfig = ({
    "accessKeyId": "AKIARBASV2NWAOUCWFPA",
    "secretAccessKey": "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",
    "region": "ap-northeast-2",
    // "endpoint": "http://13.125.193.176:3000",
});

var ec2 = new AWS.EC2(awsConfig);

// router.get('/', function (req, res) {
//     res.send('aws-ec2 connected');
// });

router.get('/ec2', function (req, res) {
    ec2.describeInstances({}, function(err, data) {
        res.json(data);
    });
});

module.exports = router;