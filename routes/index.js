var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var datetime = new Date();

  res.render('index', { title: 'My-APP' , currentTime : datetime });
});

module.exports = router;
