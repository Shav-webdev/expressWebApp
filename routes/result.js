const { Router } = require('express');
const router = Router();
const storage = require('../storage/storage');

/**
 * router for result page*/

router.get('/', (req, res) => {
  res.render('result', { title: 'Result', message: JSON.stringify(storage) });
});

module.exports = router;
