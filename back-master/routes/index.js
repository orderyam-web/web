// 서버 접속 시 db 연결하고, db 에서 필요한 데이터 불러온다

var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbconfig = require('../db/database');
var connection = mysql.createConnection(dbconfig);
connection.connect();

router.get('/menu', function (req, res) {
    connection.query('SELECT * FROM cafemenu', function (err, favorite) {
        if (err) {
            throw err;
        }
        res.send(favorite);
    });
});

router.post('/payment/:t', function (req, res) {
    const t = req.params.t;
    var id = req.body.id;
    var num = req.body.num;
    var price = req.body.price;
    var detail = req.body.detail;
    if (t === "true") {
        var insert_sql = "INSERT INTO order_list SET ?";
        var insert_list = {
            id: "아메리카노외4잔",
            num: 4,
            price: 8000,
            detail: "없음"
        };
        connection.query(insert_sql, insert_list, function (err, order) {
            if (err) throw err;
            res.send("query_success");
        });
    } else {
        res.send("nothing");
    }
});

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

router.get('/api/:cat', function (req, res) {
    const cat = req.params.cat;
    var sql = 'SELECT * FROM cafemenu WHERE _cat = ?';
    connection.query(sql, cat, function (err, items) {
        if (err) {
            throw err;
        }
        res.send(items);
        console.log(item.length + "items found");
    });
});

router.get('/api/:cat/:id', function (req, res) {
    var cat = req.params.cat;
    var id = req.params.id;
    var sql = 'SELECT * FROM options_able where _cat = ? AND _id = ?';
    connection.query(sql, [cat, id], function (err, options) {
        if (err) throw err;
        res.send(options);
    });
});

module.exports = router;