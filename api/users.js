const { Router } = require('express');
const router = Router();
const globalStorage  = require('../storage/storage');
const User = require('../auth/user');
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', function(req, res) {
  res.json(globalStorage)
});

router.post('/', urlencodedParser, function(req, res) {
  globalStorage.push(new User(globalStorage.length, req.body.username, req.body.pass, req.body.gender, `${!!req.body.agree}`));
  console.log(globalStorage);
});


module.exports = router;


