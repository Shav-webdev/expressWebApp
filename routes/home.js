const express = require("express");
const router = express.Router();

/**
 * router for home page*/

router.get('/', (req, res) => {
  res.send(`<h1>Hello world </h1>
            <span>${req.cookies.todayDate}</span>`);
});

module.exports = router;


