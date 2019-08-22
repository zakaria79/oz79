const Contact = require('./../models/contact');

exports.newContact = (req, res, next) => {
  const {email, message} = req.body;

  const contact = new Contact({email, message});
  contact
    .save()
    .then(result => {
      res.json(result);
    })
    .catch(err => console.error(err));

  if (!email || !message) {
    res.json({error: true, message: 'Champs vides'});
  }

  res.json(req.body);
};
