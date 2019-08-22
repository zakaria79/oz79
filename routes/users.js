var express = require('express');
var router = express.Router();
var {signin} = require('./../controllers/users');

router.post('/signin', signin);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
