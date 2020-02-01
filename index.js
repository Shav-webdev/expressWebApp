const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cookieParser());

app.use(function(req, res, next) {
  let cookie = req.cookies.todayDate;
  if (cookie === undefined) {
    // no: set a new cookie
    let dateNow = new Date();

    res.cookie(
      'todayDate',
      dateNow
        .toString()
        .split(',')
        .join(','),
      { maxAge: 900000, httpOnly: true }
    );
    console.log('cookie created successfully');
  } else {
    // yes, cookie was already present
    console.log('cookie exists', cookie);
  }
  next();
});

/**
 * router for home page*/

app.get('/', (req, res) => {
  res.send(`<h1>Hello world </h1>
            <span>${req.cookies.todayDate}</span>`);
});

/**
 * req.param(name [, defaultValue]) Deprecated. Use either req.params, req.body or req.query, as applicable.*/

app.get('/myroute/:param', (req, res) => {
  res.send(` <pre> req.params : ${JSON.stringify(req.params)} </pre>
             <pre>req.query : ${JSON.stringify(req.query)}</pre>  <!--If there is no query string, it is the empty object, {}-->
             <pre>req.headers : ${JSON.stringify(req.headers)}</pre>
             <pre> req.cookies : ${JSON.stringify(req.cookies)} </pre>`);
  // res.send(req.query);
});

app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'form.html'));
});

app.listen(PORT, () => {
  console.log('Server is running...');
});
