var express = require('express');
var router = express.Router();

var connection = require('../models/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  next();
});

router.get('/topic', function(req, res) {
  connection.query('SELECT * FROM `Topic`', function(err, res, flds) {
    console.log(res);
    console.log(flds);
  })
});

module.exports = router;
