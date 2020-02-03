const { Router } = require('express');
const router = Router();

router.get('/', function(req, res) {
  let date = {
    time: new Date(),
  };
  res.send(` <pre> ${JSON.stringify(date)} </pre>`);
});

module.exports = router;
