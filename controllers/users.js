const User = require('./../models/user');
const {userAdmin} = require('./../config/data');

exports.signin = (req, res, next) => {
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

      res.json(users[0]);
    })
    .catch(err => console.log(err));
};
