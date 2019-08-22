var express = require('express');
var router = express.Router();
var {newContact} = require('./../controllers/contact');

router.post('/', newContact);

module.exports = router;
