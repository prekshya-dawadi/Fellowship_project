var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.send('prekshya'); directly sends the text to the browser.
  res.render('index', { name: 'Prekshya' });
});

router.get('/home', function(req, res, next){
  res.render('home');
})
module.exports = router;
