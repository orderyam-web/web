var express = require('express');
var router = express.Router();


var AWS = require('aws-sdk');
// AWS.config.region = '';
var awsConfig = ({
    "accessKeyId": "",
    "secretAccessKey": "",
    "region": "",
    // "endpoint": "",
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