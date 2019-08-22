var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/mail', (req, res, next) => {
  let transport = nodemailer.createTransport({
    host: 'ssl0.ovh.net',
    port: 993,
    auth: {
      user: 'zakaria@zakariaothmane.fr',
      pass: 'mohamedabdallah',
    },
  });

  const message = {
    from: 'zakaria@zakariaothmane.fr', // Sender address
    to: 'othmane.zakaria79@gmail.com', // List of recipients
    subject: 'Je fais des tests avec nodemailer', // Subject line
    text: 'Je fais des tests avec nodemailer', // Plain text body
  };

  transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err);
      res.send('Une erreur est survenue');
    } else {
      console.log(info);
      res.send('Ok');
    }
  });
});

/* GET home page. */
router.get('/*', function(req, res, next) {
  res.render('index');
});

module.exports = router;
