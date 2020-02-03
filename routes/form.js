const { Router } = require('express');
const router = Router();
const path = require('path');
const globalStorage = require('../storage/storage');
let bodyParser = require('body-parser');
const User = require('../auth/user');

let urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../views', 'form.html'));
});

router.post('/', urlencodedParser, function(req, res) {
  globalStorage.push(
    new User(
      globalStorage.length,
      req.body.username,
      req.body.pass,
      req.body.gender,
      `${!!req.body.agree}`
    )
  );
  res.redirect('/result');
});

module.exports = router;
