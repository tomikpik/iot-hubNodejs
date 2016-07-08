var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('temp', { message: 'message' });
  //console.log(res);
  res.send("<h1>message</h1>");

});

module.exports = router;
