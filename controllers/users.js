const User = require('./../models/user');
const {userAdmin} = require('./../config/data');

exports.user = (req, res, next) => {
  if (req.session.user) {
    res.json(req.session.user);
  }
  res.json({error: true, message: 'Utilisateur non connecté'});
};

exports.signin = (req, res, next) => {
  if (req.session.user && req.session.user.isLoggedIn) {
    res.json(req.session.user);
  }
  const {login, password, rememberme} = req.body;

  if (!login || !password) {
    res.json({error: true, message: 'Champs vides'});
  }

  User.find()
    .then(users => {
      if (!users.length) {
        const user = new User(userAdmin);
        user
          .save()
          .then(result => {
            if (result.login !== login || result.password !== password) {
              res.json({
                error: true,
                message: 'Identifiant ou mot de passe incorecte',
              });
            }
            if (rememberme) {
              // ENREGISTRER LA SESSION
            }
            res.json(result);
          })
          .catch(err => console.log(err));
      }

      users = users.filter(u => u.login === login && u.password === password);

      if (!users.length) {
        res.json({
          error: true,
          message: 'Identifiant ou mot de passe incorecte',
        });
      }

      const userData = users[0];
      userData.isLoggedIn = true;
      req.session.user = userData;
      res.json(users[0]);
    })
    .catch(err => console.log(err));
};

exports.logout = (req, res, next) => {
  req.session.destroy(err => {
    if (err) {
      res.json({error: true});
    }
    res.json({error: false});
  });
};
