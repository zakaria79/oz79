const User = require('./../models/user');
const {userAdmin} = require('./../config/data');
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');

exports.user = (req, res, next) => {
  if (req.session.user) {
    res.json(req.session.user);
  }
  res.json({error: true, message: 'Utilisateur non connecté'});
};

exports.signin = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({error: true, errors: errors.array()});
  }

  if (req.session.user && req.session.user.isLoggedIn) {
    res.json(req.session.user);
  }
  const {login, password, rememberme} = req.body;

  if (!login || !password) {
    res.json({error: true, message: 'Champs vides'});
  }

  let myuser = await User.findOne({login});

  if (!myuser) {
    res.json({error: true, message: 'Identifiants incorectes'});
  }

  const comparison = bcrypt.compare(password, myuser.password);

  if (!comparison) {
    res.json({error: true, message: 'Identifiants incorectes'});
  }

  myuser.isLoggedIn = true;
  req.session.user = myuser;
  res.json(myuser);
};

exports.logout = (req, res, next) => {
  req.session.destroy(err => {
    if (err) {
      res.json({error: true});
    }
    res.json({error: false});
  });
};
