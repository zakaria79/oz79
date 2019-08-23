var express = require('express');
var router = express.Router();
var {signin, user, logout} = require('./../controllers/users');
var User = require('./../models/user');
var bcrypt = require('bcrypt');
const {check, body} = require('express-validator');

router.get('/user', user);
router.post(
  '/signin',
  [
    check('login')
      .isLength({min: 5})
      .withMessage('Veuillez saisir un identifiant valide')
      .custom((value, {req}) => {
        return User.findOne({login: value}).then(userDoc => {
          if (!userDoc) {
            // ON PEUT AUSSI VERIFIER LE BCRYPT
            // ET SUPPRIMER LA VALIDATION DU CONTROLLER
            return Promise.reject('Indentifiant introuvable');
          }
          return true;
        });
        // if (value === 'truc') {
        //   throw new Error('Indentifiant non valide');
        // }
        return true;
      }),
    body('password', 'Veuillez saisir un mot de passe valide').isLength({
      min: 5,
    }),
  ],
  signin,
);
router.get('/logout', logout);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
