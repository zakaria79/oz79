var express = require('express');
var router = express.Router();
var {signin, user, logout} = require('./../controllers/users');
var User = require('./../models/user');

router.get('/truc-user', async (req, res, next) => {
  let myuser = await User.findOne({firstname: 'zakaria2'});
  myuser.firstname = 'zakaria';
  myuser = await myuser.save();
  res.json(myuser);
});

router.get('/user', user);
router.post('/signin', signin);
router.get('/logout', logout);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
