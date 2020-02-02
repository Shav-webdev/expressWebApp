const {Router} = require("express");
const router = Router();
const globalStorage = require("../storage/storage");
const express = require('express');

const app = express();

app.use(express.json())

/**
 * req.param(name [, defaultValue]) Deprecated. Use either req.params,
 * req.body or req.query[If there is no query string, it is the empty
 * object, {}], as applicable.*/

router.get('/', (req, res) => {
    res.send(` <pre> req.params : ${JSON.stringify(req.params)} </pre>
             <pre>req.query : ${JSON.stringify(req.query)}</pre>  <!---->
             <pre>req.headers : ${JSON.stringify(req.headers)}</pre>
             <pre> req.cookies : ${JSON.stringify(req.cookies)} </pre>`);

});

module.exports = router;